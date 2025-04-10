import React from "react";
import useTranslation from "@/ui/language/useTranslation";
import dayjs from "dayjs";
import { convertUserProfileToTurtle } from "@foerderfunke/matching-engine/src/profile-conversion";
import {
  questionsStackStore,
  useSelectedTopicsStore,
  useValidationReportStore,
} from "@/ui/storage/zustand";
import { useUserStore } from "@/ui/storage/zustand";
import InfoScreenReturningUser from "./InfoScreenReturningUser";
import useJointValidationStatus from "@/ui/shared-hooks/useJointValidationStatus";
import userManager from "@/core/managers/userManager";
import { useStore } from "@/ui/shared-components/ViewportUpdater";
import useFetchUserList from "../hooks/useFetchUserList";

const InfoScreenReturningUserContainer = () => {
  const { t } = useTranslation();
  const isDesktop = useStore((state) => state.isDesktop);
  const { isLoadingJointStatus } = useJointValidationStatus();
  const updateUserId = useUserStore((state) => state.updateUserId);
  const userList = useFetchUserList();

  const exportProfile = async (userId) => {
    const userProfile = userManager.retrieveUserData(userId);
    const userProfileTurtleString = await convertUserProfileToTurtle(userProfile);
    const blob = new Blob([userProfileTurtleString], { type: 'text/turtle' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = `FörderFunke_ProfileExport_${userId}_${dayjs().format("YYYY-MM-DD_HH-mm-ss")}.ttl`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const continueWithExisting = (userId) => {
    console.log("Continuing with existing user:", userId);
    updateUserId(userId);
  };

  const deleteExistingProfile = (userId) => {
    userManager.deleteUser(userId);
    useValidationReportStore.getState().clear();
    useSelectedTopicsStore.getState().clear();
    questionsStackStore.getState().resetQuestionsStack();
  };

  return (
    <InfoScreenReturningUser
      isLoading={isLoadingJointStatus}
      isDesktop={isDesktop}
      userList={userList}
      t={t}
      exportProfile={exportProfile}
      continueWithExisting={continueWithExisting}
      deleteExistingProfile={deleteExistingProfile}
    />
  );
};

export default InfoScreenReturningUserContainer;