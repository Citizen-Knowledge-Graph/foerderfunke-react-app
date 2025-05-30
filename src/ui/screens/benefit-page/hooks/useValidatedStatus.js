import { useMemo } from 'react';
import { useValidationReportStore } from '@/ui/storage/zustand';

const useValidatedStatus = (id) => {
    const validationReport = useValidationReportStore((state) => state.validationReport);

    return useMemo(() => {
        if (!validationReport) return false;
        const report = validationReport?.['ff:hasEvaluatedRequirementProfile']?.find(rp => rp['ff:hasRpUri']['@id'] === id);
        return report?.["ff:hasEligibilityStatus"]["@id"] !== "ff:missingData" || false;
    }, [id, validationReport]);
};

export default useValidatedStatus;
