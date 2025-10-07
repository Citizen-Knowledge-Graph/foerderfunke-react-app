import React from 'react';
import { Typography } from '@mui/material';
import Layout from "@/ui/shared-components/Layout";
import { VBox, HBox } from "@/ui/shared-components/LayoutBoxes";
import theme from "@/theme";
import RegularButton from '@/ui/shared-components/buttons/RegularButton';
import TimeIcon from '../components/TimeIcon';
import BenefitsIcon from '../components/BenefitsIcon';
import AppScreenWrapperContainer from '@/ui/shared-components/app-screen-wrapper/AppScreenWrapperContainer';
import { pickLang } from "@/ui/language/useTranslation";

const OnboardingWelcomeOverviewView = ({
    t,
    language,
    isLoading,
    numberOfBenefits,
    benefitTitles,
    topicRps,
}) => {

    const isBenefitMode = benefitTitles?.length > 0;

    return (
        <Layout isApp={true} logo={false}>
            <AppScreenWrapperContainer isLoading={isLoading} back={true} backTarget={'/onboarding-welcome-topics'}>
                <VBox sx={{ gap: { xs: 4, md: 8 } }}>
                    <VBox>
                        <Typography variant="h1">
                            {t('app.topicSelection.header')}
                        </Typography>
                        <HBox sx={{ gap: 4, alignItems: 'center', flexWrap: 'wrap' }}>
                            <TimeIcon />
                            {!isBenefitMode && numberOfBenefits > 0 && <BenefitsIcon numberOfBenefits={numberOfBenefits} />}
                        </HBox>
                    </VBox>
                    <VBox sx={{ maxWidth: '800px' }}>
                        {
                            !isBenefitMode && numberOfBenefits === 0 ? (
                                <Typography variant="h2" sx={{ color: 'pink.main', fontWeight: '500' }}>
                                    {t('app.topicsChosen.noChoiceTitle')}
                                </Typography>)
                                : (
                                    <>
                                        <Typography variant="h2" sx={{ color: 'pink.main', fontWeight: '500' }}>
                                            {isBenefitMode ? t('app.topicsChosen.benefitsTitle') : t('app.topicsChosen.topicsTitle')}
                                        </Typography>
                                        <Typography variant="body1">
                                            {isBenefitMode ? t('app.topicsChosen.benefitsText') : t('app.topicsChosen.topicsText')}
                                        </Typography>
                                    </>)}
                    </VBox>
                    <VBox sx={{ gap: 4 }}>
                        {isBenefitMode ? (
                            <VBox alignItems={'flex-start'}>
                                <HBox sx={{
                                    padding: { xs: '20px', md: 4 },
                                    borderRadius: theme.shape.borderRadius,
                                    backgroundColor: 'white.main',
                                }}>
                                    <VBox>
                                        {benefitTitles.map((title, idx) => (
                                            <HBox
                                                key={idx}
                                                sx={{
                                                    backgroundColor: 'greyTransparent.main',
                                                    padding: '6px 18px',
                                                    borderRadius: theme.shape.borderRadius,
                                                }}>
                                                <Typography variant='body1'>
                                                    {title}
                                                </Typography>
                                            </HBox>
                                        ))}
                                    </VBox>
                                </HBox>
                            </VBox>
                        ) : (
                            <VBox sx={{ gap: 2 }}>
                                {topicRps.map(({ topic, rps }, index) => (
                                    <HBox
                                        key={index}
                                        sx={{
                                            padding: { xs: '20px', md: 4 },
                                            borderRadius: theme.shape.borderRadius,
                                            backgroundColor: 'white.main',
                                        }}>
                                        <VBox sx={{ gap: { xs: 2, md: 4 } }}>
                                            <Typography variant="h2">
                                                {pickLang(topic.title, language, '')}
                                            </Typography>
                                            <VBox sx={{ gap: 1 }}>
                                                {rps.map((rpTitle, idx) => (
                                                    <HBox
                                                        key={idx}
                                                        sx={{
                                                            backgroundColor: 'greyTransparent.main',
                                                            padding: '6px 18px',
                                                            borderRadius: theme.shape.borderRadius,
                                                        }}>
                                                        <Typography variant='body1'>
                                                            {rpTitle}
                                                        </Typography>
                                                    </HBox>
                                                ))}
                                            </VBox>
                                        </VBox>
                                    </HBox>
                                ))}
                            </VBox>
                        )}
                    </VBox>
                    <RegularButton
                        variant={'blueContained'}
                        text={t('app.topicsChosen.discoverBtn')}
                        link={'/questions'}
                    />
                </VBox>
            </AppScreenWrapperContainer>
        </Layout>
    );
};

export default OnboardingWelcomeOverviewView;
