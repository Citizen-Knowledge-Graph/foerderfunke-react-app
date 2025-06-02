import { useCallback } from 'react';
import userManager from '@/core/managers/userManager';
import { useUserStore } from '@/ui/storage/zustand';

function useAddProfileField(datafield) {
  const activeUserId = useUserStore((s) => s.activeUserId);

  return useCallback((value) => {
    return new Promise((resolve, reject) => {
      try {
        userManager.setField(activeUserId, value, datafield);
        resolve();
      } catch (error) {
        console.error('Error adding profile field:', error);
        reject(error);
      }
    });
  }, [activeUserId, datafield]);
}

export default useAddProfileField;