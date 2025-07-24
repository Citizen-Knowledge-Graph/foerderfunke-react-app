import { MatchingEngine } from "@foerderfunke/matching-engine/src/MatchingEngine";
import { FORMAT, MATCHING_MODE } from "@foerderfunke/matching-engine/src/queries.js";
import resourceService from "@/core/services/resourceService";
import userManager from "@/core/managers/userManager";
import { convertUserProfileToTurtle } from "@foerderfunke/matching-engine/src/profile-conversion";
import { expand } from "@foerderfunke/sem-ops-utils";
import featureFlags from "@/featureFlags";
import jsonLdToTurtle from "@/core/utils/jsonLdToTurtle";

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

            const datafieldsString = await resourceService.fetchResourceWithCache(validationConfig["datafields"]);
            const datafieldsBielefeldString = await resourceService.fetchResourceWithCache(validationConfig["datafields-bielefeld"]);
            const definitionsString = await resourceService.fetchResourceWithCache(validationConfig["definitions"]);
            const materializationString = await resourceService.fetchResourceWithCache(validationConfig["materialization"]);
            const consistencyString = await resourceService.fetchResourceWithCache(validationConfig["consistency"]);

            const engine = new MatchingEngine();
            engine.addDatafieldsTurtle(datafieldsString)
            engine.addDatafieldsTurtle(datafieldsBielefeldString)
            engine.addDefinitionsTurtle(definitionsString);
            engine.addMaterializationTurtle(materializationString);
            engine.addConsistencyTurtle(consistencyString);

            for (const { fileUrl, behindFeatureFlag } of validationConfig["queries"]) {
                if (behindFeatureFlag && !featureFlags[behindFeatureFlag]) continue;
                engine.addRequirementProfileTurtle(await resourceService.fetchResourceWithCache(fileUrl));
            }

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
        const userProfileTurtle = await jsonLdToTurtle(userProfile);
        const requirementProfiles = [];
        for (const { rpUri, behindFeatureFlag } of validationConfig["queries"]) {
            if (behindFeatureFlag && !featureFlags[behindFeatureFlag]) continue;
            requirementProfiles.push(rpUri);
        }

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
        const userProfileTurtle = await jsonLdToTurtle(userProfile);
        console.log("User Profile Turtle:", userProfileTurtle);
        //const userProfileTurtle = await convertUserProfileToTurtle(userProfile);
        return this.matchingEngineInstance.matching(
            userProfileTurtle,
            requirementProfiles.map(rp => expand(rp)),
            MATCHING_MODE.QUIZ,
            FORMAT.JSON_LD,
            true
        );
    },

    async fetchEvaluationGraph(userId, requirementProfile, language = "en") {
        if (!this.matchingEngineInstance) {
            await this.initMatchingEngine(language);
        }
        
        const userProfile = userManager.retrieveUserData(userId);
        const userProfileTurtle = await convertUserProfileToTurtle(userProfile);
        const expandedRp = expand(requirementProfile);

        return this.matchingEngineInstance.buildEvaluationGraph(
            userProfileTurtle,
            expandedRp
        );
    }
};

export default matchingEngineManager;