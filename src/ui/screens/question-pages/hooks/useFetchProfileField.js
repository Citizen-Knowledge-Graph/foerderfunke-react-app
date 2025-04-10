import { useMemo } from 'react';
import userManager from '@/core/managers/userManager';
import { useUserStore } from '@/ui/storage/zustand';

function useFetchProfileField(dataField) {
    console.log('useFetchProfileField', dataField);

    const fieldData = useMemo(() => {
        const activeUserId = useUserStore.getState().activeUserId;
        try {
            return userManager.retrieveUserField(activeUserId, dataField);
        } catch (error) {
            console.error('Error fetching profile field', error);
            return null;
        }
    }, [dataField]);

    return fieldData;
}

export default useFetchProfileField;