import {UserModel} from "../models/UserModel";
import {convertUserProfileToTurtle} from "@foerderfunke/matching-engine/src/utils";
import readJson from "../utilities/readJson";
import {fetchTurtleResource} from "./githubService";
import {getPrioritizedMissingDataFieldsJson} from "@foerderfunke/matching-engine/src/prematch";
import {useQuestionsStore} from "../storage/zustand";

const questionsService = async (activeUser, activeTopics) => {

    // Get the active user profile
    const userProfile = UserModel.retrieveUserData(activeUser);
    console.log('User profile:', userProfile)

    const userProfileString = await convertUserProfileToTurtle(userProfile);

    console.log('User profile:', userProfileString)

    // load validation config
    const validationConfig = await readJson('assets/data/requirement-profiles/requirement-profiles.json');

    // validate user profile against data fields
    const dataFieldsString = await fetchTurtleResource(validationConfig['datafields']);
    const materializationString = await fetchTurtleResource(validationConfig['materialization']);

    // collect requirement profiles
    let requirementProfiles = {};
    for (const requirementProfile of validationConfig['queries']) {
        const {fileUrl, rpUri} = requirementProfile;
        requirementProfiles[rpUri] = await fetchTurtleResource(fileUrl);
    }
    console.log('Fetching questions array for:', activeTopics);

    let questionsResponse = await getPrioritizedMissingDataFieldsJson(
        activeTopics,
        [],
        userProfileString,
        requirementProfiles,
        dataFieldsString,
        materializationString,
        "en"
    );

    useQuestionsStore.getState().updateQuestions(questionsResponse);

    return null;
}

export default questionsService;
