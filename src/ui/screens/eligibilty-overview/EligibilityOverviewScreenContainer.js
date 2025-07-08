import React from 'react';
import { useSearchParams } from 'react-router-dom';
import useFetchData from "@/ui/shared-hooks/utility/useFetchResource";
import useTranslation from "@/ui/language/useTranslation";
import EligibilityOverviewScreen from './EligibilityOverviewScreen';
import useEligibilityData from "./hooks/useEligibilityData";
import { useLanguageStore } from '@/ui/storage/useLanguageStore';
import { useMetadataStore } from '@/ui/storage/zustand';
import useProduceValidationReport from './hooks/useProduceValidationReport';
import useFilterEligibilityData from './hooks/useFilterEligibilityData';
import { useInitialiseFilters, useFilterChangeHandler } from './hooks/useBuildFilterSetup';

const EligibilityOverviewScreenContainer = () => {
    const { t } = useTranslation();
    const language = useLanguageStore((state) => state.language);
    const [searchParams, setSearchParams] = useSearchParams();

    const hydrationData = useFetchData('assets/data/requirement-profiles/requirement-profiles-hydration.json');
    const { validationReport } = useProduceValidationReport();
    const metadata = useMetadataStore((state) => state.metadata);
    const { eligibilityData, filterOptions } = useEligibilityData(validationReport, metadata, hydrationData, language);
    const filters = useInitialiseFilters(filterOptions, searchParams);
    const handleChangeFilters = useFilterChangeHandler({ filters, setSearchParams });
    const filteredEligibilityData = useFilterEligibilityData(eligibilityData, filters);

    return (
        <EligibilityOverviewScreen
            t={t}
            eligibilityData={filteredEligibilityData}
            filterOptions={filterOptions}
            filters={filters}
            onChangeFilters={handleChangeFilters}
        />
    );
};

export default EligibilityOverviewScreenContainer;

