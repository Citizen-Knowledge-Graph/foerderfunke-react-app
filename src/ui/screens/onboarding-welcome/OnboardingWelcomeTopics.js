import React from 'react';
import { Button, Checkbox, FormControlLabel, Typography, Box } from '@mui/material';
import { Link } from "react-router-dom";
import useFetchData from "../../shared-hooks/useFetchData";
import useTopicSelectionHandlers from "./hooks/useTopicSelectionHandlers";
import useTranslation from "../../language/useTranslation";
import Layout from "../../shared-components/Layout";
import AppScreenWrapper from "../../shared-components/AppScreenWrapper";
import { VBox, HBox } from "../../shared-components/LayoutBoxes";
import TimeIcon from './components/TimeIcon';
import { useSelectedBenefitStore } from "../../storage/zustand";
import theme from "../../../theme";
import ClickableTopicBox from "./components/ClickableTopicBox";

const OnboardingWelcomeTopics = () => {
    const { t } = useTranslation();
    const clearSelectedBenefit = useSelectedBenefitStore((state) => state.clear);
    clearSelectedBenefit()
    const topicsData = useFetchData('assets/data/topics/topics-list.json')
    const { selectedTopicsBoolean, handleButtonClick, handleToggleSelectAll } =
        useTopicSelectionHandlers(topicsData);

    return (
        <Layout isApp={true} logo={false}>
            <AppScreenWrapper back={true}>
                <VBox sx={{ gap: theme.spacing(8) }}>
                    <HBox sx={{ alignItems: "center" }}>
                        <VBox>
                            <Typography variant="h1">
                                {t('app.topicSelection.header')}
                            </Typography>
                            <TimeIcon />
                        </VBox>
                    </HBox>
                    <VBox sx={{ gap: theme.spacing(4) }}>
                        <VBox>
                            <Typography variant="h4" sx={{ color: theme.palette.pink.main }}>
                                {t('app.topicSelection.socialBenefitsTitle')}
                            </Typography>
                            <Typography variant="body1">
                                {t('app.topicSelection.socialBenefitsSubtitle')}
                            </Typography>
                        </VBox>
                        <VBox sx={{ gap: theme.spacing(2) }}>
                            {
                                selectedTopicsBoolean['social_benefits']?.length > 0 && (
                                    <HBox sx={{ flexWrap: 'wrap' }}>
                                        {topicsData?.filter(topic => topic.category === 'social_benefits').map((topic, index) => (
                                            <ClickableTopicBox
                                                key={index}
                                                topic={topic}
                                                index={index}
                                                category="social_benefits"
                                                isSelected={selectedTopicsBoolean['social_benefits'][index]}
                                                onClick={handleButtonClick}
                                            />
                                        ))}
                                    </HBox>
                                )
                            }
                        </VBox>
                        <Box>
                            <FormControlLabel sx={{ margin: 0 }}
                                control={<Checkbox onChange={(event) => handleToggleSelectAll(event, 'social_benefits')} />}
                                label={t('app.topicSelection.selectAll')}
                            />
                        </Box>
                    </VBox>
                    <VBox sx={{ gap: theme.spacing(4) }}>
                        <VBox>
                            <Typography variant="h4" sx={{ color: theme.palette.pink.main }}>
                                {t('app.topicSelection.businessTitle')}
                            </Typography>
                            <Typography variant="body1">
                                {t('app.topicSelection.businessSubtitle')}
                            </Typography>
                        </VBox>
                        <VBox sx={{ gap: theme.spacing(4) }}>
                            {
                                selectedTopicsBoolean['business']?.length > 0 && (
                                    <HBox sx={{ flexWrap: 'wrap' }}>
                                        {topicsData?.filter(topic => topic.category === 'business').map((topic, index) => (
                                            <ClickableTopicBox
                                                key={index}
                                                topic={topic}
                                                index={index}
                                                category="business"
                                                isSelected={selectedTopicsBoolean['business'][index]}
                                                onClick={handleButtonClick}
                                            />
                                        ))}
                                    </HBox>
                                )
                            }
                        </VBox>
                        <Box>
                            <FormControlLabel sx={{ margin: 0 }}
                                control={<Checkbox
                                    sx={{
                                        "&.Mui-checked": {
                                            color: theme.palette.custom.colorDeepTeal,
                                        },
                                    }}
                                    onChange={(event) => handleToggleSelectAll(event, 'business')} />}
                                label={t('app.topicSelection.selectAll')}
                            />
                        </Box>
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
                            to={'/onboarding-welcome'}>
                            <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'inherit' }}>
                                {t('app.topicSelection.confirmBtn')}
                            </Typography>
                        </Button>
                    </HBox>
                </VBox>
            </AppScreenWrapper>
        </Layout >
    );
}

export default OnboardingWelcomeTopics;
