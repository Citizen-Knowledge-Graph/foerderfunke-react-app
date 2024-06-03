import React from 'react';
import { Typography } from '@mui/material';
import Layout from '../components/Layout';

const Onboarding = () => {
    return (
        <Layout>
            <Typography variant="h3" gutterBottom>
                Onboarding Screen
            </Typography>
            <Typography variant="body1" gutterBottom>
                Welcome to the Onboarding Screen.
            </Typography>
        </Layout>
    );
};

export default Onboarding;
