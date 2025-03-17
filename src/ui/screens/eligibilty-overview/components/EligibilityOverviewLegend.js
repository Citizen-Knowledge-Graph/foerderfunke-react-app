import React from 'react';
import { Typography } from '@mui/material';
import { HBox, VBox } from '../../../shared-components/LayoutBoxes';
import useTranslation from "../../../language/useTranslation";
import theme from '../../../../theme';

const EligibilityOverviewLegend = () => {
    const { t } = useTranslation();

    const eligibleIcon = `${process.env.PUBLIC_URL}/assets/images/application/icon-image-eligible.svg`;
    const ineligibleIcon = `${process.env.PUBLIC_URL}/assets/images/application/icon-image-ineligible.svg`;
    const missingIcon = `${process.env.PUBLIC_URL}/assets/images/application/icon-image-missing.svg`;

    console.log("we are rendering");

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
                    <img src={eligibleIcon} alt="logo" style={{ width: "16px" }} />
                    <Typography variant="body1" sx={{ fontWeight: '400' }}>
                        {t('app.browseAll.legend.probableEligible')}
                    </Typography>
                </HBox>
                <HBox sx={{
                    alignItems: "center",
                    gap: theme.spacing(2),
                    borderRadius: theme.shape.borderRadius,
                }}>
                    <img src={ineligibleIcon} alt="logo" style={{ width: "16px" }} />
                    <Typography variant="body1" sx={{ fontWeight: '400' }}>
                        {t('app.browseAll.legend.probableNotEligible')}
                    </Typography>
                </HBox>
                <HBox sx={{
                    alignItems: "center",
                    gap: theme.spacing(2),
                    borderRadius: theme.shape.borderRadius,
                }}>
                    <img src={missingIcon} alt="logo" style={{ width: "16px" }} />
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
