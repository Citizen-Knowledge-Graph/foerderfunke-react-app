import React from 'react';
import {Typography} from '@mui/material';
import VStack from "../../../components/VStack";
import HStack from "../../../components/HStack";
import CircleIcon from '@mui/icons-material/Circle';
import globalStyles from "../../../styles/styles";
import InfoIcon from "@mui/icons-material/Info";

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
                <VStack alignItems={'flex-start'} gap={3}>
                    <VStack gap={1}>
                        <Typography sx={{...styles.titleText, fontSize: titleFontSize}}>
                            Your potential benefits
                        </Typography>
                        <Typography sx={styles.subTitleCardText}>
                            Results are based on the information you provided.
                        </Typography>
                    </VStack>
                    <HStack justifyContent={'flex-start'}>
                        <HStack justifyContent={'flex-start'} alignItems={'center'}>
                            <CircleIcon sx={{color: globalStyles.secondaryColor}}/>
                            <Typography sx={styles.circleText}>
                                Eligible
                            </Typography>
                        </HStack>
                        <HStack justifyContent={'flex-start'} alignItems={'center'}>
                            <CircleIcon sx={{color: globalStyles.colorLightGrey}}/>
                            <Typography sx={styles.circleText}>
                                Missing data
                            </Typography>
                        </HStack>
                        <HStack justifyContent={'flex-start'} alignItems={'center'}>
                            <CircleIcon sx={{color: globalStyles.colorRed}}/>
                            <Typography sx={styles.circleText}>
                                Not eligible
                            </Typography>
                        </HStack>
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
        fontWeight: '400'
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
        borderRadius: '12px',
        backgroundColor:
        globalStyles.colorSteelBlueTransparent,
    },
    liableInfoText: {
        fontSize: '14px'
    }
};

export default EligibilityOverviewScreen;
