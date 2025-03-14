import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { IconButton, Typography, Collapse, Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { VBox, HBox } from "../../../shared-components/LayoutBoxes";
import useTranslation from "../../../language/useTranslation";
import theme from "../../../../theme";
import EligibilityOverviewLegend from './EligibilityOverviewLegend';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const EligibilityOverviewHeader = ({isDesktop}) => {
    const { t } = useTranslation();
    const [showLegend, setShowLegend] = useState(false);
    const gap = isDesktop ? theme.spacing(8) : theme.spacing(4);

    return (
        <VBox sx={{ width: "100%", alignItems: "flex-start", gap: gap }}>
            <VBox sx={{justifyContent: 'space-between' }}>
                <Typography variant="h1">
                    {t('app.browseAll.header')}
                </Typography>
                <HBox sx={{ alignItems: 'center' }}>
                    <Button sx={{
                        gap: theme.spacing(1),
                        padding: '0',
                        backgroundColor: 'transparent',
                        color: theme.palette.blue.main,
                        '&:hover': {
                            backgroundColor: 'transparent',
                            color: theme.palette.black.main,
                        }
                    }} component={Link} to='/profile-overview' variant="text">
                        <PersonIcon data-testid="chevron-left-icon" sx={{ fontSize: '18px' }} />
                        <Typography variant="body1" sx={{ color: 'inherit' }}>
                            {t('app.browseAll.profileBtn')}
                        </Typography>
                    </Button>
                </HBox>
            </VBox>
            <VBox sx={{ width: '100%', gap: theme.spacing(2) }}>
                <HBox sx={{ maxWidth: '840px' }}>
                    <Typography variant='body1'>
                        {t('app.browseAll.subtitle')}{" "}{t('app.browseAll.info')}
                    </Typography>
                </HBox>
                <HBox sx={{ alignItems: 'center', cursor: 'pointer' }} onClick={() => setShowLegend(!showLegend)}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                        {t('app.browseAll.legendTitle')}
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
                        <EligibilityOverviewLegend />
                    </Collapse>
                }
            </VBox>

        </VBox>
    );
};

export default EligibilityOverviewHeader;
