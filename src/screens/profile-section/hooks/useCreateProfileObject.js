import {useCallback} from 'react';

function useCreateProfileObject(id, profileField, entityData) {
    return useCallback(() => {
        const _entityData = {
            id: id,
            type: profileField.objectClass,
            parentId: entityData.id,
            parentType: entityData.type,
            parentDatafield: profileField.datafield,
        };

        return {id: profileField.objectClass, entityData: _entityData};
    }, [id, profileField, entityData]);
}

export default useCreateProfileObject;
