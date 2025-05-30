import { useEffect, useState } from "react";
import matchingEngineManager from "@/core/managers/matchingEngineManagar";
import {
  useUserStore,
  useSelectedTopicsStore,
  useSelectedBenefitStore,
  useMetadataStore
} from "@/ui/storage/zustand";
import { useLanguageStore } from "@/ui/storage/useLanguageStore";

const normalizeToArray = (value) => {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
};

const useFetchQuizReport = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const userId = useUserStore((state) => state.activeUserId);
  const metadata = useMetadataStore((state) => state.metadata);
  const selectedTopics = useSelectedTopicsStore((state) => state.selectedTopics);
  const selectedBenefit = useSelectedBenefitStore((state) => state.selectedBenefit);
  const language = useLanguageStore((state) => state.language);

  useEffect(() => {
    const fetchQuizReport = async () => {
      if (!userId || (!selectedTopics?.length && !selectedBenefit)) return;

      const rps = Object.values(metadata?.['ff:hasRP'] || {});
      const uniqueRpIds = new Set();

      // Add RP IDs based on selected topics
      if (selectedTopics?.length) {
        for (const topic of selectedTopics) {
          const topicId = topic.id;
          for (const rp of rps) {
            const categories = normalizeToArray(rp?.["ff:category"]);
            const matches = categories.some(cat => cat?.["@id"] === topicId);
            if (matches && rp?.["@id"]) {
              uniqueRpIds.add(rp["@id"]);
            }
          }
        }
      }

      // Add selected benefit if it's defined
      if (selectedBenefit?.["@id"]) {
        uniqueRpIds.add(selectedBenefit["@id"]);
      }

      const rpUris = Array.from(uniqueRpIds);
      if (rpUris.length === 0) return;

      console.log("Producing quiz report for user:", userId);
      console.log("Selected Topics:", selectedTopics);
      console.log("Selected Benefit:", selectedBenefit);
      console.log("Unique RP URIs:", rpUris);

      try {
        setLoading(true);
        const quizReport = await matchingEngineManager.fetchQuizReport(userId, rpUris, language);
        console.log("Quiz Report:", quizReport);
      } catch (err) {
        console.error("Error producing quiz report:", err);
        setError(err);
      } finally {
        console.log("Quiz report fetch completed.");
        setLoading(false);
      }
    };

    fetchQuizReport();
  }, [userId, selectedTopics, selectedBenefit, metadata, language]);

  return { loading, error };
};

export default useFetchQuizReport;