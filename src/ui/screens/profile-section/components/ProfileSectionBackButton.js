import React from 'react';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { Typography, Button } from '@mui/material';
import { HBox } from '../../../shared-components/LayoutBoxes';
import theme from "../../../../theme";
import useTranslation from "../../../language/useTranslation";


const ProfileSectionBackButton = ({ handleBack }) => {
    const { t } = useTranslation();

    return (
        <HBox>
            <Button
                variant='text'
                sx={{
                    gap: theme.spacing(1),
                    padding: '0',
                    backgroundColor: 'transparent',
                    color: 'black.light',
                    '&:hover': {
                        backgroundColor: 'transparent',
                        color: 'black.light',
                    },
                    '&:focus': {
                        backgroundColor: 'transparent',
                        color: 'black.light',
                    }
                }}
                onClick={handleBack}
            >
                <ArrowBackIcon data-testid="chevron-left-icon" sx={{ fontSize: '16px' }} />
                <Typography variant="body2" sx={{ color: 'inherit' }}>
                    {t('app.nav.previousQuestion')}
                </Typography>
            </Button>
        </HBox>
    )
}

export default ProfileSectionBackButton;
