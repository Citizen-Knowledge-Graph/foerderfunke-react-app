import React from "react";
import { Typography } from "@mui/material";
import Layout from "@/ui/shared-components/Layout";
import AppScreenWrapper from "@/ui/shared-components/AppScreenWrapper";
import { VBox } from "@/ui/shared-components/LayoutBoxes";
import RegularButton from "@/ui/shared-components/RegularButton";
import UserItem from "../components/UserItem";

const InfoScreenReturningUser = ({
  t,
  isLoading,
  userList,
  exportProfile,
  continueWithExisting,
  deleteExistingProfile
}) => {

  return (
    <Layout isApp={true} logo={false}>
      <AppScreenWrapper isLoading={isLoading} home={true}>
        <VBox sx={{ gap: { xs: 4, md: 8 } }}>
          <Typography variant="h1">{t('app.welcomeBack.header')}</Typography>
          <Typography variant="body1">{userList?.length === 0 ? t("app.welcomeBack.textSingle") : t("app.welcomeBack.textMultiple")}</Typography>
          <VBox sx={{ gap: 2 }}>
            {userList.length > 0 && (
              userList.map((user, index) => (
                <UserItem
                  t={t}
                  key={index}
                  user={user}
                  continueWithExisting={continueWithExisting}
                  deleteExistingProfile={deleteExistingProfile}
                  exportProfile={exportProfile}
                />
              ))
            )}
          </VBox>
          <RegularButton
            variant={'blueContained'}
            text={'app.welcomeBack.createNewBtn'}
            link={'/onboarding-user'}
          />
        </VBox>
      </AppScreenWrapper>
    </Layout>
  );
};

export default InfoScreenReturningUser;
