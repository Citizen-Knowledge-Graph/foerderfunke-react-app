import {UserModel} from "../models/UserModel";
import {
    validateAll,
    validateUserProfile,
} from '@foerderfunke/matching-engine';
import {
    convertUserProfileToTurtle, extractDatafieldsMetadata, extractRequirementProfilesMetadata,
} from '@foerderfunke/matching-engine/src/utils';
import readJson from "../utilities/readJson";
import {fetchTurtleResource} from "./githubService";
import { useMetadataStore, useValidationReportStore} from "../storage/zustand";

export const runValidation = async (activeUser) => {

    // Get the active user profile
    const userProfile = UserModel.retrieveUserData(activeUser);
    const userProfileString = await convertUserProfileToTurtle(userProfile);

    // load validation config
    const validationConfig = await readJson('assets/data/requirement-profiles.json');

    // validate user profile against datafields
    const datafieldsString = await fetchTurtleResource(validationConfig['datafields']);
    if (!(await validateUserProfile(userProfileString, datafieldsString))) {
        console.error('Invalid user profile');
    }

    // load materialization scripts
    const materializationString = await fetchTurtleResource(validationConfig['materialization']);


    // collect requirement profiles
    let requirementProfiles = {};
    for (const requirementProfile of validationConfig['queries']) {
        const {fileUrl, rpUri} = requirementProfile;
        requirementProfiles[rpUri] = await fetchTurtleResource(fileUrl);
    }
    console.log('Running validations for:', Object.keys(requirementProfiles));

    let validateAllReport = await validateAll(
        userProfileString,
        requirementProfiles,
        datafieldsString,
        materializationString,
        false
    );

    useValidationReportStore.getState().updateValidationReport(validateAllReport);

    // fetch metadata
    let metadata = {
        df: await extractDatafieldsMetadata(datafieldsString),
        rp: await extractRequirementProfilesMetadata(Object.values(requirementProfiles)),
    };

    useMetadataStore.getState().updateMetadata(metadata);
    
    return null;
}
