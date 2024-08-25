import readJson from "../utilities/readJson";
import {fetchTurtleResource} from "./githubService";
import {getPrioritizedMissingDataFieldsJson} from "@foerderfunke/matching-engine/src/prematch";
import {useQuestionsStore, useValidationReportStore} from "../storage/zustand";

const questionsService = async (activeUser, activeTopics) => {

    // Get the active user profile
    let userProfileString = `
        @prefix ff: <https://foerderfunke.org/default#> .
        ff:mainPerson a ff:Citizen .
    `

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

    let questionsResponse = await getPrioritizedMissingDataFieldsJson(
        activeTopics,
        [],
        userProfileString,
        dataFieldsString,
        Object.values(requirementProfiles),
        materializationString,
        "en"
    );

    useValidationReportStore.getState().updateValidationReport(questionsResponse.validationReport);
    useQuestionsStore.getState().updateQuestions(questionsResponse.prioritizedMissingDataFields);

    return null;
}

export default questionsService;
