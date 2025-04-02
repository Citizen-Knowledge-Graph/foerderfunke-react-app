import { useState, useEffect } from 'react';
import useFetchProfileField from './useFetchProfileField';

const useSetupQuestionPage = (
    entityData,
    profileQuestions,
    questionsStack,
    stackCounter,
    addQuestionToStack,
    profileFieldUpdateError,
    setProfileFieldUpdateError
) => {
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [value, setValue] = useState(null);
    const [profileFieldRetrievalError, setProfileFieldRetrievalError] = useState(null);
    const fetchProfileField = useFetchProfileField(currentQuestion?.datafield, entityData);

    useEffect(() => {
            if (!profileQuestions?.fields?.length) return;
            if (!questionsStack?.length && stackCounter > 0) return;
    
            const setupCurrentQuestion = async () => {
                let nextQuestion = null;
    
                if (stackCounter > 0) {
                    nextQuestion = questionsStack[questionsStack.length - 1 - stackCounter];
                } else {
                    const firstQuestion = profileQuestions.fields[0];
                    const isSame = currentQuestion?.datafield === firstQuestion?.datafield;
                    const alreadyInStack = questionsStack.some(q => q.datafield === firstQuestion?.datafield);
    
                    if (!isSame) {
                        nextQuestion = firstQuestion;
                        if (!alreadyInStack) {
                            addQuestionToStack(firstQuestion);
                        }
                    }
                }
    
                if (nextQuestion && currentQuestion?.datafield !== nextQuestion?.datafield) {
                    setCurrentQuestion(nextQuestion);
                    if (!profileFieldUpdateError) {
                        setProfileFieldUpdateError(null);
                    }
                }
    
                const questionToFetch = nextQuestion || currentQuestion;
                if (questionToFetch) {
                    let fieldData = null;
                    try {
                        fieldData = await fetchProfileField();
                    } catch (err) {
                        console.error('Error fetching profile field', err);
                        setProfileFieldRetrievalError(err);
                    } finally {
                        setValue(fieldData);
                    }
                }
            };
    
            setupCurrentQuestion();
        }, [stackCounter, questionsStack, profileQuestions, currentQuestion, addQuestionToStack, fetchProfileField, profileFieldUpdateError, setProfileFieldUpdateError]);

    return {
        currentQuestion,
        value,
        setValue,
        profileFieldRetrievalError
    };
};

export default useSetupQuestionPage;