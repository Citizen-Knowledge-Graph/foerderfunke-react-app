import {useCallback} from 'react';
import {UserModel} from '../../../models/UserModel';
import {useUserStore} from '../../../storage/zustand';

function useAddProfileField(value, datafield, entityData) {
    return useCallback(() => {
        const userId = useUserStore.getState().userId;
        return new Promise((resolve, reject) => {
            try {
                const _entityData = {
                    id: entityData.entityData.id,
                    type: entityData.entityData.type,
                    datafield: datafield,
                };
                const _parentData = {
                    id: entityData.parentData.id,
                    type: entityData.parentData.type,
                    datafield: entityData.parentData.datafield,
                };
                UserModel.setField(userId, value, _entityData, _parentData);
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    }, [value, datafield, entityData]);
}

export default useAddProfileField;
