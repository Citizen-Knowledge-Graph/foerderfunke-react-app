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
            if (result === ValidationResult.ELIGIBLE) {
                eligibilityData.eligible.push({uri: rpUri, title: title});
            }
            if (result === ValidationResult.INELIGIBLE) {
                eligibilityData.nonEligible.push({uri: rpUri, title: title});
            }
            if (result === ValidationResult.UNDETERMINABLE) {
                eligibilityData.missingData.push({uri: rpUri, title: title});
            }
        }

        return eligibilityData;
    }, [validationReport, hydrationData]);
};
