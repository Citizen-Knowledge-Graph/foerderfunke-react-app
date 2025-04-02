import React, { useState, useMemo } from 'react';
import { useNavigate } from "react-router-dom";
import { useQuestionsUpdate, useValidationUpdate } from "@/ui/storage/updates";
import useTranslation from "@/ui/language/useTranslation";
import { ValidationResult } from "@foerderfunke/matching-engine";
import { useProfileSectionStore } from "@/ui/storage/useProfileSectionStore";
import {
    questionsStackStore,
    useQuestionsStore,
    useValidationReportStore,
    useMetadataStore
} from "@/ui/storage/zustand";
import useQuestionNavigationHandlers from "../hooks/useQuestionNavigationHandlers";
import useSetupQuestionPage from "../hooks/useSetupQuestionPage";
import QuestionPageNext from "./QuestionPageNext";

const QuestionPageNextContainer = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [profileFieldUpdateError, setProfileFieldUpdateError] = useState(null);
    
    const profileQuestions = useQuestionsStore((s) => s.questions);
    const metadata = useMetadataStore((s) => s.metadata);
    const validationReport = useValidationReportStore((s) => s.validationReport);
    const validationIsLoading = useValidationUpdate((s) => s.validationIsLoading);
    const questionsAreLoading = useQuestionsUpdate((s) => s.questionsAreLoading);
    const {
        questionsStack,
        addQuestionToStack,
        stackCounter,
        setStackCounter
    } = questionsStackStore();
    const retrieveCurrentEntityData = useProfileSectionStore((s) => s.retrieveCurrentEntityData);
    const entityData = useMemo(() => retrieveCurrentEntityData(), [retrieveCurrentEntityData]);

    const {
        currentQuestion,
        value,
        setValue,
        profileFieldRetrievalError,
    } = useSetupQuestionPage(
        entityData,
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
        entityData,
        setStackCounter,
        stackCounter,
        questionsStack,
        navigate
    });

    // Some props for the UI
    const eligibleRPs = useMemo(() => (
        validationReport?.reports
            .filter(r => r.result === ValidationResult.ELIGIBLE)
            .map(r => metadata?.rp[r.rpUri]?.title)
    ), [validationReport, metadata]);

    const questionsCount = useMemo(() => (
        [questionsStack.length - stackCounter, questionsStack.length + profileQuestions.fields.length]
    ), [questionsStack, stackCounter, profileQuestions]);

    const isLoading = validationIsLoading || questionsAreLoading || !currentQuestion;

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
