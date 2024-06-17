import React from 'react';
import VStack from '../../../components/VStack'
import OnboardingSectionsItem from "./OnboardingSectionsItem";
import {Typography} from "@mui/material";
import {useProfileInputSectionStore, useUserStore} from "../../../storage/zustand";
import useInitializeEntityData from "../hooks/useInitializeEntityData";

const OnboardingSectionsList = ({onboardingSectionsData}) => {
    const userId = useUserStore((state) => state.activeUserId);
    const entityData = useInitializeEntityData(userId);
    const activeSection = useProfileInputSectionStore(
        (state) => state.activeSection
    );
    const sections = useProfileInputSectionStore((state) => state.sections);

    return (
        <VStack gap={3} sx={{width: 'inherit'}}>
            <VStack gap={2}>
                <Typography variant="h6" gutterBottom sx={styles.titleText}>
                    Profilbereiche
                </Typography>
            </VStack>
            {onboardingSectionsData.sections.map((section, index) => {
                const sectionStatus = sections.find((obj) => obj.id === section.id);
                return (
                    <OnboardingSectionsItem key={section.id}
                                            section={section}
                                            entityData={entityData}
                                            active={section.id === activeSection}
                                            completed={sectionStatus.completed}/>
                )
            })}
        </VStack>
    );
}

const styles = {
    titleText: {
        fontWeight: 'bold', // Make text bold
    },
}

export default OnboardingSectionsList;
