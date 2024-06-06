import {useMemo} from 'react';

const useInitializeEntityData = (userId) => {
    return useMemo(() => {
        if (!userId) return null;

        return {
            entityData: {
                id: userId,
                type: 'ff:Citizen',
            },
            parentData: {
                id: null,
                type: null,
                datafield: null,
            }
        };
    }, [userId]);
};

export default useInitializeEntityData;
