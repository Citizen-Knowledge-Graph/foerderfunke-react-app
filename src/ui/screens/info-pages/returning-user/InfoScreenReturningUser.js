import React from "react";
import { Typography } from "@mui/material";
import Layout from "@/ui/shared-components/Layout";
import AppScreenWrapper from "@/ui/shared-components/AppScreenWrapper";
import { VBox } from "@/ui/shared-components/LayoutBoxes";
import theme from "@/theme";
import UserItem from "../components/UserItem";
import RegularButton from "@/ui/shared-components/RegularButton";

const InfoScreenReturningUser = ({ t, isDesktop, isLoading, userList, exportProfile, continueWithExisting, deleteExistingProfile }) => {

  console.log(isDesktop, "isDesktop");
  return (
    <Layout isApp={true} logo={false}>
      <AppScreenWrapper isLoading={isLoading} home={true}>
        <VBox sx={{ gap: theme.spacing(8) }}>
          <Typography variant="h1">{t('app.welcomeBack.header')}</Typography>
          <Typography variant="body1">{t("app.welcomeBack.text")}</Typography>
          <VBox sx={{ gap: 2 }}>
            {userList.length > 0 && (
              userList.map((user, index) => (
                <>
                  <UserItem
                    t={t}
                    index={index}
                    user={user}
                    continueWithExisting={continueWithExisting}
                    deleteExistingProfile={deleteExistingProfile}
                    exportProfile={exportProfile}
                  />
                  <UserItem
                    t={t}
                    index={index}
                    user={user}
                    continueWithExisting={continueWithExisting}
                    deleteExistingProfile={deleteExistingProfile}
                    exportProfile={exportProfile}
                  />
                </>
              ))
            )}
          </VBox>
          <RegularButton
            variant={'blueContained'}
            onClick={continueWithExisting}
            text={'app.welcomeBack.createNewBtn'}
            link={'/onboarding-choice'}
          />
        </VBox>
      </AppScreenWrapper>
    </Layout>
  );
};

export default InfoScreenReturningUser;
