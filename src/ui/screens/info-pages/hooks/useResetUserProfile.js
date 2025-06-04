// useResetUserProfile.tsx
import { useState, useRef, useCallback } from 'react';
import { useLanguageStore } from "@/ui/storage/useLanguageStore";
import matchingEngineManager from "@/core/managers/matchingEngineManager";
import userManager from "@/core/managers/userManager";
import { useInitialisationState } from '@/ui/storage/updates';
import {
    useUserStore,
    questionsStackStore,
    useSelectedBenefitStore,
    useSelectedTopicsStore,
    useValidationReportStore,
} from "@/ui/storage/zustand";

const useResetUserProfile = () => {
    const [isLoading, setIsLoading] = useState(false);
    const updateUserId = useUserStore((state) => state.updateUserId);

    const initialisationState = useInitialisationState((state) => state.initialisationState);
    const isResettingRef = useRef(false);
    const validationReportStore = useValidationReportStore();
    const language = useLanguageStore((state) => state.language);

    const fixedUserId = "ff:quick-check-user";

    const resetUserProfile = useCallback(async () => {
        if (!initialisationState) {
            console.warn("Application is not initialized. Cannot reset user profile.");
            return;
        }
        if (isResettingRef.current) return;

        isResettingRef.current = true;
        setIsLoading(true);

        try {
            // 1) Reset user profile
            userManager.initialiseNewUser(fixedUserId);
            updateUserId(fixedUserId);

            // 2) Clear selected topics/benefits
            useSelectedTopicsStore.getState().clear();
            useSelectedBenefitStore.getState().clear();
            questionsStackStore.getState().resetQuestionsStack();

            // 3) Fetch & update validation report
            const report = await matchingEngineManager.fetchValidationReport(fixedUserId, language);
            validationReportStore.updateValidationReport(report || "empty");
        } catch (error) {
            console.error("User reset error:", error);
        } finally {
            isResettingRef.current = false;
            setIsLoading(false);
        }
    }, [
        initialisationState,
        updateUserId,
        validationReportStore,
        language
    ]);

    return { isLoading, resetUserProfile };
};

export default useResetUserProfile;