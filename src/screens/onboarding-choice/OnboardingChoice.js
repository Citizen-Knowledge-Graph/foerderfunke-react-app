import React from 'react';
import {Typography} from '@mui/material';
import Layout from '../../components/Layout';
import VStack from "../../components/VStack";
import ClickCard from "../../components/ClickCard";
import AppScreenWrapper from "../../components/AppScreenWrapper";
import {useStore} from "../../components/ViewportUpdater";

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
                        Three ways of discovering benefits for you
                    </Typography>
                </VStack>
                <ClickCard
                    link="/onboarding-welcome"
                    time="5 Min."
                    title="Quick eligibility check"
                    subtitle="Based on 10 benefits"
                />
                <ClickCard
                    link="/eligibility-overview"
                    time="At your own pace"
                    title="Browse all benefits"
                    subtitle="Filter by topic or from A-Z"
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
    },
    card: {
        height: '175px',
        padding: '16px',
        borderRadius: '15px',
        backgroundImage: `url('foerderfunke-react-app/assets/images/quick-check.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    cardContentTitle: {
        fontSize: '36px',
        fontWeight: 'bold',
        color: "white"
    },
    cardContentSubTitle: {
        fontSize: '16px',
        fontWeight: '400',
        color: "white"
    },
    infoCard: {
        borderRadius: '12px',
    },
    infoCardContent: {
        padding: "4px 12px",
        paddingLeft: '4px',
        paddingRight: '4px',
        "&:last-child": {
            paddingBottom: '4px',
        }
    },
    infoCardText: {
        color: "black",
        fontSize: '16px',
        fontWeight: '400',
    }
};

export default OnboardingChoice;
