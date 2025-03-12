import React from 'react';
import { Typography } from '@mui/material';
import { HBox, VBox } from '../../../shared-components/LayoutBoxes';
import useTranslation from "../../../language/useTranslation";
import theme from '../../../../theme';
import { Circle } from "@mui/icons-material";

const EligibilityOverviewLegend = () => {
    const { t } = useTranslation();

    return (
        <VBox sx={{
            gap: theme.spacing(4),
            backgroundColor: theme.palette.white.main,
            padding: '32px',
            borderRadius: theme.shape.borderRadius,
        }}>

            <HBox sx={{
                alignItems: "center",
                gap: theme.spacing(2),
            }}>
                <Circle sx={{ color: theme.palette.secondary.main, width: '40px' }} />
                <Typography variant="h6" sx={{ fontWeight: '400' }}>
                    {t('app.browseAll.legend.probableEligible')}
                </Typography>
            </HBox>
            <HBox sx={{
                alignItems: "center",
                gap: theme.spacing(2),
                borderRadius: theme.shape.borderRadius,
            }}>
                <Circle sx={{ color: theme.palette.error.main, width: '40px' }} />
                <Typography variant="h6" sx={{ fontWeight: '400' }}>
                    {t('app.browseAll.legend.probableNotEligible')}
                </Typography>
            </HBox>
            <HBox sx={{
                alignItems: "center",
                gap: theme.spacing(2),
                borderRadius: theme.shape.borderRadius,
            }}>
                <Circle sx={{ color: theme.palette.custom.lightGrey, width: '40px' }} />
                <Typography variant="h6" sx={{ fontWeight: '400' }}>
                    {t('app.browseAll.legend.notEnoughData')}
                </Typography>
            </HBox>
            <HBox sx={{
                alignItems: "center",
                gap: theme.spacing(2),
                borderRadius: theme.shape.borderRadius,
            }}>
                <Typography variant='body2' sx={{ color: 'warning.main', width: '40px' }}>
                    Beta
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: '400' }}>
                    {t('app.browseAll.legend.beta')}
                </Typography>
            </HBox>
        </VBox>
    );
};

export default EligibilityOverviewLegend;
