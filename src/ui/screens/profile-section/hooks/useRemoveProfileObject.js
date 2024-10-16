import {useCallback} from 'react';
import {UserModel} from '../../../../core/models/UserModel';
import {useUserStore} from '../../../../core/storage/zustand';

function useRemoveProfileObject(currentField, entityData) {
    return useCallback((id) => {
        const activeUserId = useUserStore.getState().activeUserId;
        return new Promise((resolve, reject) => {
            if (currentField.datatype === 'class') {
                try {
                    UserModel.removeObjectFromField(activeUserId, id, currentField.datafield, entityData);
                    resolve();
                } catch (error) {
                    console.log('Error removing profile field')
                    reject(error);
                }
            } else {
                resolve();
            }
        });
    }, [currentField, entityData]);
}

export default useRemoveProfileObject;
