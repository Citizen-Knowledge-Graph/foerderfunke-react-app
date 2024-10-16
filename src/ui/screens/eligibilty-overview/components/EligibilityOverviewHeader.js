import React from 'react';
import {IconButton, Typography} from '@mui/material';
import {Link} from "react-router-dom";
import globalStyles from "../../../styles/styles";
import InfoIcon from "@mui/icons-material/Info";
import PersonIcon from '@mui/icons-material/Person';
import VStack from "../../../components/VStack";
import HStack from "../../../components/HStack";
import useTranslation from "../../../language/useTranslation";

const EligibilityOverviewScreen = ({isDesktop}) => {
    const { t } = useTranslation();
    const titleFontSize = isDesktop ? '32px' : '28px';

    return (
        <VStack>
            <VStack gap={0} alignItems={'flex-start'} sx={{
                width: '100%',
                backgroundColor: globalStyles.primaryColorTransparent,
                padding: '16px',
                borderRadius: '12px'
            }}>
                <VStack alignItems={'flex-start'} gap={3} sx={{width: '100%'}}>
                    <HStack justifyContent={'space-between'} sx={{width: '100%'}}>
                        <VStack gap={2} sx={{width: '100%'}}>
                            <HStack justifyContent={'space-between'}>
                            <Typography sx={{...styles.titleText, fontSize: titleFontSize}}>
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
                            </HStack>
                            <Typography sx={styles.subTitleCardText}>
                                {t('app.browseAll.subtitle')}
                            </Typography>
                        </VStack>
                    </HStack>
                </VStack>
            </VStack>
            <VStack sx={{width: '100%'}}>
                <HStack sx={styles.liableInfoBox} justifyContent={'flex-start'} alignItems={'center'}>
                    <InfoIcon sx={{fontSize: '16px'}}/>
                    <Typography sx={styles.liableInfoText}>
                        {t('app.browseAll.info')}
                    </Typography>
                < /HStack>
            </VStack>
        </VStack>
    );
};

const styles = {
    titleText: {
        fontWeight: 'bold',
    },
    subTitleCardText: {
        fontSize: '16px',
        fontWeight: '400',
        color: 'black',
        textTransform: 'none',
    },
    liableInfoBox: {
        padding: '12px',
        borderRadius: '12px'
    },
    liableInfoText: {
        fontSize: '14px'
    }
};

export default EligibilityOverviewScreen;
