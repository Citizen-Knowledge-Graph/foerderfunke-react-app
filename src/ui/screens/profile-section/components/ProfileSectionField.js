import React, { useEffect, useMemo, useState } from 'react';
import { Typography, Button, Collapse } from '@mui/material';
import { VBox, HBox } from '../../../shared-components/LayoutBoxes';
import theme from "../../../../theme";

import useFetchProfileField from "../hooks/useFetchProfileField";
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
    const [showComment, setShowComment] = useState(false);
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
        <VBox sx={{ gap: theme.spacing(4) }}>
            <VBox>
                <Typography variant='h4' sx={{ fontWeight: '400' }}>
                    {currentField.question}
                </Typography>
                {currentField.comment.length > 0 && (
                    <HBox sx={{ alignItems: 'center' }}>
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
                {
                    showComment && (
                        <Collapse in={showComment}>
                            <Typography variant='body2' sx={{ marginTop: 1 }}>
                                {currentField.comment}
                            </Typography>
                        </Collapse>
                    )
                }
            </VBox>
            <ProfileSectionInputSwitch value={value}
                setValue={setValue}
                currentField={currentField}
                entityData={entityData}
                error={localError} />
            <HBox>
                <Button variant="contained"
                    sx={{
                        padding: "16px 28px",
                        backgroundColor: theme.palette.blue.dark,
                        color: theme.palette.white.main,
                    }}
                    onClick={() => handleAddClick(value, currentIndex)}
                >
                    <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'inherit' }}>{t('app.questions.confirmBtn')}</Typography>
                </Button>
            </HBox>
        </VBox>


    );
};

export default ProfileSectionField;
