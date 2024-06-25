import React from 'react';
import {Box, Card, CardContent, Typography} from '@mui/material';
import Layout from '../../components/Layout';
import {blue, indigo} from '@mui/material/colors';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ButtonBase from '@mui/material/ButtonBase';
import {Link} from "react-router-dom";
import useInitializeQuickCheckUser from "./hooks/useInitializeQuickCheckUser";
import useInitializeProfileSectionStore from "./hooks/useInitializeProfileSectionStore";

const OnboardingWelcome = () => {
    const entityData = useInitializeQuickCheckUser();
    const profileSection = 'quick-check-profile';
    useInitializeProfileSectionStore(profileSection, entityData);

    return (
        <Layout>
            <Box sx={styles.container}>
                <Typography variant="h4" gutterBottom sx={styles.titleText}>
                    Entdecke personalisierte Leistungen
                </Typography>
                <Typography variant="body1" gutterBottom sx={styles.subTitleText}>
                    Answer some questions about you and find out to which benefits you might be eligible to. The more
                    questions you answer, the more accurate will be the results you get.
                </Typography>
            </Box>
            <Box>
                <Card sx={styles.infoCard} data-testid="card">
                    <CardContent sx={styles.infoCardContent} data-testid="card-content">
                        <Box sx={styles.infoCardRow}>
                            <Box sx={styles.infoBox} datatest-id='infoBox'>
                                <InfoOutlinedIcon/>
                            </Box>
                            <Typography variant="body2" component="div">
                                All data is stored locally on your device. It never leaves your device at least you
                                decide otherwise.
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
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
    },
    subTitleText: {
        fontSize: '16px',
        fontWeight: '400'
    },
    infoCard: {
        width: '100%',
        borderRadius: '15px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: blue[100],
        boxShadow: 'none',
    },
    infoCardContent: {
        padding: '16px',
        "&:last-child": {
            paddingBottom: '16px',
        }
    },
    infoCardRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: '10px',
    },
    infoBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
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
