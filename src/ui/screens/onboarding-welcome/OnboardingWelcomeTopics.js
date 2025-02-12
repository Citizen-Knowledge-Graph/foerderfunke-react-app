import React, { useContext, useState } from 'react';
import { Button, Checkbox, FormControlLabel, Grid, Typography, Box } from '@mui/material';
import { Link } from "react-router-dom";
import useFetchData from "../../shared-hooks/useFetchData";
import useTopicSelectionHandlers from "./hooks/useTopicSelectionHandlers";
import useTranslation from "../../language/useTranslation";
import { LanguageContext } from "../../language/LanguageContext";
import Layout from "../../shared-components/Layout";
import AppScreenWrapper from "../../shared-components/AppScreenWrapper";
import { VBox, HBox } from "../../shared-components/LayoutBoxes";
import TimeIcon from './components/TimeIcon';
import { useSelectedBenefitStore } from "../../storage/zustand";
import theme from "../../../theme";
import ContentBox from '../../shared-components/ContentBox';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import IconButton from '@mui/material/IconButton';

const OnboardingWelcomeTopics = () => {
    const { t } = useTranslation();
    const { language } = useContext(LanguageContext);
    const [showBusiness, setShowBusiness] = useState(false);
    const clearSelectedBenefit = useSelectedBenefitStore((state) => state.clear);
    clearSelectedBenefit()
    const topicsData = useFetchData('assets/data/topics/topics-list.json')
    const { selectedTopicsBoolean, handleButtonClick, handleToggleSelectAll } =
        useTopicSelectionHandlers(topicsData);


    console.log('topicsData front', topicsData)

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
                        <TimeIcon />
                        <ContentBox sx={{ backgroundColor: theme.palette.primary.light }}>
                            <VBox>
                                <Typography variant="h6">
                                    {t('app.topicSelection.socialBenefitsTitle')}
                                </Typography>
                                <Typography variant="body1">
                                    {t('app.topicSelection.socialBenefitsSubtitle')}
                                </Typography>
                            </VBox>
                        </ContentBox>
                        <VBox sx={{ gap: theme.spacing(2) }}>
                            {
                                selectedTopicsBoolean['social_benefits']?.length > 0 && (
                                    <Grid container spacing={2}>
                                        {topicsData?.filter(topic => topic.category === 'social_benefits').map((topic, index) => (
                                            <Grid item xs={12} sm={6} container key={index}>
                                                <Button variant='outlined'
                                                    onClick={() => { handleButtonClick(topic, index, 'social_benefits'); }}
                                                    sx={{
                                                        flex: 1,
                                                        padding: theme.spacing(2),
                                                        borderColor: theme.palette.primary.main,
                                                        backgroundColor: selectedTopicsBoolean['social_benefits'][index]
                                                            ? theme.palette.primary.main
                                                            : 'transparent',
                                                        '&:focus': {
                                                            backgroundColor: selectedTopicsBoolean['social_benefits'][index]
                                                                ? theme.palette.primary.main
                                                                : 'transparent',
                                                            outline: 'none',
                                                        },
                                                        '&:hover': {
                                                            backgroundColor: selectedTopicsBoolean['social_benefits'][index]
                                                                ? theme.palette.primary.main
                                                                : theme.palette.primary.light,
                                                            borderColor: theme.palette.primary.main,
                                                            '@media (hover: none)': {
                                                                backgroundColor: selectedTopicsBoolean['social_benefits'][index]
                                                                    ? theme.palette.primary.main
                                                                    : 'transparent',
                                                            },
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
                            <Box>
                                <FormControlLabel sx={{ margin: 0 }}
                                    control={<Checkbox onChange={(event) => handleToggleSelectAll(event, 'social_benefits')} />}
                                    label={t('app.topicSelection.selectAll')}
                                />
                            </Box>
                        </VBox>
                    </VBox>
                    <VBox sx={{ gap: theme.spacing(4) }}>
                        <ContentBox sx={{ backgroundColor: theme.palette.custom.colorDeepTealTransparent }}>
                            <VBox>
                                <Typography variant="h6">
                                    {t('app.topicSelection.businessTitle')}
                                </Typography>
                                <HBox sx={{ alignItems: "center", justifyContent: "space-between" }}>
                                    <Typography variant="body1">
                                        {t('app.topicSelection.businessSubtitle')}
                                    </Typography>
                                    <IconButton onClick={() => setShowBusiness(!showBusiness)} sx={{backgroundColor: theme.palette.custom.colorDeepTeal}}>
                                        {
                                            showBusiness ? <KeyboardArrowUpIcon sx={{ color: 'white' }} /> : <KeyboardArrowDownIcon sx={{ color: 'white' }} />
                                        }
                                    </IconButton>
                                </HBox>
                            </VBox>
                        </ContentBox>
                        {showBusiness && (
                            <VBox sx={{ gap: theme.spacing(2) }}>
                                {
                                    selectedTopicsBoolean['business']?.length > 0 && (
                                        <Grid container spacing={2}>
                                            {topicsData?.filter(topic => topic.category === 'business').map((topic, index) => (
                                                <Grid item xs={12} sm={6} container key={index}>
                                                    <Button variant='outlined'
                                                        onClick={() => { handleButtonClick(topic, index, 'business'); }}
                                                        sx={{
                                                            flex: 1,
                                                            padding: theme.spacing(2),
                                                            borderColor: theme.palette.custom.colorDeepTeal,
                                                            backgroundColor: selectedTopicsBoolean['business'][index]
                                                                ? theme.palette.custom.colorDeepTeal
                                                                : 'transparent',
                                                            '&:focus': {
                                                                backgroundColor: selectedTopicsBoolean['business'][index]
                                                                    ? theme.palette.custom.colorDeepTeal
                                                                    : 'transparent',
                                                                outline: 'none',
                                                            },
                                                            '&:hover': {
                                                                backgroundColor: selectedTopicsBoolean['business'][index]
                                                                    ? theme.palette.custom.colorDeepTeal
                                                                    : theme.palette.custom.colorDeepTealTransparent,
                                                                borderColor: theme.palette.custom.colorDeepTeal,
                                                                '@media (hover: none)': {
                                                                    backgroundColor: selectedTopicsBoolean['business'][index]
                                                                        ? theme.palette.custom.colorDeepTeal
                                                                        : 'transparent',
                                                                },
                                                            },
                                                        }}>
                                                        <Typography variant="body1" sx={{
                                                            fontWeight: 'bold',
                                                            color: selectedTopicsBoolean['business'][index]
                                                                ? 'white'
                                                                : 'black',
                                                        }}>
                                                            {language === "de" ? topic.title.de : topic.title.en}
                                                        </Typography>
                                                    </Button>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    )
                                }
                                <Box>
                                    <FormControlLabel sx={{ margin: 0 }}
                                        control={<Checkbox onChange={(event) => handleToggleSelectAll(event, 'business')} />}
                                        label={t('app.topicSelection.selectAll')}
                                    />
                                </Box>
                            </VBox>)}
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
        </Layout >
    );
}

export default OnboardingWelcomeTopics;
