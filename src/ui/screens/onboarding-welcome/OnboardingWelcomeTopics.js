import React, { useContext } from 'react';
import { Button, Checkbox, FormControlLabel, Grid, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import useFetchData from "../../shared-hooks/useFetchData";
import useTopicSelectionHandlers from "./hooks/useTopicSelectionHandlers";
import useTranslation from "../../language/useTranslation";
import { LanguageContext } from "../../language/LanguageContext";
import Layout from "../../shared-components/Layout";
import AppScreenWrapper from "../../shared-components/AppScreenWrapper";
import { VBox } from "../../shared-components/LayoutBoxes";
import TimeIcon from './components/TimeIcon';
import { useSelectedBenefitStore, useSelectedTopicsStore } from "../../storage/zustand";
import theme from "../../../theme";

const OnboardingWelcomeTopics = () => {
    const { t } = useTranslation();
    const { language } = useContext(LanguageContext);
    const selectedTopics = useSelectedTopicsStore((state) => state.selectedTopics);
    const clearSelectedBenefit = useSelectedBenefitStore((state) => state.clear);
    clearSelectedBenefit()
    const topicsData = useFetchData('assets/data/topics/topics-list.json')
    const { selectedTopicsBoolean, handleButtonClick, handleToggleSelectAll } =
        useTopicSelectionHandlers(topicsData, selectedTopics);

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
                        <TimeIcon/>
                        <Typography variant="body1">
                            {t('app.topicSelection.text')}
                        </Typography>
                        <VBox sx={{ gap: theme.spacing(2) }}>
                            {
                                selectedTopicsBoolean.length > 0 && (
                                    <Grid container spacing={2}>
                                        {topicsData?.map((topic, index) => (
                                            <Grid item xs={12} sm={6} container key={index}>
                                                <Button
                                                    onClick={() => handleButtonClick(topic, index)}
                                                    sx={{
                                                        flex: 1,
                                                        padding: theme.spacing(2),
                                                        borderStyle: 'solid',
                                                        borderWidth: '1px',
                                                        borderColor: theme.palette.primary.main,
                                                        '&:hover': {
                                                            backgroundColor: theme.palette.primary.main,
                                                        },
                                                        backgroundColor: selectedTopicsBoolean[index] && theme.palette.primary.main,
                                                        '&:active': {
                                                            backgroundColor: selectedTopicsBoolean[index] && theme.palette.primary.main,
                                                        },
                                                        '&:focus': {
                                                            backgroundColor: selectedTopicsBoolean[index] && theme.palette.primary.main,
                                                        },
                                                    }}>
                                                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                                        {language === "de" ? topic.title.de : topic.title.en}
                                                    </Typography>
                                                </Button>
                                            </Grid>
                                        ))}
                                    </Grid>
                                )
                            }
                            <FormControlLabel control={<Checkbox onChange={handleToggleSelectAll} />} label={t('app.topicSelection.selectAll')} />
                        </VBox>
                    </VBox>
                    <Button
                        sx={{ padding: theme.spacing(2) }}
                        variant="contained"
                        component={Link}
                        to={'/onboarding-welcome'}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                            {t('app.topicSelection.confirmBtn')}
                        </Typography>
                    </Button>
                </VBox>
            </AppScreenWrapper>
        </Layout>
    );
}

export default OnboardingWelcomeTopics;
