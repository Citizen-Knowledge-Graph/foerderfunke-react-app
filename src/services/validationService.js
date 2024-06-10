import {UserModel} from "../models/UserModel";
import {
    //validateAll,
    validateUserProfile,
} from '@foerderfunke/matching-engine';
import {
    convertUserProfileToTurtle,
} from '@foerderfunke/matching-engine/src/utils';
import readJson from "../utilities/readJson";
import {fetchTurtleResource} from "./githubService";

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

    // collect requirement profiles
    //let requirementProfiles = {};
    console.log('Fetching requirement profiles:', validationConfig['queries'][0]['fileUrl'])
    const fileUrl = await fetchTurtleResource(validationConfig['queries'][0]['fileUrl']);
    console.log(fileUrl);

    // for (const requirementProfile in validationConfig['queries']) {
    //     const fileUrl = requirementProfile['fileUrl'];
    //     console.log('Fetching requirement profile:', fileUrl);
    //     //requirementProfiles[rpUri] = await fetchTurtleResource(fileUrl);
    // }
    // console.log('Running validations for:', Object.keys(requirementProfiles));

    return null;
}
