import React from 'react';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Home = () => {
    return (
        <Layout>
            <Typography variant="h3" gutterBottom>
                Du hast die Wahl!
            </Typography>
            <Typography variant="body1" gutterBottom>
                Du hast zwei Möglichkeiten:
            </Typography>
            <Button variant="contained" color="primary" component={Link} to="/onboarding">
                Go to Onboarding
            </Button>
        </Layout>
    );
};

export default Home;
