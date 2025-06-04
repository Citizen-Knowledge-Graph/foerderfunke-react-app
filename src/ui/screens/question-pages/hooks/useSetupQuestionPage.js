import { useState, useEffect } from 'react';
import userManager from '@/core/managers/userManager';
import { useUserStore, useMetadataStore } from '@/ui/storage/zustand';
import buildCurrentQuestion from '@/core/utils/buildCurrentQuestion';

const useSetupQuestionPage = (
    quizReport,
    questionsStack,
    stackCounter,
    addQuestionToStack,
    profileFieldUpdateError,
    setProfileFieldUpdateError
) => {
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [value, setValue] = useState(null);
    const [profileFieldRetrievalError, setProfileFieldRetrievalError] = useState(null);
    const metadata = useMetadataStore((state) => state.metadata);

    useEffect(() => {
        const quizReportQuestionId = quizReport?.['ff:hasMostMissedDatafield']?.['rdf:predicate']?.['@id'];
        if (!quizReportQuestionId) return;
        if (!questionsStack?.length && stackCounter > 0) return;

        const setupCurrentQuestion = async () => {
            let nextQuestion = null;

            if (stackCounter > 0) {
                nextQuestion = questionsStack[questionsStack.length - 1 - stackCounter];
            } else {
                const isSame = currentQuestion?.['@id'] === quizReportQuestionId;
                const alreadyInStack = questionsStack.some(q => q?.id === quizReportQuestionId);

                if (!isSame) {
                    nextQuestion = buildCurrentQuestion(quizReportQuestionId, metadata);
                    if (!alreadyInStack) {
                        addQuestionToStack(nextQuestion);
                    }
                }
            }

            if (nextQuestion && currentQuestion?.['@id'] !== nextQuestion?.['@id']) {
                setCurrentQuestion(nextQuestion);
                setProfileFieldUpdateError(null);
            }

            const questionToFetch = nextQuestion || currentQuestion;
            if (questionToFetch) {
                let fieldData = null;
                try {
                    const activeUserId = useUserStore.getState().activeUserId;
                    fieldData = userManager.retrieveUserField(activeUserId, questionToFetch?.['@id']);
                } catch (err) {
                    console.error('Error fetching profile field', err);
                    setProfileFieldRetrievalError(err);
                } finally {
                    setValue(fieldData);
                }
            }
        };

        setupCurrentQuestion();
    }, [
        quizReport,
        questionsStack,
        stackCounter,
        currentQuestion,
        addQuestionToStack,
        profileFieldUpdateError,
        setProfileFieldUpdateError,
        metadata
    ]);

    return {
        currentQuestion,
        value,
        setValue,
        profileFieldRetrievalError
    };
};

export default useSetupQuestionPage;