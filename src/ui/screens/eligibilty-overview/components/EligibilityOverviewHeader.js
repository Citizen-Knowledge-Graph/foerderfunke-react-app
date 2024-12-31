import React from 'react';
import { Link } from "react-router-dom";
import { IconButton, Typography } from '@mui/material';
import InfoIcon from "@mui/icons-material/Info";
import PersonIcon from '@mui/icons-material/Person';
import globalStyles from "../../../styles/styles";
import ContentBox from '../../../shared-components/ContentBox';
import { VBox, HBox } from "../../../shared-components/LayoutBoxes";
import useTranslation from "../../../language/useTranslation";
import theme from "../../../../theme";

const EligibilityOverviewHeader = () => {
    const { t } = useTranslation();

    return (
        <ContentBox sx={{
            width: "100%",
            backgroundColor: theme.palette.primary.main,
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
                    {t('app.browseAll.subtitle')}
                </Typography>
                <HBox>
                    <InfoIcon sx={{ fontSize: '16px' }} />
                    <Typography variant='body2'>
                        {t('app.browseAll.info')}
                    </Typography>
                </HBox>
            </VBox>
        </ContentBox >
    );
};

export default EligibilityOverviewHeader;
