import React, {useEffect, useState} from 'react';
import {Button, Checkbox, FormControlLabel, Typography} from '@mui/material';
import {useSelectedTopicsStore} from "../../storage/zustand";
import useFetchData from "../../services/fetchResourceService";
import OnboardingWelcomeScreen from "./components/OnboardingWelcomeScreen";
import VStack from "../../components/VStack";
import globalStyles from "../../styles/styles";
import useTopicSelectionHandlers from "./hooks/useTopicSelectionHandlers";

const OnboardingWelcomeTopics = () => {
    const [topicsData, setTopicsData] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [selectedTopicsBoolean, setSelectedTopicsBoolean] = useState([]);
    const selectedTopics = useSelectedTopicsStore((state) => state.selectedTopics);

    // fetch local resource
    useFetchData('assets/data/topics/topics-list.json', setTopicsData, setLoaded);
    useEffect(() => {
        if (loaded) {
            setSelectedTopicsBoolean(Array(topicsData.length).fill(false));
        }
    }, [loaded, topicsData]);

    // Update selected topics boolean array when selected topics change
    useEffect(() => {
        if (selectedTopicsBoolean.length > 0 && selectedTopics.length > 0) {
            const newSelectedTopicsBoolean = topicsData.map(topic =>
                selectedTopics.some(selectedTopic => selectedTopic.id === topic.id)
            );
            setSelectedTopicsBoolean(newSelectedTopicsBoolean);
        }
    }, [topicsData, selectedTopics, selectedTopicsBoolean.length]);

    const {handleButtonClick, handleToggleSelectAll} = useTopicSelectionHandlers(
        topicsData,
        selectedTopicsBoolean,
        setSelectedTopicsBoolean
    );

    return (
        <OnboardingWelcomeScreen buttonText={'Confirm'} link={`/onboarding-welcome`}>
            <Typography variant="body1" gutterBottom sx={styles.titleText}>
                Which topic/s are you interested in exploring benefits for?
            </Typography>
            <VStack alignItems={'center'}>
                {topicsData.map((topic, index) => (
                    <Button
                        key={index}
                        onClick={() => handleButtonClick(topic, index)}
                        sx={{
                            ...styles.topicItemButton,
                            backgroundColor: selectedTopicsBoolean[index] ? globalStyles.primaryColor : globalStyles.colorDarkGreyTransparent,
                            '&:hover': {
                                backgroundColor: selectedTopicsBoolean[index] ? globalStyles.primaryColor : globalStyles.colorDarkGreyTransparent,
                            },
                            '&:active': {
                                backgroundColor: selectedTopicsBoolean[index] ? globalStyles.primaryColor : globalStyles.colorDarkGreyTransparent,
                            },
                            '&:focus': {
                                backgroundColor: selectedTopicsBoolean[index] ? globalStyles.primaryColor : globalStyles.colorDarkGreyTransparent,
                            },
                        }}>
                        <Typography sx={styles.topicText}>
                            {topic.title}
                        </Typography>
                    </Button>))}
                <FormControlLabel control={<Checkbox onChange={handleToggleSelectAll}/>} label="Select all"/>
            </VStack>
        </OnboardingWelcomeScreen>
    );
}

const styles = {
    titleText: {
        fontSize: '28px',
        fontWeight: 'bold'
    },
    topicItemButton: {
        width: '100%',
        borderRadius: '12px',
        padding: '8px',
        '&:hover': {
            backgroundColor: 'inherit',
        },
        '&:active': {
            backgroundColor: 'inherit',
        },
        '&:focus': {
            backgroundColor: 'inherit',
        },
    },
    topicText: {
        fontSize: '16px',
        fontWeight: 'bold',
        textAlign: 'left',
        textTransform: 'none',
        color: 'black',
    },
    selectText: {
        fontSize: '15px',
        color: 'gray',
    }
};

export default OnboardingWelcomeTopics;
