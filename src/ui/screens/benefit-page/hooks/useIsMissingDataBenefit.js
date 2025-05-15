import { useMemo } from 'react';
import { ValidationResult } from '@foerderfunke/matching-engine';
import { useValidationReportStore } from '@/ui/storage/zustand';

const useIsMissingDataBenefit = (id) => {
    const validationReport = useValidationReportStore((state) => state.validationReport);
    
    return useMemo(() => {
        if (!validationReport) return false;

        const report = validationReport.reports?.find(
            report => report.rpUri === `https://foerderfunke.org/default#${id.split(":")[1]}`
        );

        return report?.result !== ValidationResult.UNDETERMINABLE;
    }, [id, validationReport]);
};

export default useIsMissingDataBenefit;
