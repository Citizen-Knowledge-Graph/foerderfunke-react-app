import React from 'react';
import {Card, CardContent, Typography} from '@mui/material';
import {Link} from 'react-router-dom';
import Layout from '../components/Layout';
import VStack from "../components/VStack";
import HStack from "../components/HStack";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const OnboardingChoice = () => {
    return (
        <Layout>
            <VStack gap={1} sx={styles.container} justifyContent={'center'}>
                <Typography variant="h3" gutterBottom sx={styles.titleText}>
                    Your choice
                </Typography>
                <Typography variant="body1" gutterBottom sx={styles.subTitleText}>
                    Three ways of discovering benefits for you
                </Typography>
            </VStack>
            <VStack data-testid="card-container" sx={styles.card}>
                <Link to="/onboarding-welcome" style={{textDecoration: 'none', color: "black", width: '100%'}}>
                    <VStack justifyContent={'space-between'}>
                        <HStack justifyContent={'flex-end'} gap={1}>
                            <Card sx={styles.infoCard}>
                                <CardContent sx={styles.infoCardContent}>
                                    <HStack gap={1}>
                                        <AccessTimeIcon/>
                                        <Typography variant="body2" sx={styles.infoCardText}>
                                            5 Min.
                                        </Typography>
                                    </HStack>
                                </CardContent>
                            </Card>
                        </HStack>
                        <HStack justifyContent={'flex-start'} gap={1}>
                            <VStack gap={0} justifyContent={'flex-end'}>
                                <Typography sx={styles.cardContentTitle}>
                                    Quick eligibility check
                                </Typography>
                                <Typography sx={styles.cardContentSubTitle}>
                                    Based on 10 benefits
                                </Typography>
                            </VStack>
                        </HStack>
                    </VStack>
                </Link>
            </VStack>
            <VStack data-testid="card-container" sx={{width: "100%"}}>
                <Link to="/onboarding-welcome" style={{textDecoration: 'none', color: "black", width: '100%'}}>
                    <HStack justifyContent={'flex-start'} gap={1} sx={styles.card}>
                        <VStack gap={1} justifyContent={'flex-end'}>
                            <Typography variant="body" sx={styles.cardContentTitle}>
                                Browse benefits
                            </Typography>
                            <Typography variant="h6" sx={styles.cardContentSubTitle}>
                                Filter by topic and from A-Z
                            </Typography>
                        </VStack>
                    </HStack>
                </Link>
            </VStack>
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
