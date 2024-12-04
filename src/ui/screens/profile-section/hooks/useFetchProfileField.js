import {useCallback} from 'react';
import userManager from '../../../../core/managers/userManager';
import {useUserStore} from '../../../storage/zustand';

function useFetchProfileField(dataField, entityData) {
    return useCallback(() => {
        const activeUserId = useUserStore.getState().activeUserId;
        return new Promise((resolve, reject) => {
            try {
                const fieldData = userManager.retrieveUserField(activeUserId, dataField, entityData);
                resolve(fieldData);
            } catch (error) {
                console.log('Error fetching profile field')
                reject(error);
            }
        });
    }, [dataField, entityData]);
}

export default useFetchProfileField;
