import React, { useContext } from 'react';
import { CircularProgress, Typography, Button } from '@mui/material';
import { useParams, Link } from "react-router-dom";
import useTranslation from "../../language/useTranslation";
import { LanguageContext } from "../../language/LanguageContext";
import useNumberOfBenefits from "./hooks/useNumberOfBenefits";
import Layout from "../../shared-components/Layout";
import AppScreenWrapper from "../../shared-components/AppScreenWrapper";
import { VBox, HBox } from "../../shared-components/LayoutBoxes";
import TimeIcon from './components/TimeIcon';
import BenefitsIcon from './components/BenefitsIcon';
import { useMetadataStore, useSelectedBenefitStore, useSelectedTopicsStore } from "../../storage/zustand";
import theme from "../../../theme";

const OnboardingWelcomeOverview = () => {
    const { benefitMode } = useParams();
    const { t } = useTranslation();
    const { language } = useContext(LanguageContext);

    const selectedBenefit = useSelectedBenefitStore((state) => state.selectedBenefit);
    const selectedTopics = useSelectedTopicsStore((state) => state.selectedTopics);
    const metadata = useMetadataStore((state) => state.metadata);
    const numberOfBenefits = useNumberOfBenefits(selectedTopics, metadata);

    const listRPsForTopic = (topic) => {
        const topicUri = "https://foerderfunke.org/default#" + topic.id.split(":")[1];
        const rps = Object.values(metadata.rp).filter(rp => rp.categories.includes(topicUri));
        return (
            <ul style={{ marginTop: -8 }}>
                {rps.map((rp, index) => (
                    <li key={index}>
                        <Typography variant="body1">
                            {rp.title}
                        </Typography>
                    </li>
                ))}
            </ul>
        );
    };

    const getRpTitle = () => {
        const rpUri = "https://foerderfunke.org/default#" + selectedBenefit?.split(":")[1];
        return metadata.rp[rpUri].title;
    }

    return (
        <Layout isApp={true} logo={false}>
            <AppScreenWrapper back={true}>
                <VBox sx={{ gap: theme.spacing(8) }}>
                    <VBox>
                        <Typography variant="h1">
                            {t('app.topicSelection.header')}
                        </Typography>
                        <HBox sx={{ gap: theme.spacing(4), alignItems: 'center' }}>
                            <TimeIcon />
                            {!benefitMode && <BenefitsIcon numberOfBenefits={numberOfBenefits} />}
                        </HBox>
                    </VBox>
                    <VBox sx={{ maxWidth: '840px' }}>
                        <Typography variant="h4" sx={{ color: theme.palette.pink.main }}>
                            {benefitMode ? t('app.topicsChosen.benefitTitle') : t('app.topicsChosen.topicsTitle')}
                        </Typography>
                        <Typography variant="body1">
                            {benefitMode ? t('app.topicsChosen.benefitText') : t('app.topicsChosen.topicsText')}
                        </Typography>
                    </VBox>
                    <VBox sx={{ gap: theme.spacing(4) }}>
                        {
                            benefitMode ? (
                                <VBox alignItems={'flex-start'}>
                                    <HBox sx={{
                                        padding: theme.spacing(4),
                                        borderRadius: theme.shape.borderRadius,
                                        backgroundColor: theme.palette.white.main,
                                    }}>
                                        <Typography variant="h5" sx={{ fontWeight: '400' }}>
                                            {metadata.rp && getRpTitle()}
                                        </Typography>
                                    </HBox>
                                </VBox>
                            ) : (
                                <VBox sx={{ gap: theme.spacing(2) }}>
                                    {metadata.rp ? selectedTopics.map((topic, index) => (
                                        <HBox key={index} sx={{
                                            padding: theme.spacing(4),
                                            borderRadius: theme.shape.borderRadius,
                                            backgroundColor: theme.palette.white.main,
                                        }}>
                                            <VBox sx={{ gap: theme.spacing(4) }}>
                                                <Typography variant="h5" sx={{ fontWeight: '400' }}>
                                                    {language === "de" ? topic.title.de : topic.title.en}
                                                </Typography>
                                                {listRPsForTopic(topic)}
                                            </VBox>
                                        </HBox>
                                    )) : <CircularProgress size={24} />}
                                </VBox>
                            )
                        }
                    </VBox>
                    <HBox>
                        <Button
                            sx={{
                                padding: "16px 28px",
                                backgroundColor: theme.palette.blue.dark,
                                color: theme.palette.white.main,
                            }}
                            variant="contained"
                            component={Link}
                            to={'/profile-section'}>
                            <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'inherit' }}>
                                {t('app.topicsChosen.discoverBtn')}
                            </Typography>
                        </Button>
                    </HBox>
                </VBox>
            </AppScreenWrapper>
        </Layout >
    );
};

export default OnboardingWelcomeOverview;
