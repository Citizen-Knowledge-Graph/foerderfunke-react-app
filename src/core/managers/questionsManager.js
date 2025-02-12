import userManager from "./userManager";
import {convertUserProfileToTurtle} from "@foerderfunke/matching-engine/src/utils";
import resourceService from "../services/resourceService";
import {getPrioritizedMissingDataFieldsJson} from "@foerderfunke/matching-engine/src/prematch";

const questionsManager = {
    async fetchPrioritizedQuestions(userId, topicIds, benefitId, language = "en") {

        let start = performance.now();

        // Get the active user profile
        const userProfile = userManager.retrieveUserData(userId);
        const userProfileString = await convertUserProfileToTurtle(userProfile);

        // load validation config
        const validationConfig = await resourceService.fetchResource('assets/data/requirement-profiles/requirement-profiles.json');

        // validate user profile against data fields
        const dataFieldsString = await resourceService.fetchResource(validationConfig['datafields']);
        const materializationString = await resourceService.fetchResource(validationConfig['materialization']);

        // collect requirement profiles
        let requirementProfiles = {};
        for (const requirementProfile of validationConfig['queries']) {
            const {fileUrl, rpUri} = requirementProfile;
            requirementProfiles[rpUri] = await resourceService.fetchResource(fileUrl);
        }

        const expand = (id) => {
            return id.startsWith("ff:") ? "https://foerderfunke.org/default#" + id.split(":")[1] : id;
        }

        let end = performance.now();
        console.log(`Time elapsed in questionsManager before getPrioritizedMissingDataFieldsJson(): ${end - start} ms`);

        start = performance.now();

        let result = await getPrioritizedMissingDataFieldsJson(
            topicIds,
            benefitId ? [expand(benefitId)] : [],
            userProfileString,
            dataFieldsString,
            Object.values(requirementProfiles),
            materializationString,
            language
        );

        end = performance.now();
        console.log(`Time elapsed in questionsManager for getPrioritizedMissingDataFieldsJson(): ${end - start} ms`);

        return result;
    }
}

export default questionsManager;
