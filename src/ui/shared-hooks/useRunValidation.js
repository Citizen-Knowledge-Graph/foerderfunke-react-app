import { useContext } from "react";
import {
    useMetadataStore,
    useUserStore,
    useValidationReportStore,
} from "@/ui/storage/zustand";
import validationManager from "@/core/managers/validationManager";
import { useValidationUpdate } from "@/ui/storage/updates";
import { LanguageContext } from "@/ui/language/LanguageContext";

const useRunValidation = () => {
    const userId = useUserStore((state) => state.activeUserId);
    const setValidationIsLoading = useValidationUpdate.getState().setValidationIsLoading;
    const { language } = useContext(LanguageContext);

    const runValidation = async () => {
        if (!userId) return;
        setValidationIsLoading(true);
        const validationReports = await validationManager.runValidation(userId, language);
        if (validationReports) {
            useValidationReportStore.getState().updateValidationReport(validationReports[0]);
            useMetadataStore.getState().updateMetadata(validationReports[1]);
        }
        setValidationIsLoading(false);
    };

    return runValidation;
};

export default useRunValidation;
