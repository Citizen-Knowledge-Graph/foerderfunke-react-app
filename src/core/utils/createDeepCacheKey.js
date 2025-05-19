import stringify from "fast-json-stable-stringify";
import _ from "lodash";

export const createDeepCacheKey = (topicIds, benefitId, userProfile, language, expand) => {
    const normalizedKeyData = {
      topicIds: _.sortBy(topicIds),
      benefitId: benefitId ? expand(benefitId) : null,
      userProfile: _.cloneDeep(userProfile),
      language: language,
    };
  
    const deeplySortedKeyData = _.cloneDeepWith(normalizedKeyData, (val) => {
      if (_.isPlainObject(val)) {
        return _(val)
          .toPairs()
          .sortBy(0)
          .fromPairs()
          .mapValues((v) => _.cloneDeepWith(v, _.identity))
          .value();
      }
      return undefined;
    });
  
    return stringify(deeplySortedKeyData);
  };