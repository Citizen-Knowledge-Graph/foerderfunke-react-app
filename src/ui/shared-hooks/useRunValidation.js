import {useContext, useEffect} from "react";
import {useMetadataStore, useUserStore, useValidationReportStore} from "../storage/zustand";
import validationManager from "../../core/managers/validationManager";
import {useValidationUpdate} from "../storage/updates";
import {LanguageContext} from "../language/LanguageContext";

const useRunValidation = () => {
    const userId = useUserStore((state) => state.activeUserId);
    const updateCounter = useValidationUpdate.getState().updateCounter;
    const {language} = useContext(LanguageContext);

    useEffect(() => {
        if (!userId) return;
        const runAsyncValidation = async () => {
            const validationReports = await validationManager.runValidation(userId, language);
            if (validationReports) {
                useValidationReportStore.getState().updateValidationReport(validationReports[0]);
                useMetadataStore.getState().updateMetadata(validationReports[1]);
            }
        }

        runAsyncValidation()
    }, [userId, updateCounter, language]);
};

export default useRunValidation;
