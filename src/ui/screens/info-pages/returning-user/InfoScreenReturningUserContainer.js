import React from "react";
import dayjs from "dayjs";
import { convertUserProfileToTurtle } from "@foerderfunke/matching-engine/src/profile-conversion";
import {
  questionsStackStore,
  useSelectedBenefitStore,
  useSelectedTopicsStore,
  useValidationReportStore,
} from "@/ui/storage/zustand";
import useTranslation from "@/ui/language/useTranslation";
import userManager from "@/core/managers/userManager";
import { useUserStore } from "@/ui/storage/zustand";
import InfoScreenReturningUser from "./InfoScreenReturningUser";
import useJointValidationStatus from "@/ui/shared-hooks/utility/useJointValidationStatus";

const InfoScreenReturningUserContainer = () => {
  const { t } = useTranslation();
  const { isLoadingJointStatus } = useJointValidationStatus();
  const updateUserId = useUserStore((state) => state.updateUserId);

  const continueWithExisting = () => {
    updateUserId("ff:quick-check-user")
  };

  const exportProfile = async () => {
    const userProfile = userManager.retrieveUserData();
    const userProfileTurtleString = await convertUserProfileToTurtle(userProfile);
    const blob = new Blob([userProfileTurtleString], { type: 'text/turtle' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = `FörderFunke_ProfileExport_${dayjs().format("YYYY-MM-DD_HH-mm-ss")}.ttl`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const deleteExistingProfile = () => {
    userManager.deleteUser();
    useValidationReportStore.getState().clear();
    useSelectedTopicsStore.getState().clear();
    useSelectedBenefitStore.getState().clear();
    questionsStackStore.getState().resetQuestionsStack();
    updateUserId(null);
  };

  return (
    <InfoScreenReturningUser
      isLoading={isLoadingJointStatus}
      t={t}
      exportProfile={exportProfile}
      continueWithExisting={continueWithExisting}
      deleteExistingProfile={deleteExistingProfile}
    />
  );
};

export default InfoScreenReturningUserContainer;