import {useCallback} from 'react';
import {UserManager} from '../../../../core/managers/userManager';
import {useUserStore} from '../../../storage/zustand';

function useAddProfileField(currentField, entityData) {
    return useCallback((value) => {
        const activeUserId = useUserStore.getState().activeUserId;
        return new Promise((resolve, reject) => {
            if (currentField.datatype !== 'class') {
                try {
                    UserModel.setField(activeUserId, value, currentField.datafield, entityData);
                    resolve();
                } catch (error) {
                    console.log('Error adding profile field')
                    reject(error);
                }
            } else {
                resolve();
            }
        });
    }, [currentField, entityData]);
}

export default useAddProfileField;
