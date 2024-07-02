import React from 'react';
import {Box, Card, CardContent, Typography} from '@mui/material';
import Layout from '../../components/Layout';
import {green, indigo, yellow} from '@mui/material/colors';
import ButtonBase from '@mui/material/ButtonBase';
import {Link} from "react-router-dom";
import useInitializeQuickCheckUser from "./hooks/useInitializeQuickCheckUser";
import useInitializeProfileSectionStore from "./hooks/useInitializeProfileSectionStore";
import InfoCard from "../../components/InfoCard";
import VStack from "../../components/VStack";
import HStack from "../../components/HStack";
import IconCard from "../../components/IconCard";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OnboardingWelcome = () => {
    const entityData = useInitializeQuickCheckUser();
    const profileSection = 'quick-check-profile';
    useInitializeProfileSectionStore(profileSection, entityData);

    return (
        <Layout>
            <VStack gap={1}>
                <Typography variant="h4" gutterBottom sx={styles.titleText}>
                    Quick eligibility check
                </Typography>
                <HStack>
                    <IconCard icon={AccessTimeIcon} iconColor={green[500]} text="5 Min." />
                    <IconCard icon={StarBorderIcon} iconColor={yellow[500]} text="Based on 15 Benefits" />
                </HStack>
                <Typography variant="body1" gutterBottom sx={styles.subTitleText}>
                    Answer some questions about you and find out to which benefits you might be eligible to.
                </Typography>
            </VStack>
            <InfoCard text="All data is stored locally on your device. It never leaves your device at least you decide otherwise." />
            <Box sx={styles.buttonCardContainer} data-testid="button-card-container">
                <Card sx={styles.buttonCard} data-testid="button-card">
                    <ButtonBase
                        component={Link}
                        to={`/profile-section/${profileSection}`}
                    >
                        <CardContent sx={styles.buttonCardContent} data-testid="card-content">
                            <Typography variant="h6" gutterBottom sx={styles.buttonCardText}>
                                Los geht's!
                            </Typography>
                        </CardContent>
                    </ButtonBase>
                </Card>
            </Box>
        </Layout>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        textAlign: 'left',
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: '28px',
    },
    subTitleText: {
        fontSize: '16px',
        fontWeight: '400'
    },
    buttonCardContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    },
    buttonCard: {
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
        backgroundColor: indigo[600],
        borderRadius: '15px',
        boxShadow: 'none',
    },
    buttonCardContent: {
        padding: '16px',
        "&:last-child": {
            paddingBottom: '16px',
        }
    },
    buttonCardText: {
        color: 'white',
        fontWeight: '500',
        textAlign: 'center',
        margin: '0',
    }
};

export default OnboardingWelcome;
