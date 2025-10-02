import React from 'react';
import { useSearchParams } from 'react-router-dom';
import useFetchData from "@/ui/shared-hooks/utility/useFetchResource";
import useTranslation from "@/ui/language/useTranslation";
import EligibilityOverviewScreen from './EligibilityOverviewScreen';
import useEligibilityData from "./hooks/useEligibilityData";
import { useLanguageStore } from '@/ui/storage/useLanguageStore';
import { useMetadataStore, useSelectedFiltersStore } from '@/ui/storage/zustand';
import useProduceValidationReport from './hooks/useProduceValidationReport';
import useFilterEligibilityData from './hooks/useFilterEligibilityData';
import { useInitialiseFilters, useFilterChangeHandler } from './hooks/useBuildFilterSetup';

const EligibilityOverviewScreenContainer = () => {
    const { t } = useTranslation();
    const language = useLanguageStore((state) => state.language);
    const [searchParams, setSearchParams] = useSearchParams();
    const { selectedFilters, setSelectedFilters } = useSelectedFiltersStore();

    const hydrationData = useFetchData('assets/data/requirement-profiles/requirement-profiles-hydration.json');
    const { validationReport } = useProduceValidationReport();
    const metadata = useMetadataStore((state) => state.metadata);
    const { eligibilityData, filterOptions } = useEligibilityData(validationReport, metadata, hydrationData, language);
    const filters = useInitialiseFilters(filterOptions, searchParams, selectedFilters, setSearchParams, setSelectedFilters);
    const handleChangeFilters = useFilterChangeHandler({ filters, setSearchParams, setSelectedFilters });
    const filteredEligibilityData = useFilterEligibilityData(eligibilityData, filters);

    console.log('validationReport', validationReport);

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

