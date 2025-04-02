import React from 'react';
import { Typography } from '@mui/material';
import Layout from "@/ui/shared-components/Layout";
import AppScreenWrapper from "@/ui/shared-components/AppScreenWrapper";
import { VBox, HBox } from "@/ui/shared-components/LayoutBoxes";
import theme from "@/theme";
import RegularButton from '@/ui/shared-components/RegularButton';
import TimeIcon from '../components/TimeIcon';
import BenefitsIcon from '../components/BenefitsIcon';

const OnboardingWelcomeOverviewView = ({
    t,
    benefitMode,
    language,
    isLoading,
    numberOfBenefits,
    rpTitle,
    topicRps,
}) => {

    return (
        <Layout isApp={true} logo={false}>
            <AppScreenWrapper isLoading={isLoading} back={true}>
                <VBox sx={{ gap: { xs: 4, md: 8 } }}>
                    <VBox>
                        <Typography variant="h1">
                            {t('app.topicSelection.header')}
                        </Typography>
                        <HBox sx={{ gap: 4, alignItems: 'center', flexWrap: 'wrap' }}>
                            <TimeIcon />
                            {!benefitMode && <BenefitsIcon numberOfBenefits={numberOfBenefits} />}
                        </HBox>
                    </VBox>
                    <VBox sx={{ maxWidth: '800px' }}>
                        <Typography variant="h2" sx={{ color: 'pink.main', fontWeight: '500' }}>
                            {benefitMode ? t('app.topicsChosen.benefitTitle') : t('app.topicsChosen.topicsTitle')}
                        </Typography>
                        <Typography variant="body1">
                            {benefitMode ? t('app.topicsChosen.benefitText') : t('app.topicsChosen.topicsText')}
                        </Typography>
                    </VBox>
                    <VBox sx={{ gap: 4 }}>
                        {benefitMode ? (
                            <VBox alignItems={'flex-start'}>
                                <HBox sx={{
                                    padding: { xs: '20px', md: 4 },
                                    borderRadius: theme.shape.borderRadius,
                                    backgroundColor: 'white.main',
                                }}>
                                    <Typography variant="h2" sx={{ fontWeight: '400' }}>
                                        {rpTitle}
                                    </Typography>
                                </HBox>
                            </VBox>
                        ) : (
                            <VBox sx={{ gap: 2 }}>
                                {
                                    topicRps.map(({ topic, rps }, index) => (
                                        <HBox
                                            key={index}
                                            sx={{
                                                padding: { xs: '20px', md: 4 },
                                                borderRadius: theme.shape.borderRadius,
                                                backgroundColor: 'white.main',
                                            }}>
                                            <VBox sx={{ gap: 2 }}>
                                                <Typography variant="h2">{language === "de" ? topic.title.de : topic.title.en}</Typography>
                                                <ul>{rps.map((rp, i) => <li key={i}><Typography>{rp.title}</Typography></li>)}</ul>
                                            </VBox>
                                        </HBox>
                                    ))
                                }
                            </VBox>
                        )}
                    </VBox>
                    <RegularButton
                        variant={'blueContained'}
                        text={t('app.topicsChosen.discoverBtn')}
                        link={'/questions'}
                    />
                </VBox>
            </AppScreenWrapper>
        </Layout>
    );
};

export default OnboardingWelcomeOverviewView;
