import React from 'react';
import {Typography} from '@mui/material';
import useInitializeQuestionsArray from "./hooks/useInitializeQuestionsArray";
import VStack from "../../components/VStack";
import OnboardingWelcomeScreen from "./components/OnboardingWelcomeScreen";
import { useSelectedTopicsStore} from "../../storage/zustand";

const OnboardingWelcomeOverview = () => {
    const selectedTopics = useSelectedTopicsStore((state) => state.selectedTopics);

    // hooks
    const isLoading = useInitializeQuestionsArray();

    return (
        <OnboardingWelcomeScreen buttonText={'Discover your benefits'} link={`/profile-section`} isLoading={isLoading}>
            <VStack gap={3}>
                <Typography variant="body1" gutterBottom sx={styles.subTitleText}>
                    Based on your chosen topics we will provide you with a list of benefits you may be eligible for.
                </Typography>
                <VStack alignItems={'flex-start'}>
                    {selectedTopics.map((topic, index) => (
                        <VStack key={index} gap={2} alignItems={'flex-start'}>
                            <Typography variant="h6" sx={styles.listHeader}>
                                {topic.title}
                            </Typography>
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
