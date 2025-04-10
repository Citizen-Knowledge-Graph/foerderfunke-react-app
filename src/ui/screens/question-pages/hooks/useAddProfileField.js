import {useCallback} from 'react';
import userManager from '../../../../core/managers/userManager';
import {useUserStore} from '../../../storage/zustand';

function useAddProfileField(currentField) {
    return useCallback((value) => {
        const activeUserId = useUserStore.getState().activeUserId;
        return new Promise((resolve, reject) => {
            if (currentField.datatype !== 'class') {
                try {
                    userManager.setField(activeUserId, value, currentField.datafield);
                    resolve();
                } catch (error) {
                    console.log('Error adding profile field')
                    reject(error);
                }
            } else {
                resolve();
            }
        });
    }, [currentField]);
}

export default useAddProfileField;
