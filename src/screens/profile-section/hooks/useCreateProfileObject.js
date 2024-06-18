import {useCallback} from 'react';

function useCreateProfileObject(id, profileField, parentData) {

    return useCallback(() => {
        const entityId = id;
        const entityType = profileField.objectClass;
        const parentId = parentData.id;
        const parentType = parentData.type;

        const entityData = {
            id: entityId,
            type: entityType,
            parentId: parentId,
            parentType: parentType,
            parentDatafield: profileField.datafield,
        };

        return {id: entityType, entityData};
    }, [id, parentData.id, parentData.type, profileField.datafield, profileField.objectClass]);
}

export default useCreateProfileObject;
