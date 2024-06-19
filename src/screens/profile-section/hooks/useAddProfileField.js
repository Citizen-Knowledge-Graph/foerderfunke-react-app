import {useCallback} from 'react';
import {UserModel} from '../../../models/UserModel';
import {useUserStore} from '../../../storage/zustand';

function useAddProfileField(value, datafield, entityData) {
    return useCallback(() => {
        const activeUserId = useUserStore.getState().activeUserId;
        return new Promise((resolve, reject) => {
            try {
                UserModel.setField(activeUserId, value, datafield, entityData);
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    }, [value, datafield, entityData]);
}

export default useAddProfileField;
