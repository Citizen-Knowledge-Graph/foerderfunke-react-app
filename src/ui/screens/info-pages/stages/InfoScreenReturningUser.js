import React from "react";
import Layout from "../../../shared-components/Layout";
import AppScreenWrapper from "../../../shared-components/AppScreenWrapper";
import { Link } from "react-router-dom";
import {
    questionsStackStore,
    useSelectedTopicsStore,
    useValidationReportStore
} from "../../../storage/zustand";
import userManager from "../../../../core/managers/userManager";
import { convertUserProfileToTurtle } from "@foerderfunke/matching-engine/src/utils";
import dayjs from "dayjs";
import { Button, Typography, Grid } from "@mui/material";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import DeleteIcon from '@mui/icons-material/Delete';
import { useStore } from "../../../shared-components/ViewportUpdater";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ReplayIcon from '@mui/icons-material/Replay';
import useTranslation from "../../../language/useTranslation";
import { useValidationUpdate } from "../../../storage/updates";
import { VBox, HBox } from "../../../shared-components/LayoutBoxes";
import { useUserStore } from "../../../storage/zustand";
import theme from "../../../../theme";

const InfoScreenReturningUser = () => {
    const { t } = useTranslation();
    const isDesktop = useStore((state) => state.isDesktop);
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
        <Layout isApp={true} logo={false} back="Back">
            <AppScreenWrapper isDesktop={isDesktop} back={true}>
                <VBox sx={{ gap: theme.spacing(4) }}>
                    <VBox sx={{ alignItems: "center" }}>
                        <Typography variant="h4">
                            {t('app.welcomeBack.header')}
                        </Typography>
                    </VBox>
                    <VBox sx={{ gap: theme.spacing(4) }}>
                        <Typography variant="body1">
                            {t("app.welcomeBack.text")}
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <HBox>
                                    <Button variant="text"
                                        sx={{
                                            borderStyle: 'solid',
                                            borderWidth: '1px',
                                            borderColor: theme.palette.primary.main,
                                            '&:hover': {
                                                backgroundColor: theme.palette.primary.main,
                                            },
                                        }}
                                        onClick={continueWithExisting}
                                        component={Link}
                                        to={'/onboarding-choice'}
                                    >
                                        <HBox sx={{ alignItems: 'center' }}>
                                            <VBox sx={{ alignItems: 'flex-start', width: '70%' }}>
                                                <Typography variant="h6">
                                                    {t("app.welcomeBack.yesBtnTitle")}
                                                </Typography>
                                                <Typography variant="body1" sx={{ textAlign: 'left' }}>
                                                    {t("app.welcomeBack.yesBtnText")}
                                                </Typography>
                                            </VBox>
                                            <ArrowForwardIcon sx={{ color: 'black', fontSize: 30, flex: 1 }} />
                                        </HBox>
                                    </Button>
                                </HBox>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <HBox>
                                    <Button
                                        sx={{
                                            borderStyle: 'solid',
                                            borderWidth: '1px',
                                            borderColor: theme.palette.primary.main,
                                            '&:hover': {
                                                backgroundColor: theme.palette.primary.main,
                                            },
                                        }}
                                        onClick={deleteExistingProfile}
                                        component={Link}
                                        to={'/user-routing'}
                                    >
                                        <HBox sx={{ alignItems: 'center' }}>
                                            <VBox sx={{ alignItems: 'flex-start', width: '70%' }}>
                                                <Typography variant="h6">
                                                    {t("app.welcomeBack.noBtnTitle")}
                                                </Typography>
                                                <Typography variant="body1" sx={{ textAlign: 'left' }}>
                                                    {t("app.welcomeBack.noBtnText")}
                                                </Typography>
                                            </VBox>
                                            <ReplayIcon sx={{ color: 'black', fontSize: 30, flex: 1 }} />
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
                </VBox>
            </AppScreenWrapper>
        </Layout>
    );
}

export default InfoScreenReturningUser;
