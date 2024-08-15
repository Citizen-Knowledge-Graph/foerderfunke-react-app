import React, {useState} from 'react';
import {Button, Typography} from '@mui/material';
import useInitializeQuickCheckUser from "./hooks/useInitializeQuickCheckUser";
import useInitializeProfileSectionStore from "./hooks/useInitializeProfileSectionStore";
import OnboardingWelcomeScreen from "./components/OnboardingWelcomeScreen";
import VStack from "../../components/VStack";
import globalStyles from "../../styles/styles";

const topicsList = [
    ["Services for Families", globalStyles.colorAmberOrange, globalStyles.colorAmberOrangeTransparent],
    ["Unemployment & Job Search", globalStyles.colorTangerineOrange, globalStyles.colorTangerineOrangeTransparent],
    ["Aging & Retirement", globalStyles.colorCoralRed, globalStyles.colorCoralRedTransparent],
    ["Health & Care", globalStyles.colorPlumPurple, globalStyles.colorPlumPurpleTransparent],
    ["Housing", globalStyles.colorMauvePurple, globalStyles.colorMauvePurpleTransparent],
    ["School, Studies, Vocational Training", globalStyles.colorSteelBlue, globalStyles.colorSteelBlueTransparent],
    ["Social & Basic Welfare", globalStyles.colorDeepTeal, globalStyles.colorDeepTealTransparent],
    ["All", globalStyles.colorPineGreen, globalStyles.colorPineGreenTransparent]
];

const OnboardingWelcomeTopics = () => {
    const [selectedTopics, setSelectedTopics] = useState(new Array(topicsList.length).fill(false));

    const entityData = useInitializeQuickCheckUser();
    const profileSection = 'quick-check-profile';
    useInitializeProfileSectionStore(profileSection, entityData);

    const handleButtonClick = (index) => {
        const newSelectedTopics = [...selectedTopics];
        newSelectedTopics[index] = !newSelectedTopics[index];
        setSelectedTopics(newSelectedTopics);
    };

    return (
        <OnboardingWelcomeScreen buttonText={'Confirm'} link={`/onboarding-welcome`}>
            <Typography variant="body1" gutterBottom sx={styles.titleText}>
                Which topic/s are you interested in exploring benefits for?
            </Typography>
            <VStack alignItems={'center'}>
                {topicsList.map((topic, index) => (
                    <Button
                        key={index}
                        onClick={() => handleButtonClick(index)}
                        sx={{
                            ...styles.topicItemButton,
                            backgroundColor: selectedTopics[index] ? topic[1] : topic[2],
                            '&:hover': {
                                backgroundColor: selectedTopics[index] ? topic[1] : topic[2],
                            },
                            '&:active': {
                                backgroundColor: selectedTopics[index] ? topic[1] : topic[2],
                            },
                            '&:focus': {
                                backgroundColor: selectedTopics[index] ? topic[1] : topic[2],
                            },
                        }}>
                        <Typography sx={{
                            ...styles.topicText,
                            color: selectedTopics[index] ? 'white' : 'black'
                        }}>
                            {topic[0]}
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
