import { useMemo } from "react";

const normalizeToArray = (value) => {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
};

const useBuildTopicsList = (selectedTopics, metadata) => {
  return useMemo(() => {
    if (!selectedTopics?.length || !metadata?.['ff:hasRP']) {
      return { topicRps: [], uniqueRpCount: 0 };
    }

    const rps = Object.values(metadata['ff:hasRP']);
    const uniqueRpIds = new Set();

    const topicRps = selectedTopics.map((topic) => {
      const topicId = topic.id;

      const rpTitles = rps
        .filter((rp) => {
          const categories = normalizeToArray(rp?.["ff:category"]);
          const matches = categories.some(cat => cat?.["@id"] === topicId);
          if (matches && rp?.["@id"]) uniqueRpIds.add(rp["@id"]);
          return matches;
        })
        .map((rp) => rp["ff:title"]?.["@value"] || rp["@id"]);

      return {
        topic,
        rps: rpTitles
      };
    });

    return {
      topicRps,
      uniqueRpCount: uniqueRpIds.size
    };
  }, [selectedTopics, metadata]);
};

export default useBuildTopicsList;