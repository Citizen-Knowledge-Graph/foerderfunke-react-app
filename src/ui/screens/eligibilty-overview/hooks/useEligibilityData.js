import { useMemo } from "react";
import { buildEligibilityReports } from "@/core/utilities/buildEligibilityReports";

const useEligibilityData = (validationReport, metadata, hydrationData, language) => {
    return useMemo(() => {
      if (!validationReport?.reports || !metadata?.df || !hydrationData || Object.keys(hydrationData).length === 0) {
        return null;
      }
      return buildEligibilityReports(validationReport, metadata, hydrationData, language);
    }, [validationReport, metadata, hydrationData, language]);
  };
  
  export default useEligibilityData;