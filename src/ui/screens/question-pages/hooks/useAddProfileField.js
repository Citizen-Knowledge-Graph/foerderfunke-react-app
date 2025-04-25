import { useCallback } from 'react';
import userManager from '@/core/managers/userManager';
import { useUserStore } from '@/ui/storage/zustand';

function useAddProfileField(currentField) {
  const activeUserId = useUserStore((s) => s.activeUserId);

  return useCallback((value) => {
    return new Promise((resolve, reject) => {
      if (currentField?.datatype !== 'class') {
        try {
          userManager.setField(activeUserId, value, currentField.datafield);
          resolve();
        } catch (error) {
          console.error('Error adding profile field:', error);
          reject(error);
        }
      } else {
        resolve();
      }
    });
  }, [activeUserId, currentField?.datafield, currentField?.datatype]);
}

export default useAddProfileField;