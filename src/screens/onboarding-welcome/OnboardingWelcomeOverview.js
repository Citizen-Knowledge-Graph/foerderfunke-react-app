import React from 'react';
import {Typography} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import useInitializeQuickCheckUser from "./hooks/useInitializeQuickCheckUser";
import useInitializeProfileSectionStore from "./hooks/useInitializeProfileSectionStore";
import VStack from "../../components/VStack";
import OnboardingWelcomeScreen from "./components/OnboardingWelcomeScreen";
import HStack from "../../components/HStack";

const benefitsList = [
    {
        "topic": "Services for Families",
        "benefits": [
            "Child Benefit",
            "Child Care Benefit",
        ]
    },
    {
        "topic": "Housing",
        "benefits": [
            "Housing Benefit",
            "Rent Subsidy",
        ]
    }
];

const OnboardingWelcomeOverview = () => {
    const entityData = useInitializeQuickCheckUser();
    const profileSection = 'quick-check-profile';
    useInitializeProfileSectionStore(profileSection, entityData);

    return (
        <OnboardingWelcomeScreen buttonText={'Discover your benefits'} link={`/profile-section/${profileSection}`}>
            <VStack gap={3}>
                <Typography variant="body1" gutterBottom sx={styles.subTitleText}>
                    Based on your chosen topics we will provide you with a list of benefits you may be eligible for.
                </Typography>
                <VStack alignItems={'flex-start'}>
                    {benefitsList.map((benefit, index) => (
                        <VStack key={index} gap={2} alignItems={'flex-start'}>
                            <Typography variant="h6" sx={styles.listHeader}>
                                {benefit.topic}
                            </Typography>
                            <VStack gap={1} alignItems={'flex-start'}>
                                {benefit.benefits.map((benefit, index) => (
                                    <HStack key={index} gap={1} alignItems={'center'}>
                                        <CircleIcon sx={{
                                            width: '8px',
                                            height: '8px',
                                        }}/>
                                        <Typography key={index} variant="body1" sx={styles.listItem}>
                                            {benefit}
                                        </Typography>
                                    </HStack>
                                ))}
                            </VStack>
                        </VStack>
                    ))}
                </VStack>
                <Typography variant="body1" gutterBottom sx={styles.subTitleText}>
                    The quick check does not include a check for all benefits in the selected topics to keep it quick.
                </Typography>
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
