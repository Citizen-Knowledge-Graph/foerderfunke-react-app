import { MatchingEngine } from "@foerderfunke/matching-engine/src/new/MatchingEngine";
import { FORMAT, MATCHING_MODE } from "@foerderfunke/matching-engine/src/new/queries.js";
import resourceService from "@/core/services/resourceService";
import userManager from "@/core/managers/userManager";
import { convertUserProfileToTurtle } from "@foerderfunke/matching-engine/src/profile-conversion";
import { expand } from "@foerderfunke/sem-ops-utils";

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
        if (!this.matchingEngineInstance) {
            await this.initMatchingEngine(language);
        }

        const validationConfig = await resourceService.fetchResourceWithCache(
            "assets/data/requirement-profiles/requirement-profiles.json"
        );

        const userProfile = userManager.retrieveUserData(userId);
        const userProfileTurtle = await convertUserProfileToTurtle(userProfile);
        const requirementProfiles = validationConfig["queries"].map(({ rpUri }) => rpUri);

        const report = await this.matchingEngineInstance.matching(
            userProfileTurtle,
            requirementProfiles,
            MATCHING_MODE.FULL,
            FORMAT.JSON_LD,
            true
        );

        return report;
    },

    async fetchQuizReport(userId, requirementProfiles, language = "en") {
        if (!this.matchingEngineInstance) {
            await this.initMatchingEngine(language);
        }
        const userProfile = userManager.retrieveUserData(userId);
        const userProfileTurtle = await convertUserProfileToTurtle(userProfile);

        console.log("Fetching quiz report for user:", userProfile);
        console.log("Requirement profiles:", requirementProfiles.map(rp => expand(rp)));

        return this.matchingEngineInstance.matching(
            userProfileTurtle,
            requirementProfiles.map(rp => expand(rp)),
            MATCHING_MODE.QUIZ,
            FORMAT.JSON_LD,
            true
        );
    }
};

export default matchingEngineManager;