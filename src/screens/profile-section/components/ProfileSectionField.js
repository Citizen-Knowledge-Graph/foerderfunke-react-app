import React, {useEffect, useState} from 'react';
import {Button, ButtonBase, Card, CardContent, Typography} from '@mui/material';
import VStack from "../../../components/VStack";
import HStack from "../../../components/HStack";
import {indigo} from "@mui/material/colors";
import ProfileSectionInput from "./ProfileSectionInput";
import ProfileSectionClass from "./ProfileSectionClass";
import ProfileSectionSelection from "./ProfileSectionSelection";
import useAddProfileField from '../hooks/useAddProfileField';
import useInputValidation from "../hooks/useInputValidation";
import useFetchProfileField from "../hooks/useFetchProfileField";
import globalStyles from "../../../styles/styles";

const ProfileSectionField = ({
                                 currentField,
                                 entityData,
                                 currentIndex,
                                 handleConfirm,
                                 handleBack,
                                 handleSkip
                             }) => {
    const [value, setValue] = useState('');
    const [localError, setLocalError] = useState('');
    const validateValue = useInputValidation(currentField.datatype);
    const addProfileData = useAddProfileField(currentField, entityData, handleConfirm);
    const fetchProfileField = useFetchProfileField(currentField.datafield, entityData);

    useEffect(() => {
        setValue('');
        setLocalError('');
        fetchProfileField().then(fieldData => {
            if (fieldData) {
                console.log('Field data', fieldData);
                setValue(fieldData);
            }
        }).catch(error => {
            console.log('Error fetching profile field', error);
        });
    }, [currentField, fetchProfileField]);

    const handleAddClick = () => {
        validateValue(value)
            .then(() => {
                    addProfileData(value)
                        .then(() => {
                            setValue('')
                            handleConfirm(currentIndex);
                            console.log('Profile data added')
                        })
                        .catch((err) => {
                            console.log('Error adding profile data', err);
                            setLocalError(err);
                        });
                }
            )
            .catch((err) => {
                    console.log('Error validating input', err);
                    setLocalError(err);
                }
            )
    }

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
                {currentField.datatype === 'selection' ? (
                    <ProfileSectionSelection value={value} setValue={setValue} currentField={currentField} error={localError} />
                ) : currentField.datatype !== 'class' ? (
                    <ProfileSectionInput value={value} setValue={setValue} error={localError} />
                ) : (
                    <ProfileSectionClass value={value}
                                         currentField={currentField}
                                         entityData={entityData} />
                )}
            </VStack>
            <VStack data-testid="button-card-container">
                <HStack justifyContent={'space-between'}>
                    <Button variant="body1" onClick={handleSkip}>
                        Skip
                    </Button>
                    {
                        currentIndex !== 0 ? (
                                <HStack justifyContent={'flex-END'}>
                                    <Button variant="body1" onClick={() => handleBack(currentIndex)}>
                                        Vorherige Frage
                                    </Button>
                                </HStack>)
                            : null
                    }
                </HStack>
                <Card sx={styles.buttonCardComplete} data-testid="button-card">
                    <CardContent sx={styles.buttonCardContent} data-testid="card-content">
                        <HStack justifyContent={'center'}>
                            <ButtonBase onClick={handleAddClick}>
                                <Typography variant="h6" gutterBottom sx={styles.buttonCardText}>
                                    Confirm
                                </Typography>
                            </ButtonBase>
                        </HStack>
                    </CardContent>
                </Card>
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
        borderRadius: '15px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: globalStyles.primaryColor,
        boxShadow: 'none',
    },
    infoCardContent: {
        padding: '16px',
        "&:last-child": {
            paddingBottom: '16px',
        }
    },
    buttonCardComplete: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: indigo[900],
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
    },
};

export default ProfileSectionField;
