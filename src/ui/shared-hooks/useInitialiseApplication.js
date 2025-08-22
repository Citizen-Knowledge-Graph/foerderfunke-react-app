import { useEffect, useRef } from 'react';
import { useMetadataStore, useUserStore, useValidationReportStore } from "@/ui/storage/zustand";
import { useLanguageStore } from "@/ui/storage/useLanguageStore";
import { useApplicationLoadingState, useInitialisationState } from '@/ui/storage/updates';
import matchingEngineManager from "@/core/managers/matchingEngineManager";
import userManager from "@/core/managers/userManager";

export const useInitialiseApplication = () => {
    const setInitialisationState = useInitialisationState((state) => state.setInitialisationState);
    const initialisationState = useInitialisationState((state) => state.initialisationState);
    const setApplicationIsLoading = useApplicationLoadingState((state) => state.setApplicationIsLoading);
    const applicationIsLoading = useApplicationLoadingState((state) => state.applicationIsLoading);
    const updateUserId = useUserStore((state) => state.updateUserId);

    const initializedRef = useRef(false);
    const isInitializingRef = useRef(false);
    const lastInitializedLang = useRef(null);

    const metadataStore = useMetadataStore();
    const validationReportStore = useValidationReportStore();
    const language = useLanguageStore((state) => state.language);

    const fixedUserId = "ff:quick-check-user"; // change to ff:citizen1 when switching to ProfileManager TODO

    useEffect(() => {
        const initializeAppState = async () => {
            if (initialisationState || initializedRef.current || isInitializingRef.current) return;

            initializedRef.current = true;
            isInitializingRef.current = true;
            setApplicationIsLoading({
                applicationIsLoading: true,
                loadingMessage: "app.loading.initialising"
            });

            try {
                // Initialize user
                const userProfile = userManager.retrieveUserData(fixedUserId);
                if (!userProfile) userManager.initialiseNewUser(fixedUserId);
                updateUserId(fixedUserId);

                // Construct and init profile manager
                // await profileManager.constructProfileManagerOnce()
                // await profileManager.initProfileManager(fixedUserId)
                // updateUserId(fixedUserId);

                // Construct engine once (does not call .init)
                await matchingEngineManager.constructMatchingEngineOnce();

                // Call init(language) once after construction
                lastInitializedLang.current = language; // prevent duplicate init
                await matchingEngineManager.initMatchingEngine(language);

                // Fetch metadata and report
                const metadata = await matchingEngineManager.fetchMetadata(language);
                metadataStore.updateMetadata(metadata || "empty");

                // It this necessary initially or only later? TODO
                const report = await matchingEngineManager.fetchValidationReport(fixedUserId, language);
                validationReportStore.updateValidationReport(report || "empty");

                setInitialisationState(true);
            } catch (error) {
                console.error("App init error:", error);
            } finally {
                isInitializingRef.current = false;
                setApplicationIsLoading({
                    applicationIsLoading: false,
                    loadingMessage: ""
                });
            }
        };

        initializeAppState();
    }, [
        initialisationState,
        setInitialisationState,
        setApplicationIsLoading,
        updateUserId,
        metadataStore,
        validationReportStore,
        language
    ]);

    useEffect(() => {
        const reinitLanguage = async () => {
            if (!matchingEngineManager.matchingEngineInstance) return;
            if (lastInitializedLang.current === language) return;

            try {
                console.log(`🔁 Setting Matching Engine for language: ${language}`);
                await matchingEngineManager.matchingEngineInstance.init(language);

                const metadata = await matchingEngineManager.fetchMetadata(language);
                metadataStore.updateMetadata(metadata || "empty");

                const report = await matchingEngineManager.fetchValidationReport(fixedUserId, language);
                validationReportStore.updateValidationReport(report || "empty");

                lastInitializedLang.current = language;
            } catch (error) {
                console.error("Language re-init failed:", error);
            }
        };

        if (initialisationState) {
            reinitLanguage();
        }
    }, [language, initialisationState, metadataStore, validationReportStore]);

    return applicationIsLoading;
};