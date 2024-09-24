import React from 'react';
import {Typography} from '@mui/material';
import Layout from '../../components/Layout';
import VStack from "../../components/VStack";
import ClickCard from "../../components/ClickCard";
import AppScreenWrapper from "../../components/AppScreenWrapper";
import {useStore} from "../../components/ViewportUpdater";
import useTranslation from "../../language/useTranslation";

const OnboardingChoice = () => {
    const { t } = useTranslation();

    const isDesktop = useStore((state) => state.isDesktop);
    const quickCheckUrl = `${process.env.PUBLIC_URL}/assets/images/choice-screen/quick-check-image.jpg`;
    const allBenefitsUrl = `${process.env.PUBLIC_URL}/assets/images/choice-screen/all-benefits.jpg`;

    return (
        <Layout isApp={true}>
            <AppScreenWrapper isDesktop={isDesktop} back={true}>
                <VStack gap={1} sx={styles.container} justifyContent={'center'}>
                    <Typography variant="h3" gutterBottom sx={styles.titleText}>
                        {t('app.discoverChoice.header')}
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={styles.subTitleText}>
                        {t('app.discoverChoice.text')}
                    </Typography>
                </VStack>
                <ClickCard
                    link="/onboarding-welcome-topics"
                    time="5 Min."
                    title={t('app.discoverChoice.quickCheck')}
                    subtitle={t('app.discoverChoice.quickCheckComment')}
                    backgroundImage={quickCheckUrl}
                />
                <ClickCard
                    link="/eligibility-overview"
                    title={t('app.discoverChoice.browseAll')}
                    backgroundImage={allBenefitsUrl}
                />
            </AppScreenWrapper>
        </Layout>
    );
};

const styles = {
    titleText: {
        fontWeight: 'bold',
        textAlign: 'center'
    },
    subTitleText: {
        fontSize: '28px',
        fontWeight: '400',
        textAlign: 'center'
    }
};

export default OnboardingChoice;
