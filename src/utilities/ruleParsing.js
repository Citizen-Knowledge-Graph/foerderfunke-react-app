import {RuleType} from "@foerderfunke/matching-engine/src/prematch";
import {convertUserValueRaw, expand, getChoiceLabel} from "./rdfParsing";
import {ValidationResult} from "@foerderfunke/matching-engine";

const trim = (str) => {
    return str.substring(0, str.length - 2);
}

export const buildMinMaxMathNotation = (obj) => {
    const str = [];
    if ("minExclusive" in obj) str.push(`> ${obj["minExclusive"]}`);
    if ("minInclusive" in obj) str.push(`≥ ${obj["minInclusive"]}`);
    if ("maxExclusive" in obj) str.push(`< ${obj["maxExclusive"]}`);
    if ("maxInclusive" in obj) str.push(`≤ ${obj["maxInclusive"]}`);
    return str.join(", ");
}

export const buildSingleRuleOutput = (rulesObj, dfObj, metadata) => {
    let msg = "";
    switch(rulesObj.type) {
        case RuleType.EXISTENCE:
            return "Must be answered";
        case RuleType.VALUE_IN:
            msg += "Must be " + (rulesObj.values.length === 1 ? "" : "one of: ");
            for (let value of rulesObj.values) {
                msg += "\"" + getChoiceLabel(value, dfObj) + "\", ";
            }
            return trim(msg);
        case RuleType.VALUE_NOT_IN:
            msg += "Must not be " + (rulesObj.values.length === 1 ? "" : "one of: ");
            for (let value of rulesObj.values) {
                msg += "\"" + getChoiceLabel(value, dfObj) + "\", ";
            }
            return trim(msg);
        case RuleType.MIN_MAX:
            return "Must be " + buildMinMaxMathNotation(rulesObj);
        case RuleType.OR:
            msg += "One or both of the following must be true: ";
            for (let element of rulesObj.elements) {
                // this is pretty hardcoded for the very limited OR-cases we support for now, compare the respective code in matching-engine TODO
                msg += "\"" + metadata.df[element.path].label + "\": \"" + getChoiceLabel(element.valueIn[0], null) + "\", ";
            }
            return trim(msg);
        default:
            return "Unknown rule type";
    }
}

export const showUserValue = (dfObj, userProfile, materializedOutputs, metadata) => {
    if (dfObj.datafield && userProfile[dfObj.datafield]) { // ff:pensionable and ff:age don't have it, they will also not show up in the profile as they are materialized on the fly
        let userValueRaw = userProfile[dfObj.datafield];
        return convertUserValueRaw(userValueRaw, dfObj);
    }
    let dfUri = expand(dfObj.uri);
    if (materializedOutputs[dfUri]) {
        let str = convertUserValueRaw(materializedOutputs[dfUri].triples[0].o, dfObj);
        str += " (inferred from your answer to \"" + metadata.df[materializedOutputs[dfUri].input].label + "\")";
        return str;
    }
    return "-";
}

export const buildRulesOutput = (rulesData, metadata, benefitReport, userProfile) => {
    const elements = [];

    let materializedOutputs = {};
    if (Object.keys(benefitReport).length > 0 && benefitReport.materializationReport.rounds.length > 0) {
        let matRounds = benefitReport.materializationReport.rounds;
        for (let obj of Object.values(matRounds[0])) {
            materializedOutputs[obj.output] = obj;
        }
    }

    for (let dfUri of Object.keys(rulesData)) {
        let rulesObj = rulesData[dfUri];
        let dfObj = metadata.df[dfUri];

        // Build the requirement text
        let requirementText = {
            label: dfObj?.label ?? "Or-Rule",
            additionalInfo: (dfUri === "https://foerderfunke.org/default#hasAge" || dfUri === "https://foerderfunke.org/default#pensionable")
                ? " (gets calculated from Date of Birth)"
                : "",
            rule: buildSingleRuleOutput(rulesObj, dfObj, metadata)
        };

        let userValue = "-";
        let validity = "unknown"; // "valid", "invalid", "missing"

        if (dfObj) {
            dfObj.uri = dfUri;
            userValue = showUserValue(dfObj, userProfile, materializedOutputs, metadata);

            if (benefitReport.result === ValidationResult.ELIGIBLE) {
                validity = "valid";
            } else if (benefitReport.missingUserInput.find(missing => missing.dfUri === dfObj.uri)) {
                validity = "missing";
            } else if (benefitReport.violations.find(violation => violation.path === dfObj.uri)) {
                validity = "invalid";
            } else if (userValue !== "-") {
                validity = "valid";
            } else {
                validity = "missing";
            }
        }

        elements.push({
            dfUri: dfUri,
            requirement: requirementText,
            userValue: userValue,
            validity: validity
        });
    }

    elements.sort((a, b) => {
        const order = {
            valid: 1,
            invalid: 2,
            missing: 3,
            unknown: 4
        };

        return order[a.validity] - order[b.validity];
    });

    return elements;
}
