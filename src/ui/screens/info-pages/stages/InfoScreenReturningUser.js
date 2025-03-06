import React from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { Button, Typography, Grid } from "@mui/material";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import DeleteIcon from '@mui/icons-material/Delete';
import Layout from "../../../shared-components/Layout";
import AppScreenWrapper from "../../../shared-components/AppScreenWrapper";
import { VBox, HBox } from "../../../shared-components/LayoutBoxes";
import theme from "../../../../theme";
import useTranslation from "../../../language/useTranslation";
import { convertUserProfileToTurtle } from "@foerderfunke/matching-engine/src/profile-conversion";
import userManager from "../../../../core/managers/userManager";
import {
    questionsStackStore,
    useSelectedTopicsStore,
    useValidationReportStore
} from "../../../storage/zustand";
import { useUserStore } from "../../../storage/zustand";
import { useValidationUpdate } from "../../../storage/updates";


const InfoScreenReturningUser = () => {
    const { t } = useTranslation();
    const triggerValidationUpdate = useValidationUpdate((state) => state.triggerValidationUpdate);
    const updateUserId = useUserStore((state) => state.updateUserId);

    const exportProfile = async () => {
        const userProfile = userManager.retrieveUserData();
        const userProfileTurtleString = await convertUserProfileToTurtle(userProfile);
        const blob = new Blob([userProfileTurtleString], { type: 'text/turtle' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = "FörderFunke_ProfileExport_" + dayjs().format("YYYY-MM-DD_HH-mm-ss") + ".ttl";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const continueWithExisting = () => {
        triggerValidationUpdate()
    }

    const deleteExistingProfile = () => {
        userManager.deleteUser();
        useValidationReportStore.getState().clear();
        useSelectedTopicsStore.getState().clear();
        questionsStackStore.getState().resetQuestionsStack();
        updateUserId(null);
    }

    return (
        <Layout isApp={true} logo={false}>
            <AppScreenWrapper home={true}>
                <VBox sx={{ gap: theme.spacing(8) }}>
                    <Typography variant="h1">
                        {t('app.welcomeBack.header')}
                    </Typography>
                    <Typography variant="body1">
                        {t("app.welcomeBack.text")}
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} container>
                            <HBox>
                                <Button variant="text"
                                    sx={{
                                        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
                                        '&:hover': {
                                            backgroundColor: theme.palette.yellow.main,
                                        },
                                    }}
                                    onClick={continueWithExisting}
                                    component={Link}
                                    to={'/onboarding-choice'}
                                >
                                    <HBox sx={{ alignItems: 'center' }}>
                                        <VBox sx={{ alignItems: 'flex-start' }}>
                                            <Typography variant="h6">
                                                {t("app.welcomeBack.yesBtnTitle")}
                                            </Typography>
                                            <Typography variant="body2" sx={{ textAlign: 'left' }}>
                                                {t("app.welcomeBack.yesBtnText")}
                                            </Typography>
                                        </VBox>
                                    </HBox>
                                </Button>
                            </HBox>
                        </Grid>
                        <Grid item xs={12} sm={6} container>
                            <HBox>
                                <Button
                                    sx={{
                                        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
                                        '&:hover': {
                                            backgroundColor: theme.palette.yellow.main,
                                        },
                                    }}
                                    onClick={deleteExistingProfile}
                                    component={Link}
                                    to={'/user-routing'}
                                >
                                    <HBox sx={{ alignItems: 'center' }}>
                                        <VBox sx={{ alignItems: 'flex-start' }}>
                                            <Typography variant="h6">
                                                {t("app.welcomeBack.noBtnTitle")}
                                            </Typography>
                                            <Typography variant="body2" sx={{ textAlign: 'left' }}>
                                                {t("app.welcomeBack.noBtnText")}
                                            </Typography>
                                        </VBox>
                                    </HBox>
                                </Button>
                            </HBox>
                        </Grid>
                    </Grid>
                    <HBox>
                        <Button
                            sx={{
                                borderWidth: '1px',
                                borderStyle: 'solid',
                                borderColor: theme.palette.custom.darkGrey,
                                '&:hover': {
                                    backgroundColor: theme.palette.custom.lightGrey,
                                },
                            }}
                            startIcon={<FileDownloadIcon sx={{ color: theme.palette.custom.darkGrey }} />}
                            onClick={exportProfile}
                        >
                            <Typography variant="body2" sx={{ color: theme.palette.custom.darkGrey }}>
                                {t("app.welcomeBack.exportBtn")}
                            </Typography>
                        </Button>
                        <Button
                            sx={{
                                borderWidth: '1px',
                                borderStyle: 'solid',
                                borderColor: theme.palette.custom.darkGrey,
                                '&:hover': {
                                    backgroundColor: theme.palette.custom.lightGrey,
                                },
                            }}
                            startIcon={<DeleteIcon sx={{ color: theme.palette.custom.darkGrey }} />}
                            onClick={deleteExistingProfile}
                        >
                            <Typography variant="body2" sx={{ color: theme.palette.custom.darkGrey }}>
                                {t("app.welcomeBack.deleteBtn")}
                            </Typography>
                        </Button>
                    </HBox>
                </VBox>
            </AppScreenWrapper>
        </Layout>
    );
}

export default InfoScreenReturningUser;
