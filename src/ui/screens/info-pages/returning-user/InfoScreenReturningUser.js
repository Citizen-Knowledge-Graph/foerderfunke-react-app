import React from "react";
import { Button, Typography } from "@mui/material";
import Layout from "../../../shared-components/Layout";
import AppScreenWrapper from "../../../shared-components/AppScreenWrapper";
import { VBox, HBox } from "../../../shared-components/LayoutBoxes";
import theme from "../../../../theme";
import RegularButton from "@/ui/shared-components/RegularButton";

const InfoScreenReturningUser = ({ t, isLoading, userIds, exportProfile, continueWithExisting, deleteExistingProfile }) => {
  return (
    <Layout isApp={true} logo={false}>
      <AppScreenWrapper isLoading={isLoading} home={true}>
        <VBox sx={{ gap: theme.spacing(8) }}>
          <Typography variant="h1">{t('app.welcomeBack.header')}</Typography>
          <Typography variant="body1">{t("app.welcomeBack.text")}</Typography>
          <VBox sx={{ gap: 2 }}>
            {userIds.length > 0 && (
              userIds.map((userId) => (
                <>
                  <HBox key={userId} sx={{
                    maxWidth: '800px',
                    padding: '32px 32px',
                    borderRadius: theme.shape.borderRadius,
                    backgroundColor: 'white.main',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                    <Typography variant="h6">{userId}</Typography>
                    <HBox alignItems={'center'}>
                      <Button
                        variant="text"
                        onClick={exportProfile}
                        sx={{
                          color: 'blue.main',
                          '&:hover': {
                            backgroundColor: 'transparent',
                            color: 'black.main',
                          },
                          '&:focus': {
                            backgroundColor: 'transparent',
                            color: 'black.main',
                          }
                        }}
                      >
                        <Typography variant="body2" sx={{ color: 'inherit' }}>
                          {t("app.welcomeBack.exportBtn")}
                        </Typography>
                      </Button>
                      <Button
                        variant="text"
                        onClick={deleteExistingProfile}
                        sx={{
                          color: 'blue.main',
                          '&:hover': {
                            backgroundColor: 'transparent',
                            color: 'black.main',
                          },
                          '&:focus': {
                            backgroundColor: 'transparent',
                            color: 'black.main',
                          }
                        }}>
                        <Typography variant="body2" sx={{ color: 'inherit' }}>
                          {t("app.welcomeBack.deleteBtn")}
                        </Typography>
                      </Button>
                    </HBox>
                    <RegularButton
                      variant={'blueContained'}
                      onClick={continueWithExisting}
                      text={'app.welcomeBack.continueBtn'}
                    />
                  </HBox>
                  <HBox key={userId} sx={{
                    maxWidth: '800px',
                    padding: '32px 32px',
                    borderRadius: theme.shape.borderRadius,
                    backgroundColor: 'white.main',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                    <Typography variant="h6">{userId}</Typography>
                    <HBox alignItems={'center'}>
                      <Button
                        variant="text"
                        onClick={exportProfile}
                        sx={{
                          color: 'blue.main',
                          '&:hover': {
                            backgroundColor: 'transparent',
                            color: 'black.main',
                          },
                          '&:focus': {
                            backgroundColor: 'transparent',
                            color: 'black.main',
                          }
                        }}
                      >
                        <Typography variant="body2" sx={{ color: 'inherit' }}>
                          {t("app.welcomeBack.exportBtn")}
                        </Typography>
                      </Button>
                      <Button
                        variant="text"
                        onClick={deleteExistingProfile}
                        sx={{
                          color: 'blue.main',
                          '&:hover': {
                            backgroundColor: 'transparent',
                            color: 'black.main',
                          },
                          '&:focus': {
                            backgroundColor: 'transparent',
                            color: 'black.main',
                          }
                        }}>
                        <Typography variant="body2" sx={{ color: 'inherit' }}>
                          {t("app.welcomeBack.deleteBtn")}
                        </Typography>
                      </Button>
                    </HBox>
                    <RegularButton
                      variant={'blueContained'}
                      onClick={continueWithExisting}
                      text={'app.welcomeBack.continueBtn'}
                    />
                  </HBox>
                </>
              ))
            )}
          </VBox >
        </VBox>
      </AppScreenWrapper>
    </Layout>
  );
};

export default InfoScreenReturningUser;