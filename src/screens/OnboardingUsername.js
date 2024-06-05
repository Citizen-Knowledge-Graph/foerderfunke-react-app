import React, {useState} from 'react';
import {Box, Card, CardContent, Typography, TextField} from '@mui/material';
import Layout from '../components/Layout';
import {blue, indigo, green} from '@mui/material/colors';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ButtonBase from '@mui/material/ButtonBase';
import {Link} from "react-router-dom";
import {Button} from "@mui/material";
import VStack from "../components/VStack";
import HStack from "../components/HStack";

const OnboardingUsername = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <Layout>
            <HStack>
                <Typography variant="h4" gutterBottom sx={styles.titleText}>
                    Dein Username
                </Typography>
                <Typography variant="body1" gutterBottom sx={styles.subTitleText}>
                    Bevor wir losgehen können, benötigen wir noch einen Benutzernamen von dir.
                </Typography>
            </HStack>
            <HStack component="form" sx={styles.inputBox}>
                <TextField
                    label="Username"
                    variant="outlined"
                    value={inputValue}
                    onChange={handleChange}
                    fullWidth
                />
            </HStack>
            <HStack data-testid="button-card-container">
                <Card sx={styles.buttonCard} data-testid="button-card">
                    <ButtonBase component={Link} to="/onboarding-sections">
                        <CardContent sx={styles.buttonCardContent} data-testid="card-content">
                            <Typography variant="h6" gutterBottom sx={styles.buttonCardText}>
                                Los geht's!
                            </Typography>
                        </CardContent>
                    </ButtonBase>
                </Card>
            </HStack>
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
