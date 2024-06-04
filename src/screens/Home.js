// src/screens/Home.js
import React from 'react';
import {Typography, Button, Box, Card, CardContent, CardActions} from '@mui/material';
import {Link} from 'react-router-dom';
import Layout from '../components/Layout';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center horizontally
        textAlign: 'center', // Ensure text alignment is also centered
    },
    titleText: {
        fontWeight: 'bold', // Make text bold
    },
    subTitleText: {
        fontSize: '20px',
        fontWeight: '400'
    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        gap: '20px',
    },
    card: {
        width: '100%',
        height: '200px',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#f0f0f0',
        boxShadow: 'none'
    },
    cardContent: {
        flexGrow: 1,
    },
};

const Home = () => {
    return (
        <Layout>
            <Box sx={styles.container}>
                <Typography variant="h3" gutterBottom sx={styles.titleText}>
                    Zwei Wege
                </Typography>
                <Typography variant="body1" gutterBottom sx={styles.subTitleText}>
                    Du hast zwei Möglichkeiten, Leistungen und Förderungen für dich zu entdecken
                </Typography>
            </Box>
            <Box sx={styles.cardContainer} data-testid="card-container">
                <Card sx={styles.card} data-testid="card">
                    <CardContent sx={styles.cardContent} data-testid="card-content">
                        <Typography variant="h5" component="div">
                            Entdecke personalisierte Leistungen
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" component={Link} to="/onboarding-welcome">
                            Los geht's
                        </Button>
                    </CardActions>
                </Card>
                <Card sx={styles.card} data-testid="card">
                    <CardContent sx={styles.cardContent} data-testid="card-content">
                        <Typography variant="h5" component="div">
                            Browse den gesamten Katalog
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" component={Link} to="/onboarding">
                            Los geht's
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </Layout>
    );
};

export default Home;
