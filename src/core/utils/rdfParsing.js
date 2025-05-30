import dayjs from "dayjs";

export const expand = (uri) => {
    return uri.startsWith("ff:") ? "https://foerderfunke.org/default#" + uri.split(":")[1] : uri;
};

export const getChoiceLabel = (value, dfObj, t) => {
    if (!value) return t("app.benefitPage.rulesTable.unknown");

    if (value === "true") return t("app.benefitPage.rulesTable.yes");
    if (value === "false") return t("app.benefitPage.rulesTable.no");

    const options = dfObj?.["ff:hasAnswerOption"];
    if (!options) return t("app.benefitPage.rulesTable.unknown");

    const expandedValue = expand(value);
    const match = options.find(option => expand(option?.["@id"]) === expandedValue);

    return match?.["rdfs:label"]?.["@value"] || t("app.benefitPage.rulesTable.unknown");
};

export const convertUserValueRaw = (raw, dfObj, t) => {
    if (Array.isArray(raw)) {
        return raw.map(r => getChoiceLabel(r, dfObj, t)).join(", ");
    }
    if (typeof raw === 'boolean') {
        return raw ? t('app.benefitPage.rulesTable.yes') : t('app.benefitPage.rulesTable.no');
    }
    if (raw === "true") return t('app.benefitPage.rulesTable.yes');
    if (raw === "false") return t('app.benefitPage.rulesTable.no');
    if (!isNaN(raw)) {
        return Number(raw);
    }
    if (raw.startsWith("ff:")) {
        return getChoiceLabel(raw, dfObj, t);
    }
    if (dayjs(raw).isValid()) {
        return dayjs(raw).format("YYYY-MM-DD");
    }
    return raw;
};
