import React, {useEffect, useState} from 'react';
import {ButtonBase, Card, CardContent, Typography} from '@mui/material';
import VStack from "../../../components/VStack";
import HStack from "../../../components/HStack";
import useAddProfileField from '../hooks/useAddProfileField';
import useInputValidation from "../hooks/useInputValidation";
import useFetchProfileField from "../hooks/useFetchProfileField";
import globalStyles from "../../../styles/styles";
import ProfileSectionInputSwitch from "./input-types/ProfileSectionInputSwitch";

const ProfileSectionField = ({
                                 currentField,
                                 entityData,
                                 currentIndex,
                                 handleConfirm,
                             }) => {
    const [value, setValue] = useState();
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
                            <Typography sx={styles.titleText}>
                                {currentField.question}
                            </Typography>
                        </CardContent>
                    </Card>
                </HStack>
                <ProfileSectionInputSwitch value={value}
                                           setValue={setValue}
                                           currentField={currentField}
                                           entityData={entityData}
                                           error={localError}/>
            </VStack>
            <VStack data-testid="button-card-container">
                <Card sx={styles.buttonCardComplete} data-testid="button-card">
                    <CardContent sx={styles.buttonCardContent} data-testid="card-content">
                        <HStack justifyContent={'center'}>
                            <ButtonBase onClick={handleAddClick}>
                                <Typography sx={styles.buttonCardText}>
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
        fontSize: '20px',
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
        backgroundColor: globalStyles.primaryColorTransparent,
        boxShadow: 'none',
    },
    infoCardContent: {
        width: '100%',
        padding: '16px',
        "&:last-child": {
            paddingBottom: '16px',
        }
    },
    buttonCardComplete: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: globalStyles.primaryColor,
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
        fontWeight: 'bold',
        textAlign: 'center',
        margin: '0',
    },
};

export default ProfileSectionField;
