import { buildSingleRuleOutput } from './ruleHandler';
import { showUserValue } from './userProfileHandler';
import { ValidationResult } from "@foerderfunke/matching-engine";

export const buildRulesOutput = (rulesData, metadata, benefitReport, userProfile, t) => {
    const elements = [];
    const materializedOutputs = getMaterializedOutputs(benefitReport);

    for (const dfUri of Object.keys(rulesData)) {
        const rulesObj = rulesData[dfUri];
        const dfObj = metadata.df[dfUri];

        const requirementText = {
            label: dfObj?.label ?? "Or-Rule",
            additionalInfo: getAdditionalInfo(dfUri),
            rule: buildSingleRuleOutput(rulesObj, dfObj, metadata, t)
        };

        const userValue = dfObj ? showUserValue(dfObj, userProfile, materializedOutputs, metadata, t) : "-";
        const validity = determineValidity(dfObj, benefitReport, userValue);

        elements.push({
            dfUri: dfUri,
            requirement: requirementText,
            userValue: userValue,
            validity: validity
        });
    }

    return sortElementsByValidity(elements);
};

const getMaterializedOutputs = (benefitReport) => {
    const materializedOutputs = {};
    if (benefitReport?.materializationReport?.rounds?.length > 0) {
        const rounds = benefitReport.materializationReport.rounds;
        for (const obj of Object.values(rounds[0])) {
            materializedOutputs[obj.output] = obj;
        }
    }
    return materializedOutputs;
};

const getAdditionalInfo = (dfUri) => {
    if (dfUri === "https://foerderfunke.org/default#hasAge" || dfUri === "https://foerderfunke.org/default#pensionable") {
        return " (gets calculated from Date of Birth)";
    }
    return "";
};

const determineValidity = (dfObj, benefitReport, userValue) => {
    if (benefitReport.result === ValidationResult.ELIGIBLE) {
        return "valid";
    } else if (benefitReport.missingUserInput.find(missing => missing.dfUri === dfObj.uri)) {
        return "missing";
    } else if (benefitReport.violations.find(violation => violation.path === dfObj.uri)) {
        return "invalid";
    } else if (userValue !== "-") {
        return "valid";
    }
    return "missing";
};

/**
 * Sorts elements by validity, ensuring a specific order.
 *
 * @param {Array} elements - The array of elements to sort.
 * @returns {Array} - The sorted array.
 */
const sortElementsByValidity = (elements) => {
    const order = {
        valid: 1,
        invalid: 2,
        missing: 3,
        unknown: 4
    };

    return elements.sort((a, b) => order[a.validity] - order[b.validity]);
};
