import React from "react";
import dayjs from "dayjs";
import { convertUserProfileToTurtle } from "@foerderfunke/matching-engine/src/profile-conversion";
import useTranslation from "@/ui/language/useTranslation";
import userManager from "@/core/managers/userManager";
import InfoScreenReturningUser from "./InfoScreenReturningUser";
import useResetUserProfile from "../hooks/useResetUserProfile";

const InfoScreenReturningUserContainer = () => {
  const { t } = useTranslation();
  const { applicationIsLoading, resetUserProfile } = useResetUserProfile();


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

  return (
    <InfoScreenReturningUser
      isLoading={applicationIsLoading}
      t={t}
      exportProfile={exportProfile}
      deleteExistingProfile={resetUserProfile}
    />
  );
};

export default InfoScreenReturningUserContainer;