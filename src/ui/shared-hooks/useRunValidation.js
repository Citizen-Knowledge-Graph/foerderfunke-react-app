import {useContext, useEffect} from "react";
import {useMetadataStore, useUserStore, useValidationReportStore} from "../storage/zustand";
import validationManager from "../../core/managers/validationManager";
import {useValidationUpdate} from "../storage/updates";
import {LanguageContext} from "../language/LanguageContext";

const useRunValidation = () => {
    const userId = useUserStore((state) => state.activeUserId);
    const updateCounter = useValidationUpdate.getState().updateCounter;
    const setValidationIsLoading = useValidationUpdate.getState().setValidationIsLoading;
    const {language} = useContext(LanguageContext);

    useEffect(() => {
        if (!userId) return;
        const runAsyncValidation = async () => {
            setValidationIsLoading(true);
            const validationReports = await validationManager.runValidation(userId, language);
            if (validationReports) {
                useValidationReportStore.getState().updateValidationReport(validationReports[0]);
                useMetadataStore.getState().updateMetadata(validationReports[1]);
            }
            setValidationIsLoading(false);
        }

        runAsyncValidation()
    }, [userId, updateCounter, language, setValidationIsLoading]);
};

export default useRunValidation;
