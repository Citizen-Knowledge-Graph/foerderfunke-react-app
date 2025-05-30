import React, { useMemo } from 'react';
import useFetchData from "@/ui/shared-hooks/utility/useFetchResource";
import useTranslation from "@/ui/language/useTranslation";
import EligibilityOverviewScreen from './EligibilityOverviewScreen';
import useEligibilityData from "./hooks/useEligibilityData";
import { useLanguageStore } from '@/ui/storage/useLanguageStore';
import { useMetadataStore, useValidationReportStore } from '@/ui/storage/zustand';

const EligibilityOverviewScreenContainer = () => {
    const { t } = useTranslation();
    const language = useLanguageStore((state) => state.language);

    const hydrationData = useFetchData('assets/data/requirement-profiles/requirement-profiles-hydration.json');
    const validationReport = useValidationReportStore((state) => state.validationReport);
    const metadata = useMetadataStore((state) => state.metadata);
    const eligibilityData = useEligibilityData(validationReport, metadata, hydrationData, language);
    
    const iconPaths = useMemo(() => ({
        eligible: `${process.env.PUBLIC_URL}/assets/images/application/icon-image-eligible.svg`,
        preliminaryEligible: `${process.env.PUBLIC_URL}/assets/images/application/icon-image-preliminary-eligible.svg`,
        ineligible: `${process.env.PUBLIC_URL}/assets/images/application/icon-image-ineligible.svg`,
        missing: `${process.env.PUBLIC_URL}/assets/images/application/icon-image-missing.svg`,
    }), []);

    return (
        <EligibilityOverviewScreen
            t={t}
            iconPaths={iconPaths}
            eligibilityData={eligibilityData}
        />
    );
};

export default EligibilityOverviewScreenContainer;

