import userManager from "./userManager";
import { convertUserProfileToTurtle } from "@foerderfunke/matching-engine/src/profile-conversion";
import resourceService from "../services/resourceService";
import {getPrioritizedMissingDataFieldsJson} from "@foerderfunke/matching-engine/src/prematch";

const questionsManager = {
    async fetchPrioritizedQuestions(userId, topicIds, benefitId, language = "en") {

        // Get the active user profile
        const userProfile = userManager.retrieveUserData(userId);
        const userProfileString = await convertUserProfileToTurtle(userProfile);

        // load validation config
        const validationConfig = await resourceService.fetchResourceWithCache('assets/data/requirement-profiles/requirement-profiles.json');

        // validate user profile against data fields
        const dataFieldsString = await resourceService.fetchResourceWithCache(validationConfig['datafields']);
        const materializationString = await resourceService.fetchResourceWithCache(validationConfig['materialization']);

        console.time('Question Manager: Fetch requirement profiles');

        // collect requirement profiles
        let requirementProfiles = {};
        for (const requirementProfile of validationConfig['queries']) {
            const { fileUrl, rpUri } = requirementProfile;
            requirementProfiles[rpUri] = await resourceService.fetchResourceWithCache(fileUrl);
        }
        
        console.timeEnd('Question Manager: Fetch requirement profiles');

        const expand = (id) => {
            return id.startsWith("ff:") ? "https://foerderfunke.org/default#" + id.split(":")[1] : id;
        }

        return await getPrioritizedMissingDataFieldsJson(
            topicIds,
            benefitId ? [expand(benefitId)] : [],
            userProfileString,
            dataFieldsString,
            Object.values(requirementProfiles),
            materializationString,
            language
        );
    }
}

export default questionsManager;
