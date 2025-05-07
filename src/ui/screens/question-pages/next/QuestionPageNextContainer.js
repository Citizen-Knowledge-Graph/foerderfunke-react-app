import React, { useState, useMemo } from 'react';
import { useNavigate } from "react-router-dom";
import { useQuestionsUpdate } from "@/ui/storage/updates";
import useTranslation from "@/ui/language/useTranslation";
import { ValidationResult } from "@foerderfunke/matching-engine";
import {
    questionsStackStore,
    useQuestionsStore,
    useValidationReportStore,
    useSelectedTopicsStore,
    useSelectedBenefitStore
} from "@/ui/storage/zustand";
import useQuestionNavigationHandlers from "../hooks/useQuestionNavigationHandlers";
import useSetupQuestionPage from "../hooks/useSetupQuestionPage";
import QuestionPageNext from "./QuestionPageNext";
import useAccessMetadata from '@/ui/storage/useAccessMetadata';
import useRenderWhyLogger from '@/ui/shared-hooks/useRenderWhyLogger';

const QuestionPageNextContainer = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [profileFieldUpdateError, setProfileFieldUpdateError] = useState(null);

    const profileQuestions = useQuestionsStore((s) => s.questions);
    const metadata = useAccessMetadata
    const validationReport = useValidationReportStore((s) => s.validationReport);
    const questionsAreLoading = useQuestionsUpdate((s) => s.questionsAreLoading);
    const {
        questionsStack,
        addQuestionToStack,
        stackCounter,
        setStackCounter
    } = questionsStackStore();

    const topicIds = useSelectedTopicsStore((s) => s.selectedTopics);
    const selectedBenefit = useSelectedBenefitStore((s) => s.selectedBenefit);
    const updateCounter = useQuestionsUpdate((s) => s.updateCounter);

    const {
        currentQuestion,
        value,
        setValue,
        profileFieldRetrievalError,
    } = useSetupQuestionPage(
        profileQuestions,
        questionsStack,
        stackCounter,
        addQuestionToStack,
        profileFieldUpdateError,
        setProfileFieldUpdateError
    )

    const { handleAddClick, handleBackClick } = useQuestionNavigationHandlers({
        setProfileFieldUpdateError,
        currentQuestion,
        setStackCounter,
        stackCounter,
        questionsStack,
        navigate
    });

    useRenderWhyLogger(
        'QuestionPageNextContainer',
        {
            topicIds,
            selectedBenefit,
            profileQuestions,
            updateCounter,
            questionsStack,
            stackCounter,
            currentQuestion,
            value,
            profileFieldRetrievalError,
            profileFieldUpdateError,
            metadata
        });

    // Some props for the UI
    const eligibleRPs = useMemo(() => {
        if (!validationReport?.reports || !metadata?.rp) return [];

        return validationReport.reports
            .filter(r => r.result === ValidationResult.ELIGIBLE)
            .map(r => metadata.rp[r.rpUri]?.title)
            .filter(Boolean);
    }, [validationReport?.reports, metadata?.rp]);

    const questionsCount = useMemo(() => (
        [questionsStack.length - stackCounter, questionsStack?.length + profileQuestions?.prioritizedMissingDataFields?.fields?.length]
    ), [questionsStack, stackCounter, profileQuestions]);

    const isLoading = questionsAreLoading || !currentQuestion;

    return (
        <QuestionPageNext
            t={t}
            isLoading={isLoading}
            currentQuestion={currentQuestion}
            value={value}
            setValue={setValue}
            error={profileFieldRetrievalError || profileFieldUpdateError}
            handleAddClick={handleAddClick}
            handleBackClick={handleBackClick}
            eligibleRPs={eligibleRPs}
            questionsCount={questionsCount}
        />
    );
};

export default QuestionPageNextContainer;
