import { useEffect, useState, useRef } from 'react';
import { useMetadataStore, useUserStore, useValidationReportStore } from "@/ui/storage/zustand";
import { useLanguageStore } from "@/ui/storage/useLanguageStore";
import { useInitialisationState } from '@/ui/storage/updates';
import validationManager from "@/core/managers/validationManager";
import matchingEngineManager from "@/core/managers/matchingEngineManagar";
import userManager from "@/core/managers/userManager";

export const useInitialiseApplication = () => {
    const [isLoading, setIsLoading] = useState(true);
    const setInitialisationState = useInitialisationState((state) => state.setInitialisationState);
    const initialisationState = useInitialisationState((state) => state.initialisationState);
    const updateUserId = useUserStore((state) => state.updateUserId);

    // 🔐 **Initialization Mutex and Status Tracking**
    const initializedRef = useRef(false); // Tracks if initialized has been triggered
    const isInitializingRef = useRef(false); // Tracks if the process is still running

    // Zustand Store States
    const metadataStore = useMetadataStore();
    const validationReportStore = useValidationReportStore();
    const language = useLanguageStore((state) => state.language);

    const fixedUserId = "ff:quick-check-user";

    useEffect(() => {
        const initializeAppState = async () => {

            // 🔄 **Check Initialization State*
            if (initialisationState) {
                setIsLoading(false);
                return;
            }

            // 🔄 **Avoid Re-initialization:**
            if (initializedRef.current || isInitializingRef.current) {
                return;
            }

            // 🔐 **Lock the process**
            initializedRef.current = true;
            isInitializingRef.current = true;

            console.log("🟢 Application Initialization started.");

            try {
                // 🔹 **Initialize User Profile**
                const userProfile = userManager.retrieveUserData(fixedUserId);
                if (!userProfile) {
                    userManager.initialiseNewUser(fixedUserId);
                }
                updateUserId(fixedUserId);
            } catch (error) {
                console.error(`Failed to initialize User Profile: ${error.message}`);
            }

            try {
                // 🔹 **Initialize Matching Engine**
                await matchingEngineManager.initialiseMatchingEngine();
            } catch (err) {
                console.error("Error initializing Matching Engine:", err);
            }


            let metadata = "empty";
            try {
                const newMetadata = await matchingEngineManager.fetchMetadata(language);
                if (newMetadata) {
                    metadata = newMetadata;
                }
            } catch (error) {
                console.error(`Failed to fetch Metadata: ${error.message}`);
            } finally {
                metadataStore.updateMetadata(metadata);
            }

            let validationReport = "empty";
            try {
                const newValidationReport = await matchingEngineManager.fetchValidationReport(fixedUserId, language);
                if (newValidationReport) {
                    validationReport = newValidationReport;
                }
            } catch (error) {
                console.error(`Failed to fetch validation report: ${error.message}`);
            } finally {
                validationReportStore.updateValidationReport(validationReport);
            }

            console.log("✅ Application Initialization complete.");

            // 🔓 **Unlock and Mark as Loaded**
            isInitializingRef.current = false;
            setInitialisationState(true);
            setIsLoading(false);
        };

        initializeAppState();
    }, [metadataStore, validationReportStore, language, setInitialisationState, initialisationState, updateUserId]);

    return isLoading;
};