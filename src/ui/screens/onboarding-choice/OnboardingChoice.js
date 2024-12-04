import React from 'react';
import {Typography} from '@mui/material';
import Layout from '../../shared-components/Layout';
import VStack from "../../shared-components/VStack";
import ClickCard from "../../shared-components/ClickCard";
import AppScreenWrapper from "../../shared-components/AppScreenWrapper";
import {useStore} from "../../shared-components/ViewportUpdater";
import useTranslation from "../../language/useTranslation";
import HStack from "../../shared-components/HStack";

const OnboardingChoice = () => {
    const {t} = useTranslation();

    const isDesktop = useStore((state) => state.isDesktop);
    const quickCheckUrl = `${process.env.PUBLIC_URL}/assets/images/choice-screen/quick-check-image.jpg`;
    const allBenefitsUrl = `${process.env.PUBLIC_URL}/assets/images/choice-screen/all-benefits.jpg`;
    const titleFontSize = isDesktop ? 40 : 30;

    const DynamicStacker = ({children}) => {
        if (isDesktop) {
            return (
                <HStack justifyContent={'space-between'}>
                    {children}
                </HStack>
            )
        }
        return (
            <VStack>
                {children}
            </VStack>
        )
    }

    return (
        <Layout isApp={true}>
            <AppScreenWrapper isDesktop={isDesktop} back={true}>
                <VStack gap={1} sx={styles.container} justifyContent={'center'}>
                    <Typography gutterBottom sx={{...styles.titleText, fontSize: titleFontSize}}>
                        {t('app.discoverChoice.header')}
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={styles.subTitleText}>
                        {t('app.discoverChoice.text')}
                    </Typography>
                </VStack>
                <DynamicStacker>
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
                </DynamicStacker>
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
        fontSize: '20px',
        fontWeight: '400',
        textAlign: 'left'
    }
};

export default OnboardingChoice;
