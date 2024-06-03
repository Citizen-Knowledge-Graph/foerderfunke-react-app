// src/screens/Home.js
import React from 'react';
import { Typography, Button, Box, Card, CardContent, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center horizontally
        textAlign: 'center', // Ensure text alignment is also centered
        padding: '20px', // Add padding for spacing
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
        height: '350px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
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
                            Card Title
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            This is some text inside the card.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" component={Link} to="/onboarding">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
                <Card sx={styles.card} data-testid="card">
                    <CardContent sx={styles.cardContent} data-testid="card-content">
                        <Typography variant="h5" component="div">
                            Card Title
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            This is some text inside the card.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" component={Link} to="/onboarding">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </Layout>
    );
};

export default Home;
