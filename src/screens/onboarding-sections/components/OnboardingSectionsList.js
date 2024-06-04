import React from 'react';
import VStack from '../../../components/VStack'
import OnboardingSectionsItem from "./OnboardingSectionsItem";
import {Typography} from "@mui/material";

const styles = {
    titleText: {
        fontWeight: 'bold', // Make text bold
    },
}

const OnboardingSectionsList = ({onboardingSectionsData}) => {
    return (
        <VStack gap={3} sx={{width: 'inherit'}}>
            <VStack gap={2}>
                <Typography variant="h6" gutterBottom sx={styles.titleText}>
                    Profilbereiche
                </Typography>
            </VStack>
            {onboardingSectionsData.personalisedData.map((section) => (
                <OnboardingSectionsItem key={section.id} section={section} />
            ))}
        </VStack>
    );
}

export default OnboardingSectionsList;
