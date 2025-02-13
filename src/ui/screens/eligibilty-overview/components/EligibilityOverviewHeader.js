import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { IconButton, Typography, Collapse } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import globalStyles from "../../../styles/styles";
import ContentBox from '../../../shared-components/ContentBox';
import { VBox, HBox } from "../../../shared-components/LayoutBoxes";
import useTranslation from "../../../language/useTranslation";
import theme from "../../../../theme";
import EligibilityOverviewLegend from './EligibilityOverviewLegend';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const EligibilityOverviewHeader = () => {
    const { t } = useTranslation();
    const [showLegend, setShowLegend] = useState(false);

    return (
        <ContentBox sx={{
            width: "100%",
            backgroundColor: theme.palette.primary.light,
        }}>
            <VBox sx={{ alignItems: "flex-start", gap: theme.spacing(2) }}>
                <HBox sx={{ width: "100%", justifyContent: 'space-between' }}>
                    <Typography variant="h4">
                        {t('app.browseAll.header')}
                    </Typography>
                    <IconButton
                        component={Link}
                        to='/profile-overview'
                        sx={{
                            width: 40,
                            height: 40,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'white',
                            '&:hover': {
                                backgroundColor: globalStyles.colorLightGrey,
                            },
                        }}
                    >
                        <PersonIcon sx={{ fontSize: 20, color: 'black' }} />
                    </IconButton>
                </HBox>
                <Typography variant='body1'>
                    {t('app.browseAll.subtitle')}{" "}{t('app.browseAll.info')}
                </Typography>
                {/* Expandable Legend Section */}
                <HBox sx={{ alignItems: 'center', cursor: 'pointer' }} onClick={() => setShowLegend(!showLegend)}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                        {t('app.browseAll.legendTitle')}
                    </Typography>
                    <IconButton
                        sx={{
                            transition: 'transform 0.3s',
                            transform: showLegend ? 'rotate(180deg)' : 'rotate(0deg)',
                            marginLeft: '8px',
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
        </ContentBox >
    );
};

export default EligibilityOverviewHeader;
