import { MatchingEngine } from "@foerderfunke/matching-engine/src/new/MatchingEngine";
import { FORMAT, MATCHING_MODE } from "@foerderfunke/matching-engine/src/new/queries.js";
import resourceService from "@/core/services/resourceService";
import userManager from "@/core/managers/userManager";
import { convertUserProfileToTurtle } from "@foerderfunke/matching-engine/src/profile-conversion";

const matchingEngineManager = {
    matchingEngineInstance: null,
    initialisationPromise: null,

    async initialiseMatchingEngine() {
        if (this.matchingEngineInstance) {
            console.log("Matching Engine already initialized.");
            return this.matchingEngineInstance;
        }
        if (this.initialisationPromise) return this.initialisationPromise;

        console.log("Initializing Matching Engine...");
        this.initialisationPromise = (async () => {
            const validationConfig = await resourceService.fetchResourceWithCache(
                "assets/data/requirement-profiles/requirement-profiles.json"
            );

            const dataFieldsString = await resourceService.fetchResourceWithCache(
                validationConfig["datafields"]
            );
            const materializationString = await resourceService.fetchResourceWithCache(
                validationConfig["materialization"]
            );
            const consistencyString = await resourceService.fetchResourceWithCache(
                validationConfig["consistency"]
            );

            const requirementProfiles = [];
            for (const { fileUrl } of validationConfig["queries"]) {
                requirementProfiles.push(await resourceService.fetchResourceWithCache(fileUrl));
            }

            const matchingEngine = new MatchingEngine(
                dataFieldsString,
                materializationString,
                consistencyString,
                requirementProfiles
            );

            // Initialize the matching engine
            await matchingEngine.init();

            this.matchingEngineInstance = matchingEngine;
            console.log("Matching Engine initialized successfully.");
            return matchingEngine;
        })();

        return this.initialisationPromise;
    },

    async fetchMetadata(language = "en") {
        const matchingEngine = await this.initialiseMatchingEngine();

        // Fetch metadata from the matching engine
        const metadata = matchingEngine.metadata || {};  
        return metadata;
    },

    async fetchValidationReport(userId, language = "en") {
        const matchingEngine = await this.initialiseMatchingEngine();

        const validationConfig = await resourceService.fetchResourceWithCache(
            "assets/data/requirement-profiles/requirement-profiles.json"
        );

        const userProfile = userManager.retrieveUserData(userId);
        const userProfileTurtle = await convertUserProfileToTurtle(userProfile);
        const requirementProfiles = validationConfig["queries"].map(({ rpUri }) => rpUri);

        const fullReportJsonLd = await matchingEngine.matching(
            userProfileTurtle,
            requirementProfiles,
            MATCHING_MODE.FULL,
            FORMAT.JSON_LD,
            true
        );
        return fullReportJsonLd;
    },

    async fetchQuizReport(userId, requirementProfiles) {
        const matchingEngine = await this.initialiseMatchingEngine();

        const userProfile = userManager.retrieveUserData(userId);
        const userProfileTurtle = await convertUserProfileToTurtle(userProfile);

        const quizReportJsonLd = await matchingEngine.matching(
            userProfileTurtle,
            requirementProfiles,
            MATCHING_MODE.QUIZ,
            FORMAT.JSON_LD,
            true
        );
        return quizReportJsonLd;
    }
};

export default matchingEngineManager;