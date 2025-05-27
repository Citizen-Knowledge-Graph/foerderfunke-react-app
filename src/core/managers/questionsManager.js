import userManager from "./userManager";
import { convertUserProfileToTurtle } from "@foerderfunke/matching-engine/src/profile-conversion";
import resourceService from "@/core/services/resourceService";
import { getPrioritizedMissingDataFieldsJson } from "@foerderfunke/matching-engine/src/prematch";
import { useCachingService } from "@/core/services/cachingService";
import { createDeepCacheKey } from "@/core/utils/createDeepCacheKey";

const questionsManager = {
  async fetchPrioritizedQuestions(userId, topicIds, benefitId, language) {
    const cacheStore = useCachingService.getState();

    // Get the active user profile
    const userProfile = userManager.retrieveUserData(userId);
    const userProfileString = await convertUserProfileToTurtle(userProfile);

    // load validation config
    const validationConfig = await resourceService.fetchResourceWithCache(
      "assets/data/requirement-profiles/requirement-profiles.json"
    );

    const dataFieldsString = await resourceService.fetchResourceWithCache(
      validationConfig["datafields"]
    );
    const materializationString = await resourceService.fetchResourceWithCache(
      validationConfig["materialization"]
    );

    const requirementProfiles = {};
    for (const { fileUrl, rpUri } of validationConfig["queries"]) {
      requirementProfiles[rpUri] = await resourceService.fetchResourceWithCache(
        fileUrl
      );
    }

    const expand = (id) =>
      id.startsWith("ff:")
        ? "https://foerderfunke.org/default#" + id.split(":")[1]
        : id;

    const cacheKey = createDeepCacheKey(topicIds, benefitId, userProfile, language, expand);
    const cachedResult = cacheStore.getResource(cacheKey);
    if (cachedResult) return cachedResult;

    const missingQuestions = await getPrioritizedMissingDataFieldsJson(
      topicIds,
      benefitId ? [expand(benefitId)] : [],
      userProfileString,
      dataFieldsString,
      Object.values(requirementProfiles),
      materializationString,
      language
    );

    cacheStore.setResource(cacheKey, missingQuestions);
    return missingQuestions;
  },
};

export default questionsManager;
