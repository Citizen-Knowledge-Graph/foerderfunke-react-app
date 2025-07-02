import React, { useMemo, useState } from 'react';
import useFetchData from "@/ui/shared-hooks/utility/useFetchResource";
import useTranslation from "@/ui/language/useTranslation";
import EligibilityOverviewScreen from './EligibilityOverviewScreen';
import useEligibilityData from "./hooks/useEligibilityData";
import { useLanguageStore } from '@/ui/storage/useLanguageStore';
import { useMetadataStore } from '@/ui/storage/zustand';
import useProduceValidationReport from './hooks/useProduceValidationReport';
import useFilterEligibilityData from './hooks/useFilterEligibilityData';

const EligibilityOverviewScreenContainer = () => {
    const { t } = useTranslation();
    const language = useLanguageStore((state) => state.language);
    const [filters, setFilters] = useState({
        providingAgencies: [],
        associatedLaws: [],
        benefitCategories: [],
        administrativeLevels: []
    });

    const hydrationData = useFetchData('assets/data/requirement-profiles/requirement-profiles-hydration.json');
    const { validationReport } = useProduceValidationReport();
    const metadata = useMetadataStore((state) => state.metadata);
    const { eligibilityData, filterOptions } = useEligibilityData(validationReport, metadata, hydrationData, language);
    const filteredEligibilityData = useFilterEligibilityData(eligibilityData, filters);

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
            eligibilityData={filteredEligibilityData}
            filterOptions={filterOptions}
            filters={filters}
            onChangeFilters={setFilters}
        />
    );
};

export default EligibilityOverviewScreenContainer;

