import { MatchingEngine } from "@foerderfunke/matching-engine/src/MatchingEngine";
import { FORMAT } from "@foerderfunke/matching-engine/src/queries.js";
import resourceService from "@/core/services/resourceService";
import userManager from "@/core/managers/userManager";
import { convertUserProfileToTurtle } from "@foerderfunke/matching-engine/src/profile-conversion";
import { violationsToText } from "@foerderfunke/matching-engine/src/rule-graph/GraphUtils.js"
import { expand } from "@foerderfunke/sem-ops-utils";
import featureFlags from "@/featureFlags";

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

            const engine = new MatchingEngine();
            if (featureFlags.matchingEnginePerformanceLogging) engine.turnOnPerformanceLogging()
            engine.addDef(await resourceService.fetchResourceWithCache(validationConfig["def"]))

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

    // fetchValidationReport and fetchQuizReport could probably be unified further to only expose fetchMatchingReport() TODO
    async fetchMatchingReport(userId, rps, lang = "en") {
        if (!this.matchingEngineInstance) {
            await this.initMatchingEngine(lang);
        }
        const userProfile = userManager.retrieveUserData(userId);
        const userProfileTurtle = await convertUserProfileToTurtle(userProfile);
        return this.matchingEngineInstance.matching(userProfileTurtle, rps, FORMAT.JSON_LD);
    },

    async fetchValidationReport(userId, language = "en") {
        const validationConfig = await resourceService.fetchResourceWithCache("assets/data/requirement-profiles/requirement-profiles.json");
        const requirementProfiles = [];
        for (const { rpUri, behindFeatureFlag } of validationConfig["queries"]) {
            if (behindFeatureFlag && !featureFlags[behindFeatureFlag]) continue;
            requirementProfiles.push(rpUri);
        }
        return await this.fetchMatchingReport(userId, requirementProfiles, language);
    },

    async fetchQuizReport(userId, requirementProfiles, language = "en") {
        return await this.fetchMatchingReport(userId, requirementProfiles.map(rp => expand(rp)), language);
    },

    async fetchDetailsForDatafield(datafield) {
        return await this.matchingEngineInstance.getDetailsForDatafield(datafield);
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
    },

    async fetchWrittenViolations(evalGraph) {
        if (!this.matchingEngineInstance) {
            throw new Error("Matching Engine not initialized.");
        }

        if (!evalGraph) {
            throw new Error("Evaluation graph is required to fetch written violations.");
        }
        
        return violationsToText(evalGraph, this.matchingEngineInstance);
    }
};

export default matchingEngineManager;