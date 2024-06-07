import React from 'react';
import ProfileCompletedPieChart from "./ProfileCompletedPieChart";
import {useProfileInputSectionStore} from "../../../storage/zustand";
import VStack from "../../../components/VStack";
import HStack from "../../../components/HStack";
import {Typography} from "@mui/material";

const ProfileSectionCompleted = () => {
    const onboardingSectionsState = useProfileInputSectionStore(
        (state) => state.sections
    );
    console.log("onboardingSectionsState: ", onboardingSectionsState)
    const completedSections = onboardingSectionsState.reduce((acc, section) => {
        return section.completed ? acc + 1 : acc;
    }, 0);
    const totalSections = onboardingSectionsState.length;

    return (
        <VStack justifyContent={'center'}>
            <ProfileCompletedPieChart completedSections={completedSections} totalSections={totalSections}/>
            <HStack justifyContent={'center'} sx={{width: "100%"}}>
                <VStack gap={1} alignItems={'center'}>
                <Typography variant="h4">About you</Typography>
                <Typography variant="h6">Profilbereich vollständig!</Typography>
                    </VStack>
            </HStack>
        </VStack>
    );
};

export default ProfileSectionCompleted;
