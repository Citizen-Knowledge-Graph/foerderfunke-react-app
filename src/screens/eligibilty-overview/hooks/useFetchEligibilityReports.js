import { useCallback } from 'react';
import { ValidationResult } from '@foerderfunke/matching-engine';

export const useFetchEligibilityReports = ({ validationReport }) => {
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
            if (result === ValidationResult.ELIGIBLE) {
                eligibilityData.eligible.push(rpUri);
            }
            if (result === ValidationResult.INELIGIBLE) {
                eligibilityData.nonEligible.push(rpUri);
            }
            if (result === ValidationResult.UNDETERMINABLE) {
                eligibilityData.missingData.push(rpUri);
            }
        }

        return eligibilityData;
    }, [validationReport]);
};
