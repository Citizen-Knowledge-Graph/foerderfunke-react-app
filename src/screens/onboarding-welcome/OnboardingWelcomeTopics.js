import React, {useContext, useEffect, useState} from 'react';
import {Button, Checkbox, FormControlLabel, Typography} from '@mui/material';
import {useSelectedTopicsStore} from "../../storage/zustand";
import useFetchData from "../../services/fetchResourceService";
import OnboardingWelcomeScreen from "./components/OnboardingWelcomeScreen";
import VStack from "../../components/VStack";
import globalStyles from "../../styles/styles";
import useTopicSelectionHandlers from "./hooks/useTopicSelectionHandlers";
import useTranslation from "../../language/useTranslation";
import {LanguageContext} from "../../language/LanguageContext";

const OnboardingWelcomeTopics = () => {
    const { t } = useTranslation();
    const { language } = useContext(LanguageContext);
    const [topicsData, setTopicsData] = useState([]);
    const [selectedTopicsBoolean, setSelectedTopicsBoolean] = useState([]);
    const selectedTopics = useSelectedTopicsStore((state) => state.selectedTopics);

    // runs on mount
    useFetchData('assets/data/topics/topics-list.json', setTopicsData);

    // runs on mount and when selectedTopics changes
    useEffect(() => {
        if (topicsData.length > 0) {
            const newSelectedTopicsBoolean = topicsData.map(topic =>
                selectedTopics.some(selectedTopic => selectedTopic.id === topic.id)
            );
            setSelectedTopicsBoolean(newSelectedTopicsBoolean);
        }
    }, [topicsData, selectedTopics, setSelectedTopicsBoolean]);

    // handlers
    const {handleButtonClick, handleToggleSelectAll} = useTopicSelectionHandlers(
        topicsData,
        selectedTopicsBoolean,
        setSelectedTopicsBoolean
    );

    return (
        <OnboardingWelcomeScreen buttonText={t('app.topicSelection.confirmBtn')} link={`/onboarding-welcome`}>
            <Typography variant="body1" gutterBottom sx={styles.titleText}>
                {t('app.topicSelection.text')}
            </Typography>
            {
                setSelectedTopicsBoolean.length > 0 && (
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
                                    {language === "de" ? topic.title.de : topic.title.en}
                                </Typography>
                            </Button>))}
                        <FormControlLabel control={<Checkbox onChange={handleToggleSelectAll}/>} label={t('app.topicSelection.selectAll')}/>
                    </VStack>
                )
            }
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
    }
};

export default OnboardingWelcomeTopics;
