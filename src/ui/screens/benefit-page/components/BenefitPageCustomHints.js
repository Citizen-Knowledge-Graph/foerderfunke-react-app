import React from 'react';
import { Typography, Box } from '@mui/material';
import { VBox } from '@/ui/shared-components/LayoutBoxes';
import theme from '@/theme';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const BenefitPageCustomHints = ({ t, isDesktop, customHints }) => {
    return (
        <VBox sx={{
            backgroundColor: theme.palette.error.light,
            color: theme.palette.white.main,
            padding: { xs: '12px', md: '16px' },
            borderRadius: theme.shape.borderRadius,
            gap: 1,
        }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <WarningAmberIcon sx={{ color: theme.palette.black.main }} />
                <Typography variant="h3" sx={{ color: theme.palette.black.main }}>
                    {t ? t('app.benefitPage.customHints.title', 'Important notes') : 'Important notes'}
                </Typography>
            </Box>
            <Box component="ul" sx={{ m: 0, pl: 3, '& li': { color: theme.palette.black.main, mb: 0.5 }}}>
                {customHints.map((hint, idx) => (
                    <Box component="li" key={idx}>
                        <Typography variant="body1" sx={{ color: theme.palette.black.main }}>
                            {hint}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </VBox>
    );
}

export default BenefitPageCustomHints;
