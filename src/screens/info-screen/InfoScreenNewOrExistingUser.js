import React, {useEffect} from "react";
import InfoScreen from "./components/InfoScreen";
import useInitializeQuickCheckUser from "../onboarding-welcome/hooks/useInitializeQuickCheckUser";
import useInitializeProfileSectionStore from "../onboarding-welcome/hooks/useInitializeProfileSectionStore";
import {useNavigate} from "react-router-dom";
import AppValidation from "../../AppValidation";

const InfoScreenNewOrExistingUser = () => {
    const entityData = useInitializeQuickCheckUser();
    useInitializeProfileSectionStore(entityData);
    const navigate = useNavigate();
    const existingUserFound = false; // TODO

    useEffect(() => {
        navigate('/info-privacy');
    }, [entityData, navigate]);

    return (
        existingUserFound ? (
            <InfoScreen title="New or existing user">
                --> Existing
            </InfoScreen>
        ) : (
            <>
                <InfoScreen title="New or existing user">
                    --> New
                </InfoScreen>
                <AppValidation />
            </>
        )
    );
}

export default InfoScreenNewOrExistingUser;
