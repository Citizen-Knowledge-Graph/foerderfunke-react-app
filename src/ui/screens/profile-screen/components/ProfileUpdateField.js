import React, { useState } from 'react';
import { Typography, Collapse } from '@mui/material';
import { VBox, HBox } from '@/ui/shared-components/LayoutBoxes';
import { ExpandMore } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import theme from "@/theme";
import RegularButton from '@/ui/shared-components/buttons/RegularButton';
import ProfileUpdateInputSwitch from './ProfileUpdateInputSwitch';

const ProfileUpdateField = ({
    t,
    datafieldDetails,
    value,
    setValue,
    error,
    handleAddClick
}) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <VBox sx={{ 
            gap: 2,
            border: `1px solid ${theme.palette.white.dark}`,
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
            padding: 4,
            borderRadius: theme.shape.borderRadius,
        }}>
            <VBox>
                <Typography variant='h4' sx={{ fontWeight: '400' }}>
                    {datafieldDetails?.question}
                </Typography>
                {datafieldDetails?.comment.length > 0 && (
                    <HBox sx={{ alignItems: 'center' }}>
                        <Typography variant='body2'>
                            {t('app.questions.showComment')}
                        </Typography>
                        <IconButton
                            onClick={() => setIsVisible(!isVisible)}
                            sx={{
                                width: '40px',
                                transition: 'transform 0.3s',
                                transform: isVisible ? 'rotate(180deg)' : 'rotate(0deg)',
                            }}
                        >
                            <ExpandMore />
                        </IconButton>
                    </HBox>
                )}
                {
                    isVisible && (
                        <Collapse in={isVisible}>
                            <Typography variant='body2' sx={{ marginTop: 1 }}>
                                {datafieldDetails?.comment}
                            </Typography>
                        </Collapse>
                    )
                }
            </VBox>
            <HBox sx={{ 
                padding: "32px", 
                backgroundColor: 'white.main', 
                borderRadius: theme.shape.borderRadius 
            }}>
                <ProfileUpdateInputSwitch 
                    t={t}
                    value={value}
                    setValue={setValue}
                    datafieldDetails={datafieldDetails}
                    error={error} />
            </HBox>
            <RegularButton 
                variant={'blueContained'} 
                onClick={() => handleAddClick(value)}
                text={'app.questions.confirmBtn'}
                size={'small'}
            />        
        </VBox>


    );
};

export default ProfileUpdateField;
