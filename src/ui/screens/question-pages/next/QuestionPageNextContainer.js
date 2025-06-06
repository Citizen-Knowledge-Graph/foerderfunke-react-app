import React, { useState, useMemo } from 'react';
import { useNavigate } from "react-router-dom";
import useTranslation from "@/ui/language/useTranslation";
import {
    questionsStackStore,
    useMetadataStore,
    useQuizReportStore,
    useValidationReportStore
} from "@/ui/storage/zustand";
import useQuestionNavigationHandlers from "../hooks/useQuestionNavigationHandlers";
import useSetupQuestionPage from "../hooks/useSetupQuestionPage";
import QuestionPageNext from "./QuestionPageNext";

const QuestionPageNextContainer = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [profileFieldUpdateError, setProfileFieldUpdateError] = useState(null);

    const quizReport = useQuizReportStore((s) => s.quizReport);
    const metadata = useMetadataStore((s) => s.metadata);
    const validationReport = useValidationReportStore((s) => s.validationReport);
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
        quizReport,
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
        if (!validationReport?.reports || !metadata?.['ff:hasRP']) return [];

        const eligibleIds = validationReport?.['ff:hasEvaluatedRequirementProfile']
            ?.filter(r => r?.['ff:hasEligibilityStatus']?.['@id'] === 'ff:eligible')
            ?.map(r => r?.['ff:hasRpUri']?.['@id']);

        if (!eligibleIds?.length) return [];

        const titles = eligibleIds
            .map(id => metadata['ff:hasRP']?.find(rp => rp?.['@id'] === id))
            .filter(Boolean)
            .map(rp => rp?.['ff:title']?.['@value'])
            .filter(Boolean);

        return titles;
    }, [validationReport, metadata]);

    const questionsCount = useMemo(() => (
        [questionsStack.length - stackCounter, questionsStack?.length + Number(quizReport?.['ff:hasNumberOfMissingDatafields']?.['@value'])]
    ), [questionsStack, stackCounter, quizReport]);

    return (
        <QuestionPageNext
            t={t}
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
