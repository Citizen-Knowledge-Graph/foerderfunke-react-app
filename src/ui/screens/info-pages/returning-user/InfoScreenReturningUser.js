import React from "react";
import { Typography } from "@mui/material";
import Layout from "@/ui/shared-components/Layout";
import AppScreenWrapperContainer from "@/ui/shared-components/app-screen-wrapper/AppScreenWrapperContainer";
import { VBox, HBox } from "@/ui/shared-components/LayoutBoxes";
import TileButton from "@/ui/shared-components/buttons/TileButton";
import RegularButton from "@/ui/shared-components/buttons/RegularButton";


const InfoScreenReturningUser = ({ t, isLoading, exportProfile, deleteExistingProfile }) => {
  return (
    <Layout isApp={true} logo={false}>
      <AppScreenWrapperContainer isLoading={isLoading} home={true} backTarget={-1}>
        <VBox sx={{ gap: 8 }}>
          <Typography variant="h1">{t('app.welcomeBack.header')}</Typography>
          <Typography variant="body1">{t("app.welcomeBack.text")}</Typography>
          <HBox sx={{ flexWrap: 'wrap' }}>
            <TileButton
              variant={'whiteNoBorderYellow'}
              title={"app.welcomeBack.yesBtnTitle"}
              subtitle="app.welcomeBack.yesBtnText"
              link={'/onboarding-choice'}
            />
            <TileButton
              variant={'whiteNoBorderYellow'}
              title={"app.welcomeBack.noBtnTitle"}
              subtitle="app.welcomeBack.noBtnText"
              onClick={deleteExistingProfile}
              link={'/user-routing'}
            />
          </HBox>
          <HBox sx={{ flexWrap: 'wrap' }}>
            <RegularButton
              variant={'blackOutlined'}
              text={"app.welcomeBack.exportBtn"}
              onClick={exportProfile}
              size='small'
            />
            <RegularButton
              variant={'blackOutlined'}
              text={"app.welcomeBack.deleteBtn"}
              onClick={deleteExistingProfile}
              size='small'
            />
          </HBox>
        </VBox>
      </AppScreenWrapperContainer>
    </Layout>
  );
};

export default InfoScreenReturningUser;