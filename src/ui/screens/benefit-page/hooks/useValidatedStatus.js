import { useMemo } from 'react';
import { useValidationReportStore } from '@/ui/storage/zustand';

const useValidatedStatus = (id) => {
    const validationReport = useValidationReportStore((state) => state.validationReport);

    return useMemo(() => {
        if (!validationReport) return false;
        const report = validationReport?.['ff:hasEvaluatedRequirementProfile']?.find(rp => rp['ff:hasRpUri']['@id'] === id);
        return {
            validatedStatus: report?.["ff:hasEligibilityStatus"]["@id"] !== "ff:missingData" || false,
            validationResult: report?.["ff:hasEligibilityStatus"]["@id"]?.replace(/^ff:/, "") || null
        }
    }, [id, validationReport]);
};

export default useValidatedStatus;
