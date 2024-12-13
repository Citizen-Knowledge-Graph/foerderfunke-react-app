import React, {useContext, useEffect, useState} from 'react';
import {Button, Checkbox, FormControlLabel, Typography} from '@mui/material';
import {useSelectedBenefitStore, useSelectedTopicsStore} from "../../storage/zustand";
import OnboardingWelcomeScreen from "./components/OnboardingWelcomeScreen";
import VStack from "../../shared-components/VStack";
import globalStyles from "../../styles/styles";
import useTopicSelectionHandlers from "./hooks/useTopicSelectionHandlers";
import useTranslation from "../../language/useTranslation";
import {LanguageContext} from "../../language/LanguageContext";
import {useStore} from "../../shared-components/ViewportUpdater";
import useFetchData from "../../shared-hooks/useFetchData";

const OnboardingWelcomeTopics = () => {
    const { t } = useTranslation();
    const isDesktop = useStore((state) => state.isDesktop);
    const { language } = useContext(LanguageContext);
    const [selectedTopicsBoolean, setSelectedTopicsBoolean] = useState([]);
    const selectedTopics = useSelectedTopicsStore((state) => state.selectedTopics);
    const clearSelectedBenefit = useSelectedBenefitStore((state) => state.clear);

    const topicsData = useFetchData('assets/data/topics/topics-list.json')
    clearSelectedBenefit()

    useEffect(() => {
        if (topicsData?.length > 0) {
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
                    <VStack alignItems={'center'} sx={isDesktop ? styles.gridContainer : styles.singleColumnContainer}>
                        {topicsData.map((topic, index) => (
                            <Button
                                key={index}
                                onClick={() => handleButtonClick(topic, index)}
                                sx={{
                                    ...styles.topicItemButton,
                                    backgroundColor: selectedTopicsBoolean[index] && globalStyles.primaryColor,
                                    '&:active': {
                                        backgroundColor: selectedTopicsBoolean[index] && globalStyles.primaryColor,
                                    },
                                    '&:focus': {
                                        backgroundColor: selectedTopicsBoolean[index] && globalStyles.primaryColor,
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
        borderRadius: '4px',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: globalStyles.primaryColor,
        padding: '16px',
        '&:hover': {
            backgroundColor: globalStyles.primaryColor,
        },
    },
    topicText: {
        fontSize: '16px',
        fontWeight: 'bold',
        textAlign: 'left',
        textTransform: 'none',
        color: 'black',
    },
    gridContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        width: '100%',
    },
    singleColumnContainer: {
        width: '100%',
    }
};

export default OnboardingWelcomeTopics;
