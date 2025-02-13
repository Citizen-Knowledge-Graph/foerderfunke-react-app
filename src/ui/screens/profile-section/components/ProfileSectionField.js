import React, { useEffect, useMemo, useState } from 'react';
import { Typography, Button, Collapse } from '@mui/material';
import { VBox, HBox } from '../../../shared-components/LayoutBoxes';
import theme from "../../../../theme";
import ContentBox from '../../../shared-components/ContentBox';

import useFetchProfileField from "../hooks/useFetchProfileField";
import globalStyles from "../../../styles/styles";
import ProfileSectionInputSwitch from "./input-types/ProfileSectionInputSwitch";

import { useHandleAddClick } from "../handlers/addClickHandler";
import { useProfileSectionStore } from "../../../storage/useProfileSectionStore";
import useTranslation from "../../../language/useTranslation";
import { ExpandMore } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';

const ProfileSectionField = ({
    currentField,
    currentIndex,
    handleConfirm,
    isLoading,
}) => {
    const { t } = useTranslation();
    const [value, setValue] = useState(null);
    const [showComment, setShowComment] = useState(false); // Toggle state for comment visibility
    const retrieveCurrentEntityData = useProfileSectionStore((state) => state.retrieveCurrentEntityData)
    const entityData = useMemo(() => retrieveCurrentEntityData(), [retrieveCurrentEntityData]);
    const fetchProfileField = useFetchProfileField(currentField.datafield, entityData);
    const {
        handleAddClick,
        localError,
        setLocalError
    } = useHandleAddClick(currentField, entityData, handleConfirm, setValue);

    useEffect(() => {
        setValue(null);
        setLocalError('');
        fetchProfileField().then(fieldData => {
            if (fieldData !== null) {
                setValue(fieldData);
            }
        }).catch(error => {
            console.log('Error fetching profile field', error);
        });
    }, [currentField, fetchProfileField, setLocalError]);

    return (
        <VBox gap={5}>
            <VBox gap={3}>
                <ContentBox sx={{
                    width: "100%",
                    backgroundColor: theme.palette.primary.light,
                    borderRadius: '12px',
                }}>
                    <VBox>
                        <Typography variant='h6'>
                            {currentField.question}
                        </Typography>
                        {currentField.comment.length > 0 && (
                            <HBox sx={{ alignItems: 'center', justifyContent: 'flex-start' }}>
                                <Typography variant='body2'>
                                    {t('app.questions.showComment')}
                                </Typography>
                                <IconButton
                                    onClick={() => setShowComment(!showComment)}
                                    sx={{
                                        width: '40px',
                                        transition: 'transform 0.3s',
                                        transform: showComment ? 'rotate(180deg)' : 'rotate(0deg)',
                                    }}
                                >
                                    <ExpandMore />
                                </IconButton>
                            </HBox>
                        )}
                        <Collapse in={showComment}>
                            <Typography variant='body2' sx={{ marginTop: 1 }}>
                                {currentField.comment}
                            </Typography>
                        </Collapse>
                    </VBox>
                </ContentBox>
                <ProfileSectionInputSwitch value={value}
                    setValue={setValue}
                    currentField={currentField}
                    entityData={entityData}
                    error={localError} />
            </VBox>
            <VBox alignItems={'center'} sx={{
                width: '100%',
                backgroundColor: isLoading ? null : globalStyles.primaryColor,
                borderRadius: '12px'
            }}>
                <Button variant="text"
                    sx={{
                        width: '100%',
                        fontSize: '16px',
                        color: 'black',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        padding: '12px'
                    }}
                    onClick={() => handleAddClick(value, currentIndex)}
                >{t('app.questions.confirmBtn')}</Button>
            </VBox>
        </VBox>
    );
};

export default ProfileSectionField;
