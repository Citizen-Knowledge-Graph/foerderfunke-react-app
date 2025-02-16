import { useMemo } from 'react';
import { ValidationResult } from '@foerderfunke/matching-engine';

const useIsMissingDataBenefit = (id, validationReport) => {
    return useMemo(() => {
        if (!validationReport) return false;

        const report = validationReport.reports?.find(
            report => report.rpUri === `https://foerderfunke.org/default#${id.split(":")[1]}`
        );

        return report?.result !== ValidationResult.UNDETERMINABLE;
    }, [id, validationReport]);
};

export default useIsMissingDataBenefit;
