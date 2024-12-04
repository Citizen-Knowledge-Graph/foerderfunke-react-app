import React, {useContext} from 'react';
import {Typography} from '@mui/material';
import VStack from "../../shared-components/VStack";
import OnboardingWelcomeScreen from "./components/OnboardingWelcomeScreen";
import {useMetadataStore, useSelectedBenefitStore, useSelectedTopicsStore} from "../../storage/zustand";
import {useParams} from "react-router-dom";
import useTranslation from "../../language/useTranslation";
import {LanguageContext} from "../../language/LanguageContext";

const OnboardingWelcomeOverview = () => {
    const {benefitMode} = useParams();
    const { t } = useTranslation();
    const { language } = useContext(LanguageContext);
    const selectedBenefit = useSelectedBenefitStore((state) => state.selectedBenefit);
    const selectedTopics = useSelectedTopicsStore((state) => state.selectedTopics);
    const metadata = useMetadataStore((state) => state.metadata);

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
        const rpUri = "https://foerderfunke.org/default#" + selectedBenefit?.split(":")[1];
        return metadata.rp[rpUri].title;
    }

    return (
        <OnboardingWelcomeScreen buttonText={t('app.topicsChosen.discoverBtn')} link={`/profile-section`}>
            <VStack gap={3}>
                {
                    benefitMode ? (
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
