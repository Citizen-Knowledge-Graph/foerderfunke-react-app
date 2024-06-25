import React, {useEffect, useState} from 'react';
import {Button, Card, CardContent, Typography} from '@mui/material';
import VStack from "../../../components/VStack";
import HStack from "../../../components/HStack";
import {yellow, green} from "@mui/material/colors";
import useAddProfileField from "../hooks/useAddProfileField";
import useFetchProfileField from "../hooks/useFetchProfileField";
import ProfileSectionInput from "./ProfileSectionInput";
import ProfileSectionClass from "./ProfileSectionClass";

const ProfileSectionField = ({
                                 currentField,
                                 entityData,
                                 currentIndex,
                                 handleConfirm,
                                 handleBack,
                                 handleSkip
                             }) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');
    const addProfileData = useAddProfileField(value, currentField.datafield, entityData);
    const fetchProfileField = useFetchProfileField(currentField.datafield, entityData);

    useEffect(() => {
        fetchProfileField()
            .then(data => setValue(data))
            .catch(error => console.error('Error fetching profile field:', error));
    }, [fetchProfileField]);

    useEffect(() => {
        setValue('');
        setError('');
    }, [currentField]);

    const handleAddProfileData = () => {
        addProfileData()
            .then(() => {
                handleConfirm(currentIndex);
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
                                {currentField.title}
                            </Typography>
                        </CardContent>
                    </Card>
                </HStack>
                {
                    currentField.datatype !== 'class' ? (
                        <ProfileSectionInput value={value} setValue={setValue} error={error}/>
                    ) : (
                        <ProfileSectionClass currentField={currentField}
                                             entityData={entityData}/>
                    )
                }
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
        backgroundColor: yellow[400],
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
