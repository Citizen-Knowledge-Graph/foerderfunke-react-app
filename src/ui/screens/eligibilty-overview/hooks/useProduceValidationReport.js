import { useEffect } from 'react';
import { useLanguageStore } from "@/ui/storage/useLanguageStore";
import matchingEngineManager from "@/core/managers/matchingEngineManager";
import { useInitialisationState } from '@/ui/storage/updates';
import { useValidationReportStore } from "@/ui/storage/zustand";
import { useApplicationLoadingState } from '@/ui/storage/updates';

const useProduceValidationReport = () => {
    const setApplicationIsLoading = useApplicationLoadingState((state) => state.setApplicationIsLoading);
    const applicationIsLoading = useApplicationLoadingState((state) => state.applicationIsLoading);

    const initialisationState = useInitialisationState(
        (state) => state.initialisationState
    );
    const language = useLanguageStore((state) => state.language);

    const updateValidationReport = useValidationReportStore(
        (state) => state.updateValidationReport
    );
    const validationReport = useValidationReportStore(
        (state) => state.validationReport
    );

    const fixedUserId = "ff:quick-check-user";

    useEffect(() => {
        if (!initialisationState) {
            console.warn(
                "Application is not initialized. Cannot fetch validation report."
            );
            return;
        }

        const fetchingValidationReport = async () => {
            setApplicationIsLoading(true);
            try {
                const report = await matchingEngineManager.fetchValidationReport(
                    fixedUserId,
                    language
                );
                updateValidationReport(report || "empty");
            } catch (error) {
                console.error("Fetching report failed:", error);
            } finally {
                setApplicationIsLoading(false);
            }
        };

        fetchingValidationReport();
    }, [initialisationState, language, updateValidationReport, setApplicationIsLoading]);

    return { applicationIsLoading, validationReport };
};

export default useProduceValidationReport;