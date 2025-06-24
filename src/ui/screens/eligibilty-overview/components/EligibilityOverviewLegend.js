import React from 'react';
import { Typography } from '@mui/material';
import { HBox, VBox } from '@/ui/shared-components/LayoutBoxes';
import useTranslation from "@/ui/language/useTranslation";
import theme from '@/ui/theme';

const EligibilityOverviewLegend = ({iconPaths}) => {
    const { t } = useTranslation();
    console.log("iconPaths", iconPaths);
    const { eligible, ineligible, preliminaryEligible, missing } = iconPaths

    return (
        <VBox sx={{
            backgroundColor: theme.palette.white.main,
            padding: '32px',
            borderRadius: theme.shape.borderRadius,
        }}>
            <VBox sx={{
                gap: theme.spacing(4),
                maxWidth: '800px',
            }}>
                <HBox sx={{
                    alignItems: "center",
                    gap: theme.spacing(2),
                }}>
                    <img src={eligible} alt="logo" style={{ width: "16px" }} />
                    <Typography variant="body1" sx={{ fontWeight: '400' }}>
                        {t('app.browseAll.legend.probableEligible')}
                    </Typography>
                </HBox>
                <HBox sx={{
                    alignItems: "center",
                    gap: theme.spacing(2),
                    borderRadius: theme.shape.borderRadius,
                }}>
                    <img src={preliminaryEligible} alt="logo" style={{ width: "16px" }} />
                    <Typography variant="body1" sx={{ fontWeight: '400' }}>
                        {t('app.browseAll.legend.preliminaryEligible')}
                    </Typography>
                </HBox>                
                <HBox sx={{
                    alignItems: "center",
                    gap: theme.spacing(2),
                    borderRadius: theme.shape.borderRadius,
                }}>
                    <img src={ineligible} alt="logo" style={{ width: "16px" }} />
                    <Typography variant="body1" sx={{ fontWeight: '400' }}>
                        {t('app.browseAll.legend.probableNotEligible')}
                    </Typography>
                </HBox>
                <HBox sx={{
                    alignItems: "center",
                    gap: theme.spacing(2),
                    borderRadius: theme.shape.borderRadius,
                }}>
                    <img src={missing} alt="logo" style={{ width: "16px" }} />
                    <Typography variant="body1" sx={{ fontWeight: '400' }}>
                        {t('app.browseAll.legend.notEnoughData')}
                    </Typography>
                </HBox>
                <HBox sx={{
                    alignItems: "center",
                    gap: theme.spacing(2),
                    borderRadius: theme.shape.borderRadius,
                }}>
                    <Typography variant='body2' sx={{ color: 'blue.main', width: '40px' }}>
                        Beta
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: '400' }}>
                        {t('app.browseAll.legend.beta')}
                    </Typography>
                </HBox>
            </VBox>
        </VBox>
    );
};

export default EligibilityOverviewLegend;
