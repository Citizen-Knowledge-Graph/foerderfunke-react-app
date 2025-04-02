import { useCallback } from 'react';
import useAddProfileField from './useAddProfileField';
import useInputValidation from './useInputValidation';
import { useQuestionsUpdate, useValidationUpdate } from "@/ui/storage/updates";

const useQuestionNavigationHandlers = ({
    setProfileFieldUpdateError,
    currentQuestion,
    entityData,
    setStackCounter,
    stackCounter,
    questionsStack,
    navigate
}) => {
    const triggerQuestionsUpdate = useQuestionsUpdate((s) => s.triggerQuestionsUpdate);
    const triggerValidationUpdate = useValidationUpdate((s) => s.triggerValidationUpdate);
    const validateValue = useInputValidation(currentQuestion?.datatype);
    const addProfileData = useAddProfileField(currentQuestion, entityData);

    const handleAddClick = useCallback(async (value) => {
        try {
            await validateValue(value);
            await addProfileData(value);
            triggerQuestionsUpdate();
            triggerValidationUpdate();
            if (stackCounter > 0) {
                setStackCounter(stackCounter - 1);
                return;
            }
        } catch (err) {
            console.error('Error handling add click:', err);
            setProfileFieldUpdateError(err);
        }
    }, [validateValue, addProfileData, triggerQuestionsUpdate, triggerValidationUpdate, stackCounter, setStackCounter, setProfileFieldUpdateError]);

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
