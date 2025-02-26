import React, { useContext } from 'react';
import { CircularProgress, Typography, Box, Button } from '@mui/material';
import { useParams, Link } from "react-router-dom";
import useTranslation from "../../language/useTranslation";
import { LanguageContext } from "../../language/LanguageContext";
import useNumberOfBenefits from "./hooks/useNumberOfBenefits";
import Layout from "../../shared-components/Layout";
import AppScreenWrapper from "../../shared-components/AppScreenWrapper";
import { VBox, HBox } from "../../shared-components/LayoutBoxes";
import ContentBox from "../../shared-components/ContentBox";
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
        <Layout isApp={true} logo={false}>
            <AppScreenWrapper back={true}>
                <VBox sx={{ gap: theme.spacing(4) }}>
                    <VBox sx={{ alignItems: "center" }}>
                        <Typography variant="h4">
                            {t('app.topicSelection.header')}
                        </Typography>
                    </VBox>
                    <VBox sx={{ gap: theme.spacing(4) }}>
                        <HBox>
                            <TimeIcon />
                            {!benefitMode && <BenefitsIcon numberOfBenefits={numberOfBenefits} />}
                        </HBox>
                        <Typography variant="body1">
                            {benefitMode ? t('app.topicsChosen.benefitText') : t('app.topicsChosen.topicsText')}
                        </Typography>
                        {
                            benefitMode ? (
                                <VBox alignItems={'flex-start'}>
                                    <Box
                                        sx={(theme) => ({
                                            padding: theme.spacing(1),
                                            borderRadius: theme.shape.borderRadius,
                                            borderWidth: 1,
                                            borderStyle: 'solid',
                                            borderColor: theme.palette.primary.main,
                                        })}
                                    >
                                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                            {metadata.rp && getRpTitle()}
                                        </Typography>
                                    </Box>
                                </VBox>
                            ) : (
                                <VBox sx={{ gap: theme.spacing(2) }}>
                                    {metadata.rp ? selectedTopics.map((topic, index) => (
                                        <ContentBox key={index} sx={{ width: "100%", backgroundColor: theme.palette.primary.light }}>
                                            <VBox gap={2} alignItems={'flex-start'}>
                                                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                                    {language === "de" ? topic.title.de : topic.title.en}
                                                </Typography>
                                                {listRPsForTopic(topic)}
                                            </VBox>
                                        </ContentBox>
                                    )) : <CircularProgress size={24} />}
                                </VBox>
                            )
                        }
                    </VBox>
                    <Button
                        sx={{
                            padding: theme.spacing(2),
                            backgroundColor: theme.palette.primary.main,
                            borderColor: theme.palette.primary.main
                        }}
                        variant="contained"
                        component={Link}
                        to={'/profile-section'}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                            {t('app.topicsChosen.discoverBtn')}
                        </Typography>
                    </Button>
                </VBox>
            </AppScreenWrapper>
        </Layout >
    );
};

export default OnboardingWelcomeOverview;
