import React, {useEffect, useState} from 'react';
import {Button, Typography} from '@mui/material';
import useInitializeQuickCheckUser from "./hooks/useInitializeQuickCheckUser";
import useInitializeProfileSectionStore from "./hooks/useInitializeProfileSectionStore";
import {useSelectedTopicsStore} from "../../storage/zustand";
import OnboardingWelcomeScreen from "./components/OnboardingWelcomeScreen";
import VStack from "../../components/VStack";
import globalStyles from "../../styles/styles";
import readJson from "../../utilities/readJson";


const topicColors = [
    [globalStyles.colorAmberOrange, globalStyles.colorAmberOrangeTransparent],
    [globalStyles.colorTangerineOrange, globalStyles.colorTangerineOrangeTransparent],
    [globalStyles.colorCoralRed, globalStyles.colorCoralRedTransparent],
    [globalStyles.colorPlumPurple, globalStyles.colorPlumPurpleTransparent],
    [globalStyles.colorMauvePurple, globalStyles.colorMauvePurpleTransparent],
    [globalStyles.colorSteelBlue, globalStyles.colorSteelBlueTransparent],
    [globalStyles.colorDeepTeal, globalStyles.colorDeepTealTransparent],
    [globalStyles.colorPineGreen, globalStyles.colorPineGreenTransparent]
];

const OnboardingWelcomeTopics = () => {
    const [topicsData, setTopicsData] = useState([]);
    const [selectedTopics, setSelectedTopics] = useState(new Array(topicsData.length).fill(false));
    const selectedTopicsStore = useSelectedTopicsStore((state) => state.selectedTopics);
    const addSelectedTopic = useSelectedTopicsStore((state) => state.addSelectedTopic);
    const removeSelectedTopic = useSelectedTopicsStore((state) => state.removeSelectedTopic);

    const entityData = useInitializeQuickCheckUser();
    const profileSection = 'quick-check-profile';
    useInitializeProfileSectionStore(profileSection, entityData);


    useEffect(() => {
        const fetchData = async () => {
            const filePath = `assets/data/topics/topics-list.json`
            try {
                const newTopicsData = await readJson(filePath);
                setTopicsData(newTopicsData);
            } catch (error) {
                console.error('Failed to fetch profile input screen data:', error);
            }
        };

        fetchData();
    }, []);


    const handleButtonClick = (index) => {
        const newSelectedTopics = [...selectedTopics];
        newSelectedTopics[index] = !newSelectedTopics[index];
        setSelectedTopics(newSelectedTopics);
        if (newSelectedTopics[index]) {
            addSelectedTopic(topicsData[index].id);
        } else {
            removeSelectedTopic(topicsData[index].id);
        }
    };

    console.log('selected Topics', selectedTopicsStore);

    return (
        <OnboardingWelcomeScreen buttonText={'Confirm'} link={`/onboarding-welcome`}>
            <Typography variant="body1" gutterBottom sx={styles.titleText}>
                Which topic/s are you interested in exploring benefits for?
            </Typography>
            <VStack alignItems={'center'}>
                {topicsData.map((topic, index) => (
                    <Button
                        key={index}
                        onClick={() => handleButtonClick(index)}
                        sx={{
                            ...styles.topicItemButton,
                            backgroundColor: selectedTopics[index] ? topicColors[index][0] : topicColors[index][1],
                            '&:hover': {
                                backgroundColor: selectedTopics[index] ? topicColors[index][0] : topicColors[index][1],
                            },
                            '&:active': {
                                backgroundColor: selectedTopics[index] ? topicColors[index][0] : topicColors[index][1],
                            },
                            '&:focus': {
                                backgroundColor: selectedTopics[index] ? topicColors[index][0] : topicColors[index][1],
                            },
                        }}>
                        <Typography sx={{
                            ...styles.topicText,
                            color: selectedTopics[index] ? 'white' : 'black'
                        }}>
                            {topic.title}
                        </Typography>
                    </Button>))}
            </VStack>
        </OnboardingWelcomeScreen>
    );
};

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
    }
};

export default OnboardingWelcomeTopics;
