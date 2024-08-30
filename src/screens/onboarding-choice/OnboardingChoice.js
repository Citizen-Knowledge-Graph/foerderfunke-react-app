import React from 'react';
import {Typography} from '@mui/material';
import Layout from '../../components/Layout';
import VStack from "../../components/VStack";
import ClickCard from "../../components/ClickCard";
import AppScreenWrapper from "../../components/AppScreenWrapper";
import {useStore} from "../../components/ViewportUpdater";
import globalStyles from "../../styles/styles";

const OnboardingChoice = () => {
    const isDesktop = useStore((state) => state.isDesktop);

    return (
        <Layout isApp={true}>
            <AppScreenWrapper isDesktop={isDesktop} back={true}>
                <VStack gap={1} sx={styles.container} justifyContent={'center'}>
                    <Typography variant="h3" gutterBottom sx={styles.titleText}>
                        Your choice
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={styles.subTitleText}>
                        Two ways of discovering benefits for you
                    </Typography>
                </VStack>
                <ClickCard
                    link="/onboarding-welcome-topics"
                    time="5 Min."
                    title="Quick eligibility check"
                    subtitle="Based on 10 benefits"
                    backgroundColor={globalStyles.colorAmberOrange}
                />
                <ClickCard
                    link="/eligibility-overview"
                    title="Browse all benefits"
                    subtitle="Filter by topic or from A-Z"
                    backgroundColor={globalStyles.colorTangerineOrange}
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
