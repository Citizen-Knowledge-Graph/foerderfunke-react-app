import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import DeleteIcon from '@mui/icons-material/Delete';
import Layout from "@/ui/shared-components/Layout";
import AppScreenWrapperContainer from "@/ui/shared-components/app-screen-wrapper/AppScreenWrapperContainer";
import { VBox, HBox } from "@/ui/shared-components/LayoutBoxes";


const InfoScreenReturningUser = ({ t, isLoading, exportProfile, deleteExistingProfile }) => {
    return (
    <Layout isApp={true} logo={false}>
      <AppScreenWrapperContainer isLoading={isLoading} home={true} backTarget={-1}>
        <VBox sx={{ gap: 8 }}>
          <Typography variant="h1">{t('app.welcomeBack.header')}</Typography>
          <Typography variant="body1">{t("app.welcomeBack.text")}</Typography>
          <HBox sx={{ flexWrap: 'wrap' }}>
            <HBox>
              <Button
                variant="text"
                sx={{
                  padding: "32px 32px",
                  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
                  '&:hover': { backgroundColor: 'yellow.main' },
                }}
                component={Link}
                to={'/onboarding-choice'}
              >
                <HBox sx={{ alignItems: 'center' }}>
                  <VBox sx={{ alignItems: 'flex-start' }}>
                    <Typography variant="h6">{t("app.welcomeBack.yesBtnTitle")}</Typography>
                    <Typography variant="body1" sx={{ textAlign: 'left' }}>{t("app.welcomeBack.yesBtnText")}</Typography>
                  </VBox>
                </HBox>
              </Button>
            </HBox>
            <HBox>
              <Button
                sx={{
                  padding: "32px 32px",
                  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
                  '&:hover': { backgroundColor: 'yellow.main' },
                }}
                onClick={deleteExistingProfile}
                component={Link}
                to={'/user-routing'}
              >
                <HBox sx={{ alignItems: 'center' }}>
                  <VBox sx={{ alignItems: 'flex-start' }}>
                    <Typography variant="h6">{t("app.welcomeBack.noBtnTitle")}</Typography>
                    <Typography variant="body1" sx={{ textAlign: 'left' }}>{t("app.welcomeBack.noBtnText")}</Typography>
                  </VBox>
                </HBox>
              </Button>
            </HBox>
          </HBox>
          <HBox sx={{ flexWrap: 'wrap' }}>
            <Button
              variant="text"
              sx={{
                backgroundColor: 'greyTransparent.main',
                '&:hover': { backgroundColor: 'custom.lightGrey' },
              }}
              startIcon={<FileDownloadIcon sx={{ color: 'custom.darkGrey' }} />}
              onClick={exportProfile}
            >
              <Typography variant="body2" sx={{ color: 'custom.darkGrey' }}>
                {t("app.welcomeBack.exportBtn")}
              </Typography>
            </Button>
            <Button
              variant="text"
              sx={{
                backgroundColor: 'greyTransparent.main',
                '&:hover': { backgroundColor: 'custom.lightGrey' },
              }}
              startIcon={<DeleteIcon sx={{ color: 'custom.darkGrey' }} />}
              onClick={deleteExistingProfile}
            >
              <Typography variant="body2" sx={{ color: 'custom.darkGrey' }}>
                {t("app.welcomeBack.deleteBtn")}
              </Typography>
            </Button>
          </HBox>
        </VBox>
      </AppScreenWrapperContainer>
    </Layout>
  );
};

export default InfoScreenReturningUser;