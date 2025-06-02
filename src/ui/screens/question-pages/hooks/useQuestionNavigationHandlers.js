import { useCallback } from 'react';
import useAddProfileField from './useAddProfileField';
import useInputValidation from './useInputValidation';
import { useQuestionsUpdate } from '@/ui/storage/updates';

const useQuestionNavigationHandlers = ({
    setProfileFieldUpdateError,
    currentQuestion,
    setStackCounter,
    stackCounter,
    questionsStack,
    navigate
}) => {
    const triggerQuestionsUpdate = useQuestionsUpdate((s) => s.triggerQuestionsUpdate);
    const validateValue = useInputValidation(currentQuestion?.['ff:datatype']?.['@id']);
    const addProfileData = useAddProfileField(currentQuestion?.['@id']);

    const handleAddClick = useCallback(async (value) => {
        try {
            await validateValue(value);
            await addProfileData(value);        
            if (stackCounter > 0) {
                setStackCounter(stackCounter - 1);
            }
            triggerQuestionsUpdate()
        } catch (err) {
            console.error('Error handling add click:', err);
            setProfileFieldUpdateError(err);
        }
    }, [validateValue, addProfileData, stackCounter, setStackCounter, setProfileFieldUpdateError, triggerQuestionsUpdate]);

    const handleBackClick = useCallback(() => {
        if (stackCounter === questionsStack.length - 1) {
            navigate(-1);
        } else {
            setStackCounter(stackCounter + 1);
        }
    }, [stackCounter, questionsStack, navigate, setStackCounter]);

    return {
        handleAddClick,
        handleBackClick,
    };
};

export default useQuestionNavigationHandlers;