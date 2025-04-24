import { useMemo } from "react";

const useProduceOverviewTitles = (metadata, selectedTopics, selectedBenefit) => {
  return useMemo(() => {
    if (!metadata?.rp) return { rpTitle: "", topicRps: [] };

    const benefitId = selectedBenefit?.split(":")[1];
    const benefitUri = benefitId ? `https://foerderfunke.org/default#${benefitId}` : "";
    const rpTitle = benefitUri ? metadata.rp[benefitUri]?.title || "" : "";

    const topicRps = selectedTopics.map((topic) => {
      const topicId = topic.id.split(":").pop();
      const topicUri = `https://foerderfunke.org/default#${topicId}`;
      const rps = Object.values(metadata.rp).filter((rp) => rp.categories.includes(topicUri));
      return { topic, rps };
    });

    return { rpTitle, topicRps };
  }, [metadata?.rp, selectedTopics, selectedBenefit]);
};

export default useProduceOverviewTitles;