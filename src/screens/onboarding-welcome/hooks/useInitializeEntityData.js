import {useMemo} from 'react';

const useInitializeEntityData = (userId) => {
    return useMemo(() => {
        if (!userId) return null;

        return {
            id: userId,
            type: 'ff:Citizen'
        };
    }, [userId]);
};

export default useInitializeEntityData;
