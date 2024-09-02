import React from 'react';
import {IconButton, Typography} from '@mui/material';
import {Link} from "react-router-dom";
import CircleIcon from '@mui/icons-material/Circle';
import globalStyles from "../../../styles/styles";
import InfoIcon from "@mui/icons-material/Info";
import PersonIcon from '@mui/icons-material/Person';
import VStack from "../../../components/VStack";
import HStack from "../../../components/HStack";

const EligibilityOverviewScreen = ({isDesktop}) => {
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
                        <VStack gap={2}>
                            <Typography sx={{...styles.titleText, fontSize: titleFontSize}}>
                                Your potential benefits
                            </Typography>
                            <Typography sx={styles.subTitleCardText}>
                                Results are based on the information you provided.
                            </Typography>
                        </VStack>
                        <VStack>
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
                        </VStack>
                    </HStack>
                </VStack>
            </VStack>
            <VStack sx={{width: '100%'}}>
                <HStack sx={styles.liableInfoBox} justifyContent={'flex-start'} alignItems={'center'}>
                    <InfoIcon sx={{fontSize: '16px'}}/>
                    <Typography sx={styles.liableInfoText}>
                        Results are not legally binding and should be considered as informational or advisory
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
    circleText: {
        fontSize: '12px'
    },
    enterInfoBox: {
        padding: '12px',
        borderRadius: '12px',
        backgroundColor:
        globalStyles.primaryColorTransparent,
    },
    enterInfoText: {
        fontSize: '12px'
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
