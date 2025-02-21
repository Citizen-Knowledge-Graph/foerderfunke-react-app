import { ValidationResult } from '@foerderfunke/matching-engine';

export const buildEligibilityReports = (validationReport, hydrationData, language) => {
    if (!validationReport || !('reports' in validationReport)) {
        return {
            eligible: [],
            nonEligible: [],
            missingData: []
        };
    }

    const { reports } = validationReport;
    const eligibilityData = {
        eligible: [],
        nonEligible: [],
        missingData: []
    };

    for (let report of reports) {
        let { rpUri, result } = report;
        const id = hydrationData[rpUri]?.id || 'Unknown Id';
        const title = hydrationData[rpUri]?.title?.[language] || 'Unknown Title';
        const description = hydrationData[rpUri]?.description?.[language] || 'Unknown Description';
        const status = hydrationData[rpUri]?.status || 'Unknown Status';
        const requiredDocuments = hydrationData[rpUri]?.required_documents?.[language] || [];
        const additionalSupport = hydrationData[rpUri]?.additional_support?.[language] || {};
        const legalBasis = hydrationData[rpUri]?.legal_basis?.[language] || {};
        const furtherInformation = hydrationData[rpUri]?.further_information?.[language] || [];
        const data = { uri: rpUri, id, title, description, status, requiredDocuments, additionalSupport, legalBasis, furtherInformation };
        if (result === ValidationResult.ELIGIBLE) {
            eligibilityData.eligible.push(data);
        }
        if (result === ValidationResult.INELIGIBLE) {
            eligibilityData.nonEligible.push(data);
        }
        if (result === ValidationResult.UNDETERMINABLE) {
            eligibilityData.missingData.push(data);
        }
    }

    return eligibilityData;
};
