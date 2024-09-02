import dayjs from "dayjs";

export const expand = (uri) => {
    return uri.startsWith("ff:") ? "https://foerderfunke.org/default#" + uri.split(":")[1] : uri;
};

export const getChoiceLabel = (value, dfObj) => {
    if (value === "true") return "yes";
    if (value === "false") return "no";
    return dfObj.choices.find(choice => expand(choice.value) === expand(value)).label;
};

export const convertUserValueRaw = (raw, dfObj) => {
    if (Array.isArray(raw)) {
        return raw.map(r => getChoiceLabel(r, dfObj)).join(", ");
    }
    if (typeof raw === 'boolean') {
        return raw ? "yes" : "no";
    }
    if (raw === "true") return "yes";
    if (raw === "false") return "no";
    if (!isNaN(raw)) {
        return Number(raw);
    }
    if (raw.startsWith("ff:")) {
        return getChoiceLabel(raw, dfObj);
    }
    if (dayjs(raw).isValid()) {
        return dayjs(raw).format("YYYY-MM-DD");
    }
    return raw;
};
