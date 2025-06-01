import { useEffect, useState } from "react";
import matchingEngineManager from "@/core/managers/matchingEngineManagar";
import {
  useUserStore,
  useQuizReportStore,
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
  const updateQuizReport = useQuizReportStore((state) => state.updateQuizReport);
  const language = useLanguageStore((state) => state.language);

  useEffect(() => {
    const fetchQuizReport = async () => {
      if (!userId) return;

      const rps = Object.values(metadata?.['ff:hasRP'] || {});
      const uniqueRpIds = new Set();

      const hasSelectedTopics = Array.isArray(selectedTopics) && selectedTopics.length > 0;
      const hasSelectedBenefit = selectedBenefit?.["@id"];

      // Add RP IDs based on selected topics
      if (hasSelectedTopics) {
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
      if (hasSelectedBenefit) {
        uniqueRpIds.add(selectedBenefit["@id"]);
      }

      // If both selectedTopics and selectedBenefit are empty/null, add all RPs
      if (!hasSelectedTopics && !hasSelectedBenefit) {
        for (const rp of rps) {
          if (rp?.["@id"]) {
            uniqueRpIds.add(rp["@id"]);
          }
        }
      }

      const rpUris = Array.from(uniqueRpIds);
      if (rpUris.length === 0) return;

      try {
        setLoading(true);
        const quizReport = await matchingEngineManager.fetchQuizReport(userId, rpUris, language);
        updateQuizReport(quizReport);
      } catch (err) {
        console.error("Error producing quiz report:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchQuizReport();
  }, [userId, selectedTopics, selectedBenefit, metadata, language, updateQuizReport]);

  return { loading, error };
};

export default useFetchQuizReport;