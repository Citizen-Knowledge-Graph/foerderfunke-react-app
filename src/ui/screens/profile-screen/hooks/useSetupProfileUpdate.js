import { useState, useEffect } from 'react';
import matchingEngineManager from "@/core/managers/matchingEngineManager";
import { expand } from "@foerderfunke/sem-ops-utils";
import userManager from '@/core/managers/userManager';
import { useUserStore } from '@/ui/storage/zustand';

export default function useSetupProfileUpdate(datafield) {
  const [datafieldDetails, setDatafieldDetails] = useState(null);
  const [currentValue, setCurrentValue] = useState(null);

  useEffect(() => {
    if (!datafield) return;

    const expanded = expand(datafield);
    let active = true;

    (async () => {
      try {
        // 1) fetch details
        const details = await matchingEngineManager.fetchDetailsForDatafield(expanded);
        if (!active) return;
        setDatafieldDetails(details);

        // 2) fetch user-specific value (only after details succeeded)
        const activeUserId = useUserStore.getState().activeUserId;
        const fieldData = userManager.retrieveUserField(activeUserId, datafield);
        if (active) setCurrentValue(fieldData ?? null);
      } catch (error) {
        console.error("Failed to fetch datafield or user field:", error);
      }
    })();

    return () => {
      active = false;
    };
  }, [datafield]);

  return { datafieldDetails, currentValue, setCurrentValue };
}