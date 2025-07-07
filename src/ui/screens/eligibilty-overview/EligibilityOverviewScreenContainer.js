import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
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

    const hydrationData = useFetchData('assets/data/requirement-profiles/requirement-profiles-hydration.json');
    const { validationReport } = useProduceValidationReport();
    const metadata = useMetadataStore((state) => state.metadata);
    const { eligibilityData, filterOptions } = useEligibilityData(validationReport, metadata, hydrationData, language);

    const [searchParams, setSearchParams] = useSearchParams();

    const filters = useMemo(() => {
        const f = {};
        for (let key of Object.keys(filterOptions)) {
            const allForKey = searchParams.getAll(key);
            if (allForKey.length) {
                f[key] = allForKey;
            }
        }
        return f;
    }, [searchParams, filterOptions]);

    const handleChangeFilters = (updater) => {
        const newFilters = updater(filters);
        const next = new URLSearchParams();
        for (let [key, vals] of Object.entries(newFilters)) {
            ; (vals || []).forEach((v) => next.append(key, v));
        }

        setSearchParams(next, { replace: true });
    };

    const filteredEligibilityData = useFilterEligibilityData(eligibilityData, filters);

    console.log("print search parameters", searchParams.getAll('associatedLaws'));

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

