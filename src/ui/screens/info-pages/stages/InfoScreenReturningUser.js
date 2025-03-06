import React from "react";
import dayjs from "dayjs";
import { Typography } from "@mui/material";
import Layout from "../../../shared-components/Layout";
import AppScreenWrapper from "../../../shared-components/AppScreenWrapper";
import { VBox } from "../../../shared-components/LayoutBoxes";
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
import UserListEntry from "../components/UserListEntry";


const InfoScreenReturningUser = () => {
    const { t } = useTranslation();
    const existingUserIds = userManager.retrieveUserIds();
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

    console.log(existingUserIds);

    return (
        <Layout isApp={true} logo={false}>
            <AppScreenWrapper home={true}>
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
                        <VBox sx={{ gap: theme.spacing(2) }}>
                        {
                                existingUserIds.map((userId, index) => {
                                    return (
                                        <UserListEntry key={index} userId={userId} />
                                    )
                                })
                            }
                        </VBox>                    
                    </VBox>
                </VBox>
            </AppScreenWrapper >
        </Layout >
    );
}

export default InfoScreenReturningUser;
