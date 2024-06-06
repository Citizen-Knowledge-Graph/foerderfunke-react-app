import React from 'react';
import VStack from '../../../components/VStack'
import OnboardingSectionsItem from "./OnboardingSectionsItem";
import {Typography} from "@mui/material";
import {useProfileInputSectionStore} from "../../../storage/zustand";

const OnboardingSectionsList = ({onboardingSectionsData}) => {
    const activeSection = useProfileInputSectionStore(
        (state) => state.activeSection
    );

    return (
        <VStack gap={3} sx={{width: 'inherit'}}>
            <VStack gap={2}>
                <Typography variant="h6" gutterBottom sx={styles.titleText}>
                    Profilbereiche
                </Typography>
            </VStack>
            {onboardingSectionsData.personalisedData.map((section, index) => (
                <OnboardingSectionsItem key={section.id} section={section} active={section.id === activeSection}
                                        first={index === 0}/>
                ))}
        </VStack>
    );
}

const styles = {
    titleText: {
        fontWeight: 'bold', // Make text bold
    },
}

export default OnboardingSectionsList;
