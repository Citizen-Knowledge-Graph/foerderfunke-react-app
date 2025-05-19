import { useMemo } from "react";
import { buildEligibilityReports } from "@/core/utils/buildEligibilityReports";
import { useMetadataStore } from "@/ui/storage/zustand";

const useEligibilityData = (validationReport, hydrationData, language) => {
  const metadata = useMetadataStore((state) => state.metadata);

  return useMemo(() => {
    if (!validationReport?.reports || !metadata[language]?.df || !hydrationData || Object.keys(hydrationData).length === 0) {
      return null;
    }
    return buildEligibilityReports(validationReport, metadata[language], hydrationData, language);
  }, [validationReport, metadata, hydrationData, language]);
};

export default useEligibilityData;