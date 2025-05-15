import {RuleType} from "@foerderfunke/matching-engine/src/prematch";
import {convertUserValueRaw, expand, getChoiceLabel} from "./rdfParsing";
import {ValidationResult} from "@foerderfunke/matching-engine";
import {formatEuro} from "@/ui/utils/currencyUtils";

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

export const buildSingleRuleOutput = (rulesObj, dfObj, metadata, t) => {
    let msg = "";
    switch(rulesObj.type) {
        case RuleType.EXISTENCE:
            return t('app.benefitPage.rulesTable.mustBeAnswered');
        case RuleType.VALUE_IN:
            msg += t('app.benefitPage.rulesTable.mustBe') + " "
                + (rulesObj.values.length === 1 ? "" : (t('app.benefitPage.rulesTable.oneOf') + ": "));
            for (let value of rulesObj.values) {
                msg += "\"" + getChoiceLabel(value, dfObj, t) + "\", ";
            }
            return trim(msg);
        case RuleType.VALUE_NOT_IN:
            msg += t('app.benefitPage.rulesTable.mustNotBe') + " " + (rulesObj.values.length === 1 ? "" : (t('app.benefitPage.rulesTable.oneOf') + ": "));
            for (let value of rulesObj.values) {
                msg += "\"" + getChoiceLabel(value, dfObj, t) + "\", ";
            }
            return trim(msg);
        case RuleType.MIN_MAX:
            return t('app.benefitPage.rulesTable.mustBe') + " " + buildMinMaxMathNotation(rulesObj);
        case RuleType.OR:
            msg += t('app.benefitPage.rulesTable.oneOrBothTrue')  + ": ";
            for (let element of rulesObj.elements) {
                // this is pretty hardcoded for the very limited OR-cases we support for now, compare the respective code in matching-engine TODO
                msg += "\"" + metadata.df[element.path].label + "\": \"" + getChoiceLabel(element.valueIn[0], null, t) + "\", ";
            }
            return trim(msg);
        default:
            return "Unknown rule type";
    }
}

export const showUserValue = (dfObj, userProfile, materializedOutputs, metadata, t) => {
    if (dfObj.datafield === "ff:vermoegen") {
        let userValueRaw = userProfile[dfObj.datafield];
        return formatEuro(userValueRaw);
    }
    
    if (dfObj.datafield && userProfile.hasOwnProperty(dfObj.datafield)) { // ff:pensionable and ff:age don't have it, they will also not show up in the profile as they are materialized on the fly
        let userValueRaw = userProfile[dfObj.datafield];
        return convertUserValueRaw(userValueRaw, dfObj, t);
    }
    let dfUri = expand(dfObj.uri);
    if (materializedOutputs[dfUri]) {
        let str = convertUserValueRaw(materializedOutputs[dfUri].triples[0].o, dfObj, t);
        str += " (" + t('app.benefitPage.rulesTable.inferredFrom') + " \"" + metadata.df[materializedOutputs[dfUri].input].label + "\")";
        return str;
    }
    return "-";
}

export const buildRulesOutput = (rulesData, metadata, benefitReport, userProfile, t) => {
    const elements = [];

    let materializedOutputs = {};
    if (benefitReport && Object.keys(benefitReport).length > 0 && benefitReport?.materializationReport?.rounds.length > 0) {
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
            rule: buildSingleRuleOutput(rulesObj, dfObj, metadata, t)
        };

        let userValue = "-";
        let validity = "unknown"; // "valid", "invalid", "missing"
        if (dfObj) {
            dfObj.uri = dfUri;
            userValue = userProfile ? showUserValue(dfObj, userProfile, materializedOutputs, metadata, t) : null

            if (benefitReport?.result === ValidationResult.ELIGIBLE) {
                validity = "valid";
            } else if (benefitReport?.missingUserInput?.find(missing => missing.dfUri === dfObj.uri)) {
                validity = "missing";
            } else if (benefitReport?.violations?.find(violation => violation.path === dfObj.uri)) {
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
