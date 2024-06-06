import React, {useState} from 'react';
import {Card, CardContent, Typography, TextField, ButtonBase} from '@mui/material';
import Layout from '../components/Layout';
import {green} from '@mui/material/colors';
import {Link} from "react-router-dom";
import VStack from "../components/VStack";

const OnboardingUsername = () => {
    const [username, setUsername] = useState();
    //const [error, setError] = useState('');

    const handleChange = (event) => {
        setUsername(event.target.value);
    };

    return (
        <Layout>
            <VStack>
                <VStack gap={1}>
                    <Typography variant="h4" gutterBottom sx={styles.titleText}>
                        Dein Username
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={styles.subTitleText}>
                        Bevor wir losgehen können, benötigen wir noch einen Benutzernamen von dir.
                    </Typography>
                </VStack>
                <VStack component="form">
                    <TextField
                        label="Username"
                        variant="outlined"
                        value={username}
                        onChange={handleChange}
                        fullWidth
                    />
                </VStack>
                <VStack data-testid="button-card-container">
                    <Card sx={styles.buttonCard} data-testid="button-card">
                        <ButtonBase component={Link} to="/onboarding-sections">
                            <CardContent sx={styles.buttonCardContent} data-testid="card-content">
                                <Typography variant="h6" gutterBottom sx={styles.buttonCardText}>
                                    Bestätigen
                                </Typography>
                            </CardContent>
                        </ButtonBase>
                    </Card>
                </VStack>
            </VStack>
        </Layout>
    );
};

const styles = {
    titleText: {
        fontWeight: 'bold',
    },
    subTitleText: {
        fontSize: '16px',
        fontWeight: '400'
    },
    buttonCard: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: green[600],
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

export default OnboardingUsername;
