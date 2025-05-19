import React from 'react';
import { useParams } from "react-router-dom";
import useTranslation from "@/ui/language/useTranslation";
import useFetchStaticBenefitPageData from './hooks/useFetchStaticBenefitPageData';
import useIsMissingDataBenefit from "./hooks/useIsMissingDataBenefit";
import useBuildCategoryTitles from "./hooks/useBuildCategoryTitles";
import BenefitPageScreen from './BenefitPageScreen';
import { useLanguageStore } from '@/ui/storage/useLanguageStore';
import useRenderWhyLogger from '@/ui/shared-hooks/utility/useRenderWhyLogger';
import { useMetadataStore, useUserStore, useValidationReportStore } from '@/ui/storage/zustand';
import { useInitialisationState } from '@/ui/storage/updates';
import { useValidationUpdate } from '@/ui/storage/updates';
import { useQuestionsStore } from '@/ui/storage/zustand';
import { useSelectedBenefitStore } from '@/ui/storage/zustand';
import { useSelectedTopicsStore } from '@/ui/storage/zustand';

const BenefitPageScreenContainer = () => {
    const { id } = useParams();
    const { t } = useTranslation();
    const language = useLanguageStore((state) => state.language);
    const setInitialisationState = useInitialisationState((state) => state.setInitialisationState);
    const initialisationState = useInitialisationState((state) => state.initialisationState);
    const updateCounterValidation = useValidationUpdate((state) => state.updateCounter);
    const selectedTopics = useSelectedTopicsStore((state) => state.selectedTopics);
    const selectedBenefits = useSelectedBenefitStore((state) => state.selectedBenefits);

    const benefitPageData = useFetchStaticBenefitPageData(id, language);
    const categoryTitles = useBuildCategoryTitles(id, language);
    const validatedStatus = useIsMissingDataBenefit(id);
    const userId = useUserStore((state) => state.activeUserId);
    const questions = useQuestionsStore((state) => state.questions);

    const isLoading = !benefitPageData || !categoryTitles || !validatedStatus;

    // import to check render cycles
    const metadata = useMetadataStore((state) => state.metadata);
    const validationReport = useValidationReportStore((state) => state.validationReport);

    useRenderWhyLogger('BenefitPageScreenContainer', {
        t,
        useBuildCategoryTitles,
        useFetchStaticBenefitPageData,
        useIsMissingDataBenefit,
        benefitPageData,
        categoryTitles,
        validatedStatus,
        isLoading,
        metadata,
        questions,
        validationReport,
        language,
        id,
        initialisationState,
        setInitialisationState,
        updateCounterValidation,
        userId,
        selectedTopics,
        selectedBenefits,
    });

    return (
        <BenefitPageScreen
            t={t}
            isLoading={isLoading}
            id={id}
            benefitPageData={benefitPageData}
            validatedStatus={validatedStatus}
            categoryTitles={categoryTitles}
        />
    );
};

export default BenefitPageScreenContainer;
