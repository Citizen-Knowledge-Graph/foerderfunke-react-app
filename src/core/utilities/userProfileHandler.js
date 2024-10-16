import { convertUserValueRaw, expand } from "./rdfParsing";

/**
 * Displays the user's value for a given data field, either from the user profile or materialized outputs.
 *
 * @param {Object} dfObj - Data field object containing metadata.
 * @param {Object} userProfile - The user profile data.
 * @param {Object} materializedOutputs - Inferred data computed by the system.
 * @param {Object} metadata - Metadata that provides additional information.
 * @param {Function} t - Translation function for internationalization.
 * @returns {string} - The displayed user value or an inferred value, or a fallback if not available.
 */
export const showUserValue = (dfObj, userProfile, materializedOutputs, metadata, t) => {
    if (dfObj.datafield && userProfile[dfObj.datafield]) {
        const userValueRaw = userProfile[dfObj.datafield];
        return convertUserValueRaw(userValueRaw, dfObj, t);
    }

    const dfUri = expand(dfObj.uri);
    if (materializedOutputs[dfUri]) {
        const str = convertUserValueRaw(materializedOutputs[dfUri].triples[0].o, dfObj, t);
        return `${str} (${t('app.benefitPage.rulesTable.inferredFrom')} "${metadata.df[materializedOutputs[dfUri].input].label}")`;
    }

    return "-";
};
