import React, {useCallback, useEffect, useState} from "react";
import InfoScreen from "./components/InfoScreen";
import {useNavigate} from "react-router-dom";
import {useUserStore, useValidationReportStore} from "../../storage/zustand";
import {useProfileSectionStore} from "../../storage/useProfileSectionStore";
import {UserModel} from "../../models/UserModel";
import {runValidation} from "../../services/validationService";

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

    const continueWithExisting = () => {
        initStores();
        runValidation(defaultUserId);
        navigate('/onboarding-choice');
    }

    const startOver = async () => {
        localStorage.clear();
        useValidationReportStore.getState().clear();
        initNewUser();
    }

    return (
        userExists ? (
            <InfoScreen title="New or existing user">
                <h3>Oh, hey there!</h3>
                <div>We found a profile in the local storage of your browser. We will continue using this unless you want to start from scratch.</div>

                <small>Export profile</small>

                <div onClick={continueWithExisting}>Continue with existing profile --></div>
                <div onClick={startOver}>Delete existing and continue with a new one --></div>
            </InfoScreen>
        ) : (
            <>
                <InfoScreen title="New or existing user">
                    No existing user found, redirecting to first time user screen...
                </InfoScreen>
            </>
        )
    );
}

export default InfoScreenNewOrExistingUser;
