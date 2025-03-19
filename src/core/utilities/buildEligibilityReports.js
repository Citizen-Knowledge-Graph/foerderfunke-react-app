export const buildEligibilityReports = (validationReport, metadata, hydrationData, language) => {
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
        const validationStage = metadata.rp[rpUri]?.validationStage || 'Unknown Validation Stage';
        return { uri: rpUri, result, id, title, category, description, status, requiredDocuments, additionalSupport, legalBasis, furtherInformation, validationStage };
    });    

    const eligibilityStatus = allReports.reduce((acc, report) => {
        const { category, result } = report;

        if (!acc[category]) {
            acc[category] = {};
        }

        if (result === "eligible") {
            if (!acc[category][result]) {
                acc[category][result] = { preliminary: [], final: [] };
            }

            if (report.validationStage === "https://foerderfunke.org/default#complete-validation") {
                acc[category][result].final.push(report);
            }

            if (report.validationStage === "https://foerderfunke.org/default#preliminary-validation") {
                acc[category][result].preliminary.push(report);
            }        
        } else {
            if (!acc[category][result]) {
                acc[category][result] = [];
            }
            acc[category][result].push(report);
        }

        return acc;
    }, {});

    return eligibilityStatus;
};
