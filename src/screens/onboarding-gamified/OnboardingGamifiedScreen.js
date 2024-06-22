import React from 'react';
import {Box, Typography} from '@mui/material';
import Layout from '../../components/Layout';

const OnboardingGamifiedScreen = () => {
    return (
        <Layout>
            <Box sx={styles.container}>
                <Typography variant="h5" gutterBottom sx={styles.titleText}>
                    Profil
                </Typography>
                <Typography variant="body1" gutterBottom sx={styles.subTitleText}>
                    Profil ...
                </Typography>
                <Typography variant="h5" gutterBottom sx={styles.titleText}>
                    Fehlende Datenpunkte
                </Typography>
                <Typography variant="body1" gutterBottom sx={styles.subTitleText}>
                    Datenpunkte ...
                </Typography>
                <Typography variant="h5" gutterBottom sx={styles.titleText}>
                    Anforderungsprofile
                </Typography>
                <Typography variant="body1" gutterBottom sx={styles.subTitleText}>
                    Anforderungsprofile ...
                </Typography>
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
    }
};

export default OnboardingGamifiedScreen;
