import userManager from "./userManager";
import {validateAll, validateUserProfile} from '@foerderfunke/matching-engine';
import { convertUserProfileToTurtle } from "@foerderfunke/matching-engine/src/profile-conversion";
import { extractDatafieldsMetadata, extractRequirementProfilesMetadata } from '@foerderfunke/matching-engine/src/extract-metadata';
import resourceService from "../services/resourceService";

const validationManager = {
    async runValidation(userId, language = "en") {

        // Get the active user profile
        const userProfile = userManager.retrieveUserData(userId);
        const userProfileString = await convertUserProfileToTurtle(userProfile);

        // load validation config
        const validationConfig = await resourceService.fetchResourceWithCache('assets/data/requirement-profiles/requirement-profiles.json');

        // validate user profile against datafields
        const dataFieldsString = await resourceService.fetchResourceWithCache(validationConfig['datafields']);
        if (!(await validateUserProfile(userProfileString, dataFieldsString))) {
            console.error('Invalid user profile');
        }

        // load materialization scripts
        const materializationString = await resourceService.fetchResourceWithCache(validationConfig['materialization']);

        // collect requirement profiles
        let requirementProfiles = {};
        for (const requirementProfile of validationConfig['queries']) {
            const { fileUrl, rpUri } = requirementProfile;
            requirementProfiles[rpUri] = await resourceService.fetchResourceWithCache(fileUrl);
        }
        
        let validateAllReport = await validateAll(
            userProfileString,
            requirementProfiles,
            dataFieldsString,
            materializationString,
            false
        );

        // add user profile to the report
        validateAllReport['userProfile'] = userProfile;

        // fetch metadata
        let metadata = {
            df: await extractDatafieldsMetadata(dataFieldsString, language),
            rp: await extractRequirementProfilesMetadata(Object.values(requirementProfiles), language),
        };

        return [validateAllReport, metadata];
    },
    async fetchMetadata() {
        // load validation config
        const validationConfig = await resourceService.fetchResourceWithCache('assets/data/requirement-profiles/requirement-profiles.json');

        // validate user profile against datafields
        const dataFieldsString = await resourceService.fetchResourceWithCache(validationConfig['datafields']);

        // collect requirement profiles
        let requirementProfiles = {};
        for (const requirementProfile of validationConfig['queries']) {
            const { fileUrl, rpUri } = requirementProfile;
            requirementProfiles[rpUri] = await resourceService.fetchResourceWithCache(fileUrl);
        }

        // fetch metadata
        let metadata = {
            "en": {
                df: await extractDatafieldsMetadata(dataFieldsString, "en"),
                rp: await extractRequirementProfilesMetadata(Object.values(requirementProfiles), "en"),
            },
            "de": {
                df: await extractDatafieldsMetadata(dataFieldsString, "de"),
                rp: await extractRequirementProfilesMetadata(Object.values(requirementProfiles), "de"),

            }
        };

        return metadata;
    }
}

export default validationManager;

