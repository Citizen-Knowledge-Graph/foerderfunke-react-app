import React from 'react';
import {Typography} from '@mui/material';
import useInitializeQuestionsArray from "./hooks/useInitializeQuestionsArray";
import VStack from "../../components/VStack";
import OnboardingWelcomeScreen from "./components/OnboardingWelcomeScreen";
import {useMetadataStore, useSelectedTopicsStore} from "../../storage/zustand";

const OnboardingWelcomeOverview = () => {
    const selectedTopics = useSelectedTopicsStore((state) => state.selectedTopics);
    const metadata = useMetadataStore((state) => state.metadata);

    // hooks
    const isLoading = useInitializeQuestionsArray();

    const listRPsForTopic = (topic) => {
        const topicUri = "https://foerderfunke.org/default#" + topic.id.split(":")[1];
        const rps = Object.values(metadata.rp).filter(rp => rp.categories.includes(topicUri));
        return (
            <ul style={{marginTop: -8}}>
                {rps.map((rp, index) => (
                    <li key={index}>{rp.title}</li>
                ))}
            </ul>
        );
    };

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
                            {listRPsForTopic(topic)}
                        </VStack>
                    ))}
                </VStack>
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
