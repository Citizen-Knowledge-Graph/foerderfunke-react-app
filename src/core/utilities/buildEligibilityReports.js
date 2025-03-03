export const buildEligibilityReports = (validationReport, hydrationData, language) => {
    if (!validationReport || !('reports' in validationReport)) {
        return {
            eligible: [],
            nonEligible: [],
            missingData: []
        };
    }

    const { reports } = validationReport;

    const allReports = reports.map(report => {
        let { rpUri, result } = report;
        const id = hydrationData[rpUri]?.id || 'Unknown Id';
        const title = hydrationData[rpUri]?.title?.[language] || 'Unknown Title';
        const category = hydrationData[rpUri]?.category || 'Unknown Category';
        const description = hydrationData[rpUri]?.description?.[language] || 'Unknown Description';
        const status = hydrationData[rpUri]?.status || 'Unknown Status';
        const requiredDocuments = hydrationData[rpUri]?.required_documents?.[language] || [];
        const additionalSupport = hydrationData[rpUri]?.additional_support?.[language] || {};
        const legalBasis = hydrationData[rpUri]?.legal_basis?.[language] || {};
        const furtherInformation = hydrationData[rpUri]?.further_information?.[language] || [];
        return { uri: rpUri, result, id, title, category, description, status, requiredDocuments, additionalSupport, legalBasis, furtherInformation };
    });    

    return allReports.reduce((acc, report) => {
        const { category, result } = report;
        
        if (!acc[category]) {
            acc[category] = {};
        }
        if (!acc[category][result]) {
            acc[category][result] = [];
        }
        
        acc[category][result].push(report);
        return acc;
    }, {});
};
