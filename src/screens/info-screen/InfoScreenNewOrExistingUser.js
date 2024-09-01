import React, {useCallback, useEffect, useState} from "react";
import InfoScreen from "./components/InfoScreen";
import {useNavigate} from "react-router-dom";
import {useSelectedTopicsStore, useUserStore, useValidationReportStore} from "../../storage/zustand";
import {useProfileSectionStore} from "../../storage/useProfileSectionStore";
import {UserModel} from "../../models/UserModel";
import {runValidation} from "../../services/validationService";
import {convertUserProfileToTurtle} from "@foerderfunke/matching-engine/src/utils";
import dayjs from "dayjs";
import VStack from "../../components/VStack";
import {Button, Typography} from "@mui/material";
import globalStyles from "../../styles/styles";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import DeleteIcon from '@mui/icons-material/Delete';
import HStack from "../../components/HStack";

const InfoScreenNewOrExistingUser = () => {
    const updateUserId = useUserStore((state) => state.updateUserId);
    const defaultUserId = "ff:quick-check-user";
    const initializeSectionStore = useProfileSectionStore((state) => state.initializeSectionStore);
    const navigate = useNavigate();
    const [userExists, setUserExists] = useState(false);

    const initStores = useCallback(() => {
        updateUserId(defaultUserId);
        let entityData = {
            id: defaultUserId,
            type: "ff:Citizen"
        };
        const newSectionStore = {
            entityData: entityData,
            nestedSection: null,
        };
        initializeSectionStore(newSectionStore);
    }, [updateUserId, defaultUserId, initializeSectionStore]);

    const initNewUser = useCallback(() => {
        UserModel.initialiseNewUser(defaultUserId);
        initStores();
        runValidation(defaultUserId);
        navigate('/info-privacy');
    }, [defaultUserId, navigate, initStores]);

    useEffect(() => {
        const userIds = JSON.parse(localStorage.getItem('userIds') || '[]');
        if (userIds.length === 0) {
            initNewUser();
        } else {
            setUserExists(true);
        }
    }, [navigate, userExists, initNewUser]);

    const exportProfile = async () => {
        const userProfile = UserModel.retrieveUserData(defaultUserId);
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
        runValidation(defaultUserId);
        navigate('/onboarding-choice');
    }

    const startOver = async () => {
        localStorage.clear();
        useValidationReportStore.getState().clear();
        useSelectedTopicsStore.getState().clear();
        initNewUser();
    }

    const deleteProfile = () => {
        localStorage.clear();
        window.location.href = '/';
    }

    return (
        userExists ? (
                <InfoScreen title="Welcome back" hideNextButton={true}>
                    <VStack gap={7}>
                        <VStack gap={3} sx={styles.infoBox}>
                            <Typography sx={styles.infoText}>
                                We found a profile in the local storage of your browser. Do you want to continue using it?
                            </Typography>
                            <VStack>
                                <Button variant="text"
                                        sx={{
                                            width: '100%',
                                            fontSize: '16px',
                                            color: 'black',
                                            fontWeight: 'bold',
                                            textTransform: 'none',
                                            padding: '12px',
                                            borderRadius: '12px',
                                            backgroundColor: globalStyles.secondaryColorTransparent
                                        }}
                                        onClick={continueWithExisting}
                                >
                                    <VStack>
                                        <Typography sx={{fontWeight: 'bold'}}>Yes</Typography>
                                        <Typography>You can continue exploring with your profile</Typography>
                                    </VStack>
                                </Button>
                                <Button variant="text"
                                        sx={{
                                            width: '100%',
                                            fontSize: '16px',
                                            color: 'black',
                                            fontWeight: 'bold',
                                            textTransform: 'none',
                                            padding: '12px',
                                            borderRadius: '12px',
                                            backgroundColor: globalStyles.primaryColorTransparent
                                        }}
                                        onClick={startOver}
                                >
                                    <VStack>
                                        <Typography sx={{fontWeight: 'bold'}}>No</Typography>
                                        <Typography>You will start the journey with a new profile</Typography>
                                    </VStack>
                                </Button>
                            </VStack>
                        </VStack>
                        <HStack justifyContent={'center'}>
                            <VStack gap={1} sx={styles.optionsBox} alignItems={'center'}>
                                <Typography sx={styles.optionsText}>
                                    You have some more options:
                                </Typography>
                                <VStack gap={1}>
                                    <Button variant="text"
                                            sx={{
                                                fontSize: '12px',
                                                padding: '8px',
                                                color: globalStyles.colorDarkGrey,
                                                textTransform: 'none',
                                                borderRadius: '12px',
                                            }}
                                            startIcon={<FileDownloadIcon sx={{color: globalStyles.colorDarkGrey}}/>}
                                            onClick={exportProfile}
                                    >Export your profile</Button>
                                    <Button variant="text"
                                            sx={{
                                                fontSize: '12px',
                                                color: globalStyles.colorDarkGrey,
                                                textTransform: 'none',
                                                padding: '8px',
                                                borderRadius: '12px',
                                            }}
                                            startIcon={<DeleteIcon sx={{color: globalStyles.colorDarkGrey}}/>}
                                            onClick={deleteProfile}
                                    >Delete your profile</Button>
                                </VStack>
                            </VStack>
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
    optionsText: {
        fontSize: '16px',
    },
    optionsBox: {
        backgroundColor: '#F5F5F5',
        borderRadius: '12px',
        padding: '16px',
    },
    list: {
        listStyleType: 'disc',
    }
}

export default InfoScreenNewOrExistingUser;
