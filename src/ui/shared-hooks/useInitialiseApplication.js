// hooks/useInitialiseApplication.ts
import { useEffect, useState, useRef } from 'react';
import { useMetadataStore, useUserStore, useValidationReportStore } from "@/ui/storage/zustand";
import { useLanguageStore } from "@/ui/storage/useLanguageStore";
import { useInitialisationState } from '@/ui/storage/updates';
import validationManager from "@/core/managers/validationManager";
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
                console.log("⚠️ Application already initialized. Skipping.");
                setIsLoading(false);
                return;
            }

            // 🔄 **Avoid Re-initialization:**
            if (initializedRef.current || isInitializingRef.current) {
                console.log("⚠️ Initialization already running. Skipping.");
                return;
            }

            // 🔐 **Lock the process**
            initializedRef.current = true;
            isInitializingRef.current = true;

            console.log("🟢 Application Initialization started.");

            try {
                // 🔹 **Initialize Metadata**
                if (Object.keys(metadataStore.metadata).length === 0) {
                    const fetchedMetadata = await validationManager.fetchMetadata();
                    if (fetchedMetadata) {
                        metadataStore.updateMetadata(fetchedMetadata);
                    } else {
                        metadataStore.updateMetadata({});
                    }
                } else {
                    console.log(`Metadata already initialised.`);
                }
            } catch (error) {
                console.error(`Failed to initialize Metadata: ${error.message}`);
            }

            try {
                // 🔹 **Initialize User Profile**
                const userProfile = userManager.retrieveUserData(fixedUserId);
                if (userProfile) {
                    console.log(`User profile found.`);
                } else {
                    userManager.initialiseNewUser(fixedUserId);
                }
                updateUserId(fixedUserId);
            } catch (error) {
                console.error(`Failed to initialize User Profile: ${error.message}`);
            }

            try {
                // 🔹 **Initialize Validation Report**
                if (Object.keys(validationReportStore.validationReport).length === 0) {
                    const report = await validationManager.runValidation(fixedUserId, language);
                    if (report) {
                        validationReportStore.updateValidationReport(report);
                    } else {
                        console.warn("Validation Report could not be created. Fallback applied.");
                        validationReportStore.updateValidationReport({ report: "empty" });
                    }
                }
            } catch (error) {
                console.error(`Failed to initialize Validation Report: ${error.message}`);
                validationReportStore.updateValidationReport({ report: "empty" }); // fallback
            }

            console.log("✅ Application Initialization complete.");

            // 🔓 **Unlock and Mark as Loaded**
            isInitializingRef.current = false;
            setInitialisationState(true);
            setIsLoading(false);
        };

        initializeAppState();
    }, [metadataStore, validationReportStore, language, setInitialisationState, initialisationState]);

    return isLoading;
};