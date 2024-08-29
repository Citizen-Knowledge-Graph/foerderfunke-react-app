import React, {useEffect, useMemo, useState} from 'react';
import {ButtonBase, Card, CardContent, Typography, CircularProgress} from '@mui/material';
import VStack from "../../../components/VStack";
import HStack from "../../../components/HStack";

import useFetchProfileField from "../hooks/useFetchProfileField";
import globalStyles from "../../../styles/styles";
import ProfileSectionInputSwitch from "./input-types/ProfileSectionInputSwitch";

// import handlers
import {useHandleAddClick} from "../handlers/addClickHandler";
import {useProfileSectionStore} from "../../../storage/useProfileSectionStore";

const ProfileSectionField = ({
                                 currentField,
                                 currentIndex,
                                 handleConfirm,
                                 isLoading,
                             }) => {
    const [value, setValue] = useState('');
    const retrieveCurrentEntityData = useProfileSectionStore((state) => state.retrieveCurrentEntityData)
    const entityData = useMemo(() => retrieveCurrentEntityData(), [retrieveCurrentEntityData]);
    const fetchProfileField = useFetchProfileField(currentField.datafield, entityData);
    const {
        handleAddClick,
        localError,
        setLocalError
    } = useHandleAddClick(currentField, entityData, handleConfirm, setValue);

    useEffect(() => {
        setValue('');
        setLocalError('');
        fetchProfileField().then(fieldData => {
            if (fieldData) {
                setValue(fieldData);
            }
        }).catch(error => {
            console.log('Error fetching profile field', error);
        });
    }, [currentField, fetchProfileField, setLocalError]);

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
                <Card
                    sx={{
                        ...styles.buttonCardComplete,
                        backgroundColor: isLoading ? globalStyles.primaryColorDisabled : globalStyles.primaryColor
                    }}
                    data-testid="button-card">
                    <CardContent sx={styles.buttonCardContent} data-testid="card-content">
                        <HStack justifyContent={'center'}>
                            {isLoading ?
                                (
                                    <CircularProgress size={24}/>
                                ) : (
                                    <ButtonBase onClick={() => handleAddClick(value, currentIndex)}>
                                        <Typography sx={styles.buttonCardText}>
                                            Confirm
                                        </Typography>
                                    </ButtonBase>
                                )
                            }
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
