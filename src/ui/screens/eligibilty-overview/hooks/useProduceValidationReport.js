import { useEffect, useRef } from "react";
import { isEqual } from "lodash";
import useRunValidation from "@/ui/shared-hooks/useRunValidation";
import userManager from "@/core/managers/userManager";
import { useValidationReportStore } from "@/ui/storage/zustand";
import { useValidationUpdate } from "@/ui/storage/updates";
import { useMetadataStore } from "@/ui/storage/zustand";

const useProduceValidationReport = () => {
  const validationIsLoading = useValidationUpdate((state) => state.validationIsLoading);
  const validationReport = useValidationReportStore((state) => state.validationReport);
  const metadata = useMetadataStore((state) => state.metadata);
  const runValidation = useRunValidation();

  const isRunningRef = useRef(false);

  useEffect(() => {
    const shouldRun = () => {
      if (validationIsLoading || isRunningRef.current) return false;
      if (!validationReport?.reports || !validationReport?.userProfile) return true;

      const validatedUserProfile = validationReport.userProfile;
      const currentUserProfile = userManager.retrieveUserData();
      return !isEqual(validatedUserProfile, currentUserProfile);
    };

    const produceValidationReport = async () => {
      if (!shouldRun()) {
        return;
      }

      isRunningRef.current = true;
      await runValidation();
      isRunningRef.current = false;
    };

    produceValidationReport();
  }, [validationReport, validationIsLoading, runValidation]);

  return {
    validationReport,
    metadata,
  };
};

export default useProduceValidationReport;