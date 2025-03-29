import React from "react";
import useTranslation from "../../../language/useTranslation";
import userManager from "../../../../core/managers/userManager";
import dayjs from "dayjs";
import { convertUserProfileToTurtle } from "@foerderfunke/matching-engine/src/profile-conversion";
import {
  questionsStackStore,
  useSelectedTopicsStore,
  useValidationReportStore,
} from "../../../storage/zustand";
import { useUserStore } from "../../../storage/zustand";
import { useValidationUpdate } from "../../../storage/updates";
import InfoScreenReturningUser from "./InfoScreenReturningUser";

const InfoScreenReturningUserContainer = () => {
  const { t } = useTranslation();
  const triggerValidationUpdate = useValidationUpdate((state) => state.triggerValidationUpdate);
  const updateUserId = useUserStore((state) => state.updateUserId);

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

  const continueWithExisting = () => {
    triggerValidationUpdate();
  };

  const deleteExistingProfile = () => {
    userManager.deleteUser();
    useValidationReportStore.getState().clear();
    useSelectedTopicsStore.getState().clear();
    questionsStackStore.getState().resetQuestionsStack();
    updateUserId(null);
  };

  return (
    <InfoScreenReturningUser
      t={t}
      exportProfile={exportProfile}
      continueWithExisting={continueWithExisting}
      deleteExistingProfile={deleteExistingProfile}
    />
  );
};

export default InfoScreenReturningUserContainer;