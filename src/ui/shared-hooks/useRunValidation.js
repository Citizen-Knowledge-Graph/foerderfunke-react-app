import {
    useUserStore,
    useValidationReportStore,
} from "@/ui/storage/zustand";
import validationManager from "@/core/managers/validationManager";
import { useValidationUpdate } from "@/ui/storage/updates";
import { useLanguageStore } from "@/ui/storage/useLanguageStore";

const useRunValidation = () => {
    const userId = useUserStore((state) => state.activeUserId);
    const setValidationIsLoading = useValidationUpdate.getState().setValidationIsLoading;
    const language = useLanguageStore((state) => state.language);

    const runValidation = async () => {
        if (!userId) return;
        setValidationIsLoading(true);
        const validationReport = await validationManager.runValidation(userId, language);
        if (validationReport) {
            useValidationReportStore.getState().updateValidationReport(validationReport);
        }
        setValidationIsLoading(false);
    };

    return runValidation;
};

export default useRunValidation;
