import { useEffect } from "react";
import { useMetadataStore, useValidationReportStore } from "../storage/zustand";
import validationManager from "../../core/managers/validationManager";
import {useValidationUpdate} from "../storage/updates";

const useRunValidation = (userId) => {
    const updateCounter = useValidationUpdate.getState().updateCounter;

    useEffect(() => {
        if (!userId) return;

        const runAsyncValidation = async () => {
            const validationReports = await validationManager.runValidation(userId);
            if (validationReports) {
                useValidationReportStore.getState().updateValidationReport(validationReports[0]);
                useMetadataStore.getState().updateMetadata(validationReports[1]);
            }
        }

        runAsyncValidation()
    }, [userId, updateCounter]);
};

export default useRunValidation;
