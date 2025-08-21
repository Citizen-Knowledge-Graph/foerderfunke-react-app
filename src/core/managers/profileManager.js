import { ProfileManager } from "@foerderfunke/matching-engine/src/ProfileManager";
import resourceService from "@/core/services/resourceService";

const profileManager = {
    profileManagerInstance: null,
    constructionPromise: null,

    async constructProfileManagerOnce() {
        if (this.profileManagerInstance) return this.profileManagerInstance;
        if (this.constructionPromise) return this.constructionPromise;

        console.log("Constructing Profile Manager...");
        this.constructionPromise = (async () => {
            const validationConfig = await resourceService.fetchResourceWithCache(
                "assets/data/requirement-profiles/requirement-profiles.json"
            );

            const datafieldsString = await resourceService.fetchResourceWithCache(validationConfig["datafields"]);
            const datafieldsBielefeldString = await resourceService.fetchResourceWithCache(validationConfig["datafields-bielefeld"]);
            const definitionsString = await resourceService.fetchResourceWithCache(validationConfig["definitions"]);
            const materializationString = await resourceService.fetchResourceWithCache(validationConfig["materialization"]);
            const consistencyString = await resourceService.fetchResourceWithCache(validationConfig["consistency"]);

            const profileManager = new ProfileManager();
            profileManager.addDatafieldsTurtle(datafieldsString)
            profileManager.addDatafieldsTurtle(datafieldsBielefeldString)
            profileManager.addDefinitionsTurtle(definitionsString);
            profileManager.addMaterializationTurtle(materializationString);
            profileManager.addConsistencyTurtle(consistencyString);

            this.profileManagerInstance = profileManager;
            console.log("Profile Manager constructed.");
            return profileManager;
        })();

        return this.constructionPromise;
    },

    async initProfileManager(defaultProfileId) {
        const profileManager = await this.constructProfileManagerOnce();
        await profileManager.init();
        // let profileIds = JSON.parse(localStorage.getItem('userIds')) || []
        let existingProfileTurtle = localStorage.getItem(defaultProfileId);
        if (existingProfileTurtle) {
            profileManager.importProfileTurtle(defaultProfileId, existingProfileTurtle);
        } else {
            let profile = profileManager.getProfile(profileManager.newProfile(defaultProfileId));
            localStorage.setItem(defaultProfileId, await profile.toTurtle());
        }
        return profileManager;
    },
};

export default profileManager;
