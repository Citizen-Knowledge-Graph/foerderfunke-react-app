import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { IconButton, Typography, Collapse, Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { VBox, HBox } from "../../../shared-components/LayoutBoxes";
import useTranslation from "../../../language/useTranslation";
import EligibilityOverviewLegend from './EligibilityOverviewLegend';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const EligibilityOverviewHeader = ({ iconPaths }) => {
    const { t } = useTranslation();
    const [showLegend, setShowLegend] = useState(false);

    return (
        <VBox sx={{ width: "100%", alignItems: "flex-start", gap: { xs: 4, md: 8 } }}>
            <VBox>
                <Typography variant="h1">
                    {t('app.browseAll.header')}
                </Typography>
                <HBox sx={{ alignItems: 'center' }}>
                    <Button sx={{
                        gap: 1,
                        padding: '1',
                        backgroundColor: 'transparent',
                        color: 'black.ligth',
                        '&:hover': {
                            backgroundColor: 'transparent',
                            color: 'blue.main',
                        }
                    }} component={Link} to='/profile-overview' variant="text">
                        <PersonIcon data-testid="chevron-left-icon" sx={{ fontSize: '18px' }} />
                        <Typography variant="body1" sx={{ color: 'inherit' }}>
                            {t('app.browseAll.profileBtn')}
                        </Typography>
                    </Button>
                </HBox>
            </VBox>
            <VBox sx={{ maxWidth: '800px' }}>
                <Typography variant='h2'>
                    {t('app.browseAll.disclaimerTitle')}
                </Typography>
                <Typography variant='body1'>
                {t('app.browseAll.disclaimerText')}
                </Typography>
            </VBox>
            <VBox sx={{ maxWidth: '800px' }}>
                <Typography variant='h2'>
                    {t('app.browseAll.preliminaryEligibleTitle')}
                </Typography>
                <Typography variant='body1'>
                    {t('app.browseAll.preliminaryEligibleText')}
                </Typography>
            </VBox>
            <VBox>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    {t('app.browseAll.legendTitle')}
                </Typography>
                <HBox sx={{ alignItems: 'center', cursor: 'pointer', maxWidth: '800px' }} onClick={() => setShowLegend(!showLegend)}>
                    <Typography variant="body1">
                        {t('app.browseAll.legendText')}
                    </Typography>
                    <IconButton
                        sx={{
                            transition: 'transform 0.3s',
                            transform: showLegend ? 'rotate(180deg)' : 'rotate(0deg)'
                        }}
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </HBox>
                {
                    showLegend &&
                    <Collapse in={showLegend}>
                        <EligibilityOverviewLegend iconPaths={iconPaths} />
                    </Collapse>
                }
            </VBox>
        </VBox>
    );
};

export default EligibilityOverviewHeader;
