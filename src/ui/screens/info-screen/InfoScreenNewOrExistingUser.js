import React, {useCallback, useEffect, useState} from "react";
import InfoScreen from "./components/InfoScreen";
import {useNavigate} from "react-router-dom";
import {
    questionsStackStore,
    useSelectedTopicsStore,
    useUserStore,
    useValidationReportStore
} from "../../storage/zustand";
import {useProfileSectionStore} from "../../storage/useProfileSectionStore";
import userManager from "../../../core/managers/userManager";
import {convertUserProfileToTurtle} from "@foerderfunke/matching-engine/src/utils";
import dayjs from "dayjs";
import VStack from "../../shared-components/VStack";
import {Button, Typography} from "@mui/material";
import globalStyles from "../../styles/styles";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import DeleteIcon from '@mui/icons-material/Delete';
import HStack from "../../shared-components/HStack";
import {useStore} from "../../shared-components/ViewportUpdater";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ReplayIcon from '@mui/icons-material/Replay';
import useTranslation from "../../language/useTranslation";
import {useValidationUpdate} from "../../storage/updates";

const InfoScreenNewOrExistingUser = () => {
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
        const blob = new Blob([userProfileTurtleString], {type: 'text/turtle'});
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

    const DynamicStacker = ({children}) => {
        if (isDesktop) {
            return (
                <HStack justifyContent={'space-between'}>
                    {children}
                </HStack>
            )
        }
        return (
            <VStack>
                {children}
            </VStack>
        )
    }

    return (
        userExists ? (
                <InfoScreen title={t("app.welcomeBack.header")} hideNextButton={true}>
                    <VStack gap={7}>
                        <VStack gap={3} sx={styles.infoBox}>
                            <Typography sx={styles.infoText}>
                                {t("app.welcomeBack.text")}
                            </Typography>
                            <DynamicStacker>
                                <HStack>
                                    <Button variant="text"
                                            sx={{
                                                fontSize: '16px',
                                                color: 'black',
                                                fontWeight: 'bold',
                                                textTransform: 'none',
                                                padding: '12px',
                                                borderRadius: '12px',
                                                backgroundColor: 'white',
                                                borderStyle: 'solid',
                                                borderWidth: '1px',
                                                borderColor: globalStyles.primaryColor,
                                                '&:hover': {
                                                    backgroundColor: globalStyles.primaryColor,
                                                },
                                            }}
                                            onClick={continueWithExisting}
                                    >
                                        <HStack alignItems={'center'}>
                                            <VStack gap={1} alignItems={'flex-start'} sx={{width: '70%'}}>
                                                <Typography sx={{fontWeight: 'bold', fontSize: '24px'}}>
                                                    {t("app.welcomeBack.yesBtnTitle")}
                                                </Typography>
                                                <Typography sx={{textAlign: 'left'}}>
                                                    {t("app.welcomeBack.yesBtnText")}
                                                </Typography>
                                            </VStack>
                                            <ArrowForwardIcon sx={{color: 'black', fontSize: 30, flex: 1}}/>
                                        </HStack>
                                    </Button>
                                </HStack>
                                <HStack>
                                    <Button variant="text"
                                            sx={{
                                                fontSize: '16px',
                                                color: 'black',
                                                fontWeight: 'bold',
                                                textTransform: 'none',
                                                padding: '12px',
                                                borderRadius: '12px',
                                                backgroundColor: 'white',
                                                borderStyle: 'solid',
                                                borderWidth: '1px',
                                                borderColor: globalStyles.primaryColor,
                                                '&:hover': {
                                                    backgroundColor: globalStyles.primaryColor,
                                                },
                                            }}
                                            onClick={startOver}
                                    >
                                        <HStack alignItems={'center'}>
                                            <VStack gap={1} alignItems={'flex-start'} sx={{width: '70%'}}>
                                                <Typography sx={{fontWeight: 'bold', fontSize: '24px'}}>
                                                    {t("app.welcomeBack.noBtnTitle")}
                                                </Typography>
                                                <Typography sx={{textAlign: 'left'}}>
                                                    {t("app.welcomeBack.noBtnText")}
                                                </Typography>
                                            </VStack>
                                            <ReplayIcon sx={{color: 'black', fontSize: 30, flex: 1}}/>
                                        </HStack>
                                    </Button>
                                </HStack>
                            </DynamicStacker>
                        </VStack>
                        <HStack>
                            <HStack gap={3}>
                                <Button variant="text"
                                        sx={{
                                            fontSize: '10px',
                                            padding: '8px',
                                            color: globalStyles.colorDarkGrey,
                                            textTransform: 'none',
                                            borderRadius: '12px',
                                            borderWidth: '1px',
                                            borderStyle: 'solid',
                                            borderColor: globalStyles.colorDarkGrey,
                                            backgroundColor: 'white',
                                            '&:hover': {
                                                backgroundColor: globalStyles.primaryColor,
                                            },
                                        }}
                                        startIcon={<FileDownloadIcon sx={{color: globalStyles.colorDarkGrey}}/>}
                                        onClick={exportProfile}
                                >{t("app.welcomeBack.exportBtn")}</Button>
                                <Button variant="text"
                                        sx={{
                                            fontSize: '10px',
                                            color: globalStyles.colorDarkGrey,
                                            textTransform: 'none',
                                            padding: '8px',
                                            borderRadius: '12px',
                                            borderWidth: '1px',
                                            borderStyle: 'solid',
                                            borderColor: globalStyles.colorDarkGrey,
                                            backgroundColor: 'white',
                                            '&:hover': {
                                                backgroundColor: globalStyles.primaryColor,
                                            },
                                        }}
                                        startIcon={<DeleteIcon sx={{color: globalStyles.colorDarkGrey}}/>}
                                        onClick={deleteProfile}
                                >{t("app.welcomeBack.deleteBtn")}</Button>
                            </HStack>
                        </HStack>
                    </VStack>
                </InfoScreen>
            ) :
            (
                <>
                    <InfoScreen title="New or existing user">
                        No existing user found, redirecting to first time user screen...
                    </InfoScreen>
                </>
            )
    )
        ;
}

const styles = {
    infoText: {
        fontSize: '20px',
        textAlign: 'left',
    },
    infoBox: {
        width: '100%',
    },
}

export default InfoScreenNewOrExistingUser;
