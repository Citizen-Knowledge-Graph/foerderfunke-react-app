import React, {useContext, useEffect, useState} from 'react';
import {Typography} from '@mui/material';
import VStack from "../../shared-components/VStack";
import OnboardingWelcomeScreen from "./components/OnboardingWelcomeScreen";
import {useMetadataStore, useSelectedTopicsStore, useUserStore} from "../../storage/zustand";
import {useNavigate, useParams} from "react-router-dom";
import questionsService from "../../../core/services/questionsService";
import useTranslation from "../../language/useTranslation";
import {LanguageContext} from "../../language/LanguageContext";

const OnboardingWelcomeOverview = () => {
    const { t } = useTranslation();
    const { language } = useContext(LanguageContext);
    const navigate = useNavigate();
    const {benefitId} = useParams();
    const activeUser = useUserStore((state) => state.activeUserId);
    const selectedTopics = useSelectedTopicsStore((state) => state.selectedTopics);
    const metadata = useMetadataStore((state) => state.metadata);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPrioritizedQuestions = async (topicIds, benefitId) => {
            try {
                await questionsService(activeUser, selectedTopics.map((topic) => topic.id), benefitId, language);
            } catch (error) {
                console.error('Error fetching prioritized questions:', error);
            } finally {
                setIsLoading(false);
                if (benefitId) {
                    navigate('/profile-section/' + benefitId);
                }
            }
        }
        console.log("benefitId", benefitId);
        if (benefitId) {
            fetchPrioritizedQuestions([], benefitId);
        } else {
            fetchPrioritizedQuestions(selectedTopics.map((topic) => topic.id), null);
        }
    }, [benefitId, activeUser, selectedTopics, navigate, language]);

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

    const getRpTitle = () => {
        const rpUri = "https://foerderfunke.org/default#" + benefitId.split(":")[1];
        return metadata.rp[rpUri].title;
    }

    return (
        <OnboardingWelcomeScreen buttonText={t('app.topicsChosen.discoverBtn')} link={`/profile-section`} isLoading={isLoading}>
            <VStack gap={3}>
                {
                    benefitId ? (
                        <>
                            <Typography variant="body1" gutterBottom sx={styles.subTitleText}>
                                {t('app.topicsChosen.benefitText')}
                            </Typography>
                            <VStack alignItems={'flex-start'}>
                                <VStack gap={2} alignItems={'flex-start'}>
                                    <Typography variant="h6" sx={styles.listHeader}>
                                        {getRpTitle()}
                                    </Typography>
                                </VStack>
                            </VStack>
                        </>
                        ) : (
                            <>
                                <Typography variant="body1" gutterBottom sx={styles.subTitleText}>
                                    {t('app.topicsChosen.topicsText')}
                                </Typography>
                                <VStack alignItems={'flex-start'}>
                                    {selectedTopics.map((topic, index) => (
                                        <VStack key={index} gap={2} alignItems={'flex-start'}>
                                            <Typography variant="h6" sx={styles.listHeader}>
                                                {language === "de" ? topic.title.de : topic.title.en}
                                            </Typography>
                                            {listRPsForTopic(topic)}
                                        </VStack>
                                    ))}
                                </VStack>
                            </>
                        )
                }
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
