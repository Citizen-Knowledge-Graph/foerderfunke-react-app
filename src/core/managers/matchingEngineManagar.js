import { MatchingEngine } from "@foerderfunke/matching-engine/src/new/MatchingEngine";
import { FORMAT, MATCHING_MODE } from "@foerderfunke/matching-engine/src/new/queries.js";
import resourceService from "@/core/services/resourceService";
import userManager from "@/core/managers/userManager";
import { convertUserProfileToTurtle } from "@foerderfunke/matching-engine/src/profile-conversion";

const matchingEngineManager = {
    matchingEngineInstance: null,
    constructionPromise: null,

    async constructMatchingEngineOnce() {
        if (this.matchingEngineInstance) return this.matchingEngineInstance;
        if (this.constructionPromise) return this.constructionPromise;

        console.log("Constructing Matching Engine...");
        this.constructionPromise = (async () => {
            const validationConfig = await resourceService.fetchResourceWithCache(
                "assets/data/requirement-profiles/requirement-profiles.json"
            );

            const dataFieldsString = await resourceService.fetchResourceWithCache(validationConfig["datafields"]);
            const materializationString = await resourceService.fetchResourceWithCache(validationConfig["materialization"]);
            const consistencyString = await resourceService.fetchResourceWithCache(validationConfig["consistency"]);

            const requirementProfiles = [];
            for (const { fileUrl } of validationConfig["queries"]) {
                requirementProfiles.push(await resourceService.fetchResourceWithCache(fileUrl));
            }

            const engine = new MatchingEngine(
                dataFieldsString,
                materializationString,
                consistencyString,
                requirementProfiles
            );

            this.matchingEngineInstance = engine;
            console.log("Matching Engine constructed.");
            return engine;
        })();

        return this.constructionPromise;
    },

    async initMatchingEngine(language = "en") {
        const engine = await this.constructMatchingEngineOnce();
        await engine.init(language);
        return engine;
    },

    async fetchMetadata(language = "en") {
        const engine = await this.initMatchingEngine(language);
        return engine.metadata || {};
    },

    async fetchValidationReport(userId, language = "en") {
        const engine = await this.initMatchingEngine(language);

        const validationConfig = await resourceService.fetchResourceWithCache(
            "assets/data/requirement-profiles/requirement-profiles.json"
        );

        const userProfile = userManager.retrieveUserData(userId);
        const userProfileTurtle = await convertUserProfileToTurtle(userProfile);
        const requirementProfiles = validationConfig["queries"].map(({ rpUri }) => rpUri);

        const report = await engine.matching(
            userProfileTurtle,
            requirementProfiles,
            MATCHING_MODE.FULL,
            FORMAT.JSON_LD,
            true
        );

        return report;
    },

    async fetchQuizReport(userId, requirementProfiles, language = "en") {
        const engine = await this.initMatchingEngine(language);

        const userProfile = userManager.retrieveUserData(userId);
        const userProfileTurtle = await convertUserProfileToTurtle(userProfile);

        return engine.matching(
            userProfileTurtle,
            requirementProfiles,
            MATCHING_MODE.QUIZ,
            FORMAT.JSON_LD,
            true
        );
    }
};

export default matchingEngineManager;