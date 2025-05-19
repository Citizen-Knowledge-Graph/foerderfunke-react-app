import React from 'react';
import { useValidationUpdate } from "@/ui/storage/updates";
import useFetchData from "@/ui/shared-hooks/utility/useFetchResource";
import useTranslation from "@/ui/language/useTranslation";
import EligibilityOverviewScreen from './EligibilityOverviewScreen';
import useEligibilityData from "./hooks/useEligibilityData";
import useProduceValidationReport from './hooks/useProduceValidationReport';
import usePopulateMetadata from '../onboarding-pages/hooks/usePopulateMetadata';
import { useLanguageStore } from '@/ui/storage/useLanguageStore';

const EligibilityOverviewScreenContainer = () => {
    const { t } = useTranslation();
    const language = useLanguageStore((state) => state.language);
    
    const validationIsLoading = useValidationUpdate((state) => state.validationIsLoading);
    const hydrationData = useFetchData('assets/data/requirement-profiles/requirement-profiles-hydration.json');
    const metadata = usePopulateMetadata();
    const validationReport = useProduceValidationReport();
    const eligibilityData = useEligibilityData(validationReport, metadata, hydrationData, language);

    const iconPaths = {
        eligible: `${process.env.PUBLIC_URL}/assets/images/application/icon-image-eligible.svg`,
        preliminaryEligible: `${process.env.PUBLIC_URL}/assets/images/application/icon-image-preliminary-eligible.svg`,
        ineligible: `${process.env.PUBLIC_URL}/assets/images/application/icon-image-ineligible.svg`,
        missing: `${process.env.PUBLIC_URL}/assets/images/application/icon-image-missing.svg`
    };

    return (
        <EligibilityOverviewScreen 
            t={t}
            iconPaths={iconPaths}
            eligibilityData={eligibilityData}
            validationIsLoading={validationIsLoading}
        />
    );
};

export default EligibilityOverviewScreenContainer;

