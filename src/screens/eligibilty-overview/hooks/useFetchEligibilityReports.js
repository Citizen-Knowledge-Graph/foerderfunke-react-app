import { useCallback } from 'react';
import { ValidationResult } from '@foerderfunke/matching-engine';

export const useFetchEligibilityReports = ({ validationReport, hydrationData }) => {
    return useCallback(() => {
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
            const title = hydrationData[rpUri]?.title || 'Unknown Title';
            const description = hydrationData[rpUri]?.description || 'Unknown Description';
            const data = { uri: rpUri, title, description };
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
    }, [validationReport, hydrationData]);
};
