import React, { useMemo, useState } from 'react';
import useFetchData from "@/ui/shared-hooks/utility/useFetchResource";
import useTranslation from "@/ui/language/useTranslation";
import EligibilityOverviewScreen from './EligibilityOverviewScreen';
import useEligibilityData from "./hooks/useEligibilityData";
import { useLanguageStore } from '@/ui/storage/useLanguageStore';
import { useMetadataStore } from '@/ui/storage/zustand';
import useProduceValidationReport from './hooks/useProduceValidationReport';

const EligibilityOverviewScreenContainer = () => {
    const { t } = useTranslation();
    const language = useLanguageStore((state) => state.language);
    const [filters, setFilters] = useState({
        providingAgency: ['ff:sozialamt']
    });

    const hydrationData = useFetchData('assets/data/requirement-profiles/requirement-profiles-hydration.json');
    const { validationReport } = useProduceValidationReport();
    const metadata = useMetadataStore((state) => state.metadata);
    const { eligibilityData, filterSet } = useEligibilityData(validationReport, metadata, hydrationData, language);
    const filteredEligibilityData = useMemo(() => {
        if (!eligibilityData || Object.entries(filters).length === 0) {
            return null;
        }

        const filtered = Object.fromEntries(
            Object.entries(eligibilityData).map(([category, eligibilityCategory]) => {
                const filteredCategory = Object.fromEntries(
                    Object.entries(eligibilityCategory).map(([key, items]) => {
                        const kept = items.filter(item =>
                            filters.providingAgency.includes(item.providingAgency)
                        );
                        return [key, kept];
                    })
                );
                return [category, filteredCategory];
            })
        );

        console.log(filtered);
        return filtered;
    }, [eligibilityData, filters]);

    console.log('Filtered Eligibility Data:', filteredEligibilityData);

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
            filterSet={filterSet}
            filters={filters}
            setFilters={setFilters}
        />
    );
};

export default EligibilityOverviewScreenContainer;

