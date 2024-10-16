import {RuleType} from "@foerderfunke/matching-engine/src/prematch";
import { getChoiceLabel } from "./rdfParsing";

export const buildMinMaxMathNotation = (obj) => {
    const str = [];
    if ("minExclusive" in obj) str.push(`> ${obj["minExclusive"]}`);
    if ("minInclusive" in obj) str.push(`≥ ${obj["minInclusive"]}`);
    if ("maxExclusive" in obj) str.push(`< ${obj["maxExclusive"]}`);
    if ("maxInclusive" in obj) str.push(`≤ ${obj["maxInclusive"]}`);
    return joinWithCommas(str);
}

export const buildSingleRuleOutput = (rulesObj, dfObj, metadata, t) => {
    switch (rulesObj.type) {
        case RuleType.EXISTENCE:
            return t('app.benefitPage.rulesTable.mustBeAnswered');
        case RuleType.VALUE_IN:
            return buildValueOutput(t('app.benefitPage.rulesTable.mustBe'), rulesObj.values, dfObj, t);
        case RuleType.VALUE_NOT_IN:
            return buildValueOutput(t('app.benefitPage.rulesTable.mustNotBe'), rulesObj.values, dfObj, t);
        case RuleType.MIN_MAX:
            return t('app.benefitPage.rulesTable.mustBe') + " " + buildMinMaxMathNotation(rulesObj);
        case RuleType.OR:
            let msg = t('app.benefitPage.rulesTable.oneOrBothTrue') + ": ";
            for (let element of rulesObj.elements) {
                msg += `"${metadata.df[element.path]?.label}": "${getChoiceLabel(element.valueIn[0], null, t)}", `;
            }
            return msg.trim().slice(0, -1); // Removes last comma
        default:
            throw new Error(`Unsupported rule type: ${rulesObj.type}`);
    }
};

const buildValueOutput = (prefix, values, dfObj, t) => {
    let msg = prefix + (values.length === 1 ? "" : (t('app.benefitPage.rulesTable.oneOf') + ": "));
    for (let value of values) {
        msg += `"${getChoiceLabel(value, dfObj, t)}", `;
    }
    return msg.trim().slice(0, -1); // Removes last comma
};

export const joinWithCommas = (arr) => {
    return arr.filter(Boolean).join(', ');
};
