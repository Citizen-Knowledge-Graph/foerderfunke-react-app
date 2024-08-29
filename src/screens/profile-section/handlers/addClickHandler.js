import { useState } from 'react';
import useAddProfileField from '../hooks/useAddProfileField';
import useInputValidation from "../hooks/useInputValidation";

export const useHandleAddClick = (currentField, entityData, handleConfirm, setValue) => {
    const [localError, setLocalError] = useState('');
    const validateValue = useInputValidation(currentField.datatype);
    const addProfileData = useAddProfileField(currentField, entityData);

    const handleAddClick = async (value, currentIndex) => {
        try {
            await validateValue(value);
            await addProfileData(value);
            setValue('')
            handleConfirm(currentIndex);
        } catch (err) {
            console.error('Error handling add click:', err);
            setLocalError(err);
        }
    };

    return { handleAddClick, localError, setLocalError };
};
