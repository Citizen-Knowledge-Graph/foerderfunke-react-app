import React from 'react';
import {Button, Card, CardContent, TextField, Typography} from '@mui/material';
import VStack from "../../../components/VStack";
import HStack from "../../../components/HStack";
import {yellow, green} from "@mui/material/colors";
import useAddProfileField from "../hooks/useAddProfileField";

const ProfileSectionField = ({
                                 profileSectionField,
                                 entityData,
                                 currentIndex,
                                 handleConfirm,
                                 handleBack,
                                 handleSkip
                             }) => {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState('');
    const addProfileData = useAddProfileField(value, profileSectionField.datafield, entityData);

    const handleAddProfileData = () => {
        addProfileData()
            .then(() => {
                handleConfirm();
                console.log('Profile data added');
            })
            .catch((err) => {
                setError(err.message);
            });
    };

    return (
        <VStack gap={7}>
            <VStack gap={2}>
                <HStack>
                    <Card sx={styles.infoCard} data-testid="card">
                        <CardContent sx={styles.infoCardContent} data-testid="card-content">
                            <Typography variant="body1" gutterBottom sx={styles.titleText}>
                                {profileSectionField.title}
                            </Typography>
                        </CardContent>
                    </Card>
                </HStack>
                <TextField
                    variant="outlined"
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    fullWidth
                />
                {error ? (
                    <Typography variant="body1" color="error">
                        {error}
                    </Typography>
                ) : null}
            </VStack>
            <VStack gap={2}>
                <HStack justifyContent={'space-between'}>
                    <Button variant="body1" onClick={handleSkip}>
                        Skip
                    </Button>
                    <Button variant="body1" sx={styles.buttonText} onClick={handleAddProfileData}>
                        Bestätigen
                    </Button>
                </HStack>
                {
                    currentIndex !== 0 ? (
                            <HStack justifyContent={'flex-END'}>
                                <Button variant="body1" onClick={handleBack}>
                                    Vorherige Frage
                                </Button>
                            </HStack>)
                        : null
                }
            </VStack>
        </VStack>
    );
};

const styles = {
    titleText: {
        fontWeight: 'bold',
        margin: '0px',
    },
    infoCard: {
        width: '100%',
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: yellow[200],
        boxShadow: 'none',
    },
    infoCardContent: {
        padding: '16px',
        "&:last-child": {
            paddingBottom: '16px',
        }
    },
    buttonText: {
        backgroundColor: green[200],
        fontWeight: 'bold',
        margin: '0px',
        '&:focus': {
            backgroundColor: green[200],
        },
    },
};

export default ProfileSectionField;
