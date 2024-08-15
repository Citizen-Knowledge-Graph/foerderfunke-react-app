import React from 'react';
import {Typography} from '@mui/material';
import useInitializeQuickCheckUser from "./hooks/useInitializeQuickCheckUser";
import useInitializeProfileSectionStore from "./hooks/useInitializeProfileSectionStore";
import VStack from "../../components/VStack";
import TextList from "../../components/TextList";
import OnboardingWelcomeScreen from "./components/OnboardingWelcomeScreen";

const benefitsList = [
    "Healthcare Assistance",
    "Childcare Support",
    "Unemployment Benefits",
    "Education Grants",
    "Housing Assistance",
    "..."
];

const OnboardingWelcomeOverview = () => {
    const entityData = useInitializeQuickCheckUser();
    const profileSection = 'quick-check-profile';
    useInitializeProfileSectionStore(profileSection, entityData);

    return (
        <OnboardingWelcomeScreen buttonText={'Discover your benefits'} link={`/profile-section/${profileSection}`}>
            <Typography variant="body1" gutterBottom sx={styles.subTitleText}>
                Answer some questions about you and find out to which benefits you might be eligible to. Our
                benefits catalogue covers a range of topics.
            </Typography>
            <VStack gap={0} sx={styles.container}>
                <Typography variant="body1" gutterBottom sx={styles.listHeader}>
                    The quick check will include the following:
                </Typography>
                <TextList items={benefitsList}/>
            </VStack>
        </OnboardingWelcomeScreen>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        textAlign: 'left',
    },
    subTitleText: {
        fontSize: '16px',
        fontWeight: '400'
    },
    listHeader: {
        fontSize: '16px',
        fontWeight: 'bold',
    }
};

export default OnboardingWelcomeOverview;
