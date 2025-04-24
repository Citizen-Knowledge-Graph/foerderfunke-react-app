import React, { useContext } from 'react';
import { LanguageContext } from "@/ui/language/LanguageContext";
import { useValidationUpdate } from "@/ui/storage/updates";
import useFetchData from "@/ui/shared-hooks/useFetchData";
import useTranslation from "@/ui/language/useTranslation";
import EligibilityOverviewScreen from './EligibilityOverviewScreen';
import useEligibilityData from "./hooks/useEligibilityData";
import useProduceValidationReport from './hooks/useProduceValidationReport';
import useRenderWhyLogger from "@/ui/shared-hooks/useRenderWhyLogger";


const EligibilityOverviewScreenContainer = () => {
    const { t } = useTranslation();
    const { language } = useContext(LanguageContext);
    
    const validationIsLoading = useValidationUpdate((state) => state.validationIsLoading);
    const hydrationData = useFetchData('assets/data/requirement-profiles/requirement-profiles-hydration.json');
    const { validationReport, metadata } = useProduceValidationReport();
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

