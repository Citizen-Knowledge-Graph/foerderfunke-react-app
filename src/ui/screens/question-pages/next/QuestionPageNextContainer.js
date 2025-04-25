import React, { useState, useMemo } from 'react';
import { useNavigate } from "react-router-dom";
import { useQuestionsUpdate } from "@/ui/storage/updates";
import useTranslation from "@/ui/language/useTranslation";
import { ValidationResult } from "@foerderfunke/matching-engine";
import {
    questionsStackStore,
    useQuestionsStore,
    useValidationReportStore,
    useMetadataStore
} from "@/ui/storage/zustand";
import useQuestionNavigationHandlers from "../hooks/useQuestionNavigationHandlers";
import useSetupQuestionPage from "../hooks/useSetupQuestionPage";
import QuestionPageNext from "./QuestionPageNext";
import useRenderWhyLogger from '@/ui/shared-hooks/useRenderWhyLogger';
import useRunPrioritizedQuestions from '@/ui/shared-hooks/useRunPrioritizedQuestions';


const QuestionPageNextContainer = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [profileFieldUpdateError, setProfileFieldUpdateError] = useState(null);
    const updateCounter = useQuestionsUpdate((s) => s.updateCounter);
    const runPrioritizedQuestions = useRunPrioritizedQuestions();


    const profileQuestions = useQuestionsStore((s) => s.questions);
    const metadata = useMetadataStore((s) => s.metadata);
    const validationReport = useValidationReportStore((s) => s.validationReport);
    const questionsAreLoading = useQuestionsUpdate((s) => s.questionsAreLoading);
    const {
        questionsStack,
        addQuestionToStack,
        stackCounter,
        setStackCounter
    } = questionsStackStore();

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

    useRenderWhyLogger(
        'QuestionPageNextContainer',
        {
        runPrioritizedQuestions,
          updateCounter,
          profileQuestions,
          metadata,
          validationReport,
          questionsAreLoading,
          questionsStack,
          stackCounter,
          addQuestionToStack,
          setStackCounter,
          profileFieldRetrievalError,
          profileFieldUpdateError,
          currentQuestionId: currentQuestion?.id,
          value,
          isLoading,
          eligibleRPs,
          questionsCount,
          handleAddClick,
          handleBackClick,
        }
      );

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
