import { RuleType } from "@foerderfunke/matching-engine/src/prematch";
import { convertUserValueRaw, expand, getChoiceLabel } from "./rdfParsing";
import { formatEuro } from "@/ui/utils/currencyUtils";

export const buildMinMaxMathNotation = (obj) => {
    const parts = [];
    if (obj.minExclusive != null) parts.push(`> ${obj.minExclusive}`);
    if (obj.minInclusive != null) parts.push(`≥ ${obj.minInclusive}`);
    if (obj.maxExclusive != null) parts.push(`< ${obj.maxExclusive}`);
    if (obj.maxInclusive != null) parts.push(`≤ ${obj.maxInclusive}`);
    return parts.join(", ");
};

export const buildSingleRuleOutput = (rulesObj, dfObj, metadata, t) => {
    const label = (val) => `"${getChoiceLabel(val, dfObj, t)}"`;
    const dfList = metadata?.["ff:hasDF"] || [];

    switch (rulesObj.type) {
        case RuleType.EXISTENCE:
            return t("app.benefitPage.rulesTable.mustBeAnswered");

        case RuleType.VALUE_IN: {
            const values = rulesObj.values.map(label).join(", ");
            const oneOfText = rulesObj.values.length > 1 ? `${t("app.benefitPage.rulesTable.oneOf")}: ` : "";
            return `${t("app.benefitPage.rulesTable.mustBe")} ${oneOfText}${values}`;
        }

        case RuleType.VALUE_NOT_IN: {
            const values = rulesObj.values.map(label).join(", ");
            const oneOfText = rulesObj.values.length > 1 ? `${t("app.benefitPage.rulesTable.oneOf")}: ` : "";
            return `${t("app.benefitPage.rulesTable.mustNotBe")} ${oneOfText}${values}`;
        }

        case RuleType.MIN_MAX:
            return `${t("app.benefitPage.rulesTable.mustBe")} ${buildMinMaxMathNotation(rulesObj)}`;

        case RuleType.OR: {
            const parts = rulesObj.elements.map((el) => {
                const dfLabel = dfList.find(df => expand(df["@id"]) === el.path)?.["rdfs:label"]?.["@value"] ?? t("app.benefitPage.rulesTable.unknown");
                const valueLabel = getChoiceLabel(el.valueIn?.[0], null, t);
                return `"${dfLabel}": "${valueLabel}"`;
            });
            return `${t("app.benefitPage.rulesTable.oneOrBothTrue")}: ${parts.join(", ")}`;
        }

        default:
            return t("app.benefitPage.rulesTable.unknown");
    }
};

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

export const buildRulesOutput = (rulesData, metadata, t) => {
    return Object.entries(rulesData).map(([dfUri, rulesObj]) => {
        const dfObj = metadata["ff:hasDF"]?.find(df => expand(df["@id"]) === dfUri);

        return {
            dfUri,
            requirement: {
                label: dfObj?.["rdfs:label"]?.["@value"] ?? t("app.benefitPage.rulesTable.orRule"),
                rule: buildSingleRuleOutput(rulesObj, dfObj, metadata, t)
            }
        };
    });
};
