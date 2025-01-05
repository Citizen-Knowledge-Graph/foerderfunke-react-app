import React, { useCallback, useEffect, useState } from "react";
import Layout from "../../shared-components/Layout";
import AppScreenWrapper from "../../shared-components/AppScreenWrapper";
import { useNavigate } from "react-router-dom";
import {
    questionsStackStore,
    useSelectedTopicsStore,
    useUserStore,
    useValidationReportStore
} from "../../storage/zustand";
import { useProfileSectionStore } from "../../storage/useProfileSectionStore";
import userManager from "../../../core/managers/userManager";
import { convertUserProfileToTurtle } from "@foerderfunke/matching-engine/src/utils";
import dayjs from "dayjs";
import { Button, Typography, Grid } from "@mui/material";
import globalStyles from "../../styles/styles";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import DeleteIcon from '@mui/icons-material/Delete';
import { useStore } from "../../shared-components/ViewportUpdater";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ReplayIcon from '@mui/icons-material/Replay';
import useTranslation from "../../language/useTranslation";
import { useValidationUpdate } from "../../storage/updates";
import { VBox, HBox } from "../../shared-components/LayoutBoxes";
import theme from "../../../theme";

const InfoScreenReturningUser = () => {
    const { t } = useTranslation();
    const isDesktop = useStore((state) => state.isDesktop);

    const updateUserId = useUserStore((state) => state.updateUserId);
    const defaultUserId = "ff:quick-check-user";
    const initializeSectionStore = useProfileSectionStore((state) => state.initializeSectionStore);
    const triggerValidationUpdate = useValidationUpdate.getState().triggerValidationUpdate;
    const navigate = useNavigate();
    const [userExists, setUserExists] = useState(false);

    const initStores = useCallback(() => {
        updateUserId(defaultUserId);
        const newSectionStore = {
            entityData: {
                id: defaultUserId,
                type: "ff:Citizen"
            },
            nestedSection: null,
        };
        initializeSectionStore(newSectionStore);
    }, [updateUserId, defaultUserId, initializeSectionStore]);

    const initNewUser = useCallback(() => {
        userManager.initialiseNewUser(defaultUserId);
        initStores();
        navigate('/info-privacy');
    }, [defaultUserId, navigate, initStores]);

    useEffect(() => {
        const userIds = userManager.retrieveUserIds();
        if (userIds.length === 0) {
            initNewUser();
        } else {
            setUserExists(true);
        }
    }, [navigate, userExists, initNewUser]);

    const exportProfile = async () => {
        const userProfile = userManager.retrieveUserData(defaultUserId);
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
        initStores();
        triggerValidationUpdate()
        navigate('/onboarding-choice');
    }

    const startOver = async () => {
        localStorage.clear();
        useValidationReportStore.getState().clear();
        useSelectedTopicsStore.getState().clear();
        questionsStackStore.getState().resetQuestionsStack();
        initNewUser();
    }

    const deleteProfile = () => {
        localStorage.removeItem('userIds');
        localStorage.removeItem('ff:quick-check-user');
        window.location.href = '/';
    }

    return (
        userExists && (
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
                                        <Button variant="text"
                                            sx={{
                                                borderStyle: 'solid',
                                                borderWidth: '1px',
                                                borderColor: theme.palette.primary.main,
                                                '&:hover': {
                                                    backgroundColor: theme.palette.primary.main,
                                                },
                                            }}
                                            onClick={startOver}
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
                                    startIcon={<DeleteIcon sx={{ color: globalStyles.colorDarkGrey }} />}
                                    onClick={deleteProfile}
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
        )
    );
}

export default InfoScreenReturningUser;
