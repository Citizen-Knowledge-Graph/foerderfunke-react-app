import { useMemo } from "react";
import { buildEligibilityReports } from "@/core/utils/buildEligibilityReports";

const useEligibilityData = (validationReport, metadata, hydrationData, language) => {
  return useMemo(() => {
    return buildEligibilityReports(validationReport, metadata, hydrationData, language);
  }, [validationReport, metadata, hydrationData, language]);
};

export default useEligibilityData;