import {useCallback} from 'react';
import {UserModel} from '../../../models/UserModel';
import {useUserStore} from '../../../storage/zustand';

function useFetchProfileField(datafield, entityData) {
    return useCallback(() => {
        const activeUserId = useUserStore.getState().activeUserId;
        return new Promise((resolve, reject) => {
            try {
                const fieldData = UserModel.retrieveUserField(activeUserId, datafield, entityData);
                resolve(fieldData);
            } catch (error) {
                console.log('Error adding profile field')
                reject(error);
            }
        });
    }, [datafield, entityData]);
}

export default useFetchProfileField;
