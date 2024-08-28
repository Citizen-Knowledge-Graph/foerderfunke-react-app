import React from 'react';
import {Typography} from '@mui/material';
import VStack from "../../../components/VStack";
import HStack from "../../../components/HStack";
import CircleIcon from '@mui/icons-material/Circle';
import InfoIcon from '@mui/icons-material/Info';
import globalStyles from "../../../styles/styles";

const EligibilityOverviewScreen = () => {
    return (
        <VStack gap={0} alignItems={'flex-start'}>
            <VStack gap={3}>
                <VStack gap={1}>
                    <Typography sx={styles.titleText}>
                        Your potential benefits
                    </Typography>
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
                    <Typography sx={styles.subTitleCardText}>
                        Results are based on the information you provided.
                    </Typography>
                </VStack>
                <VStack>
                    <HStack justifyContent={'flex-start'}>
                        <HStack sx={styles.enterInfoBox}>
                            <Typography>
                                Enter more information in your profile and discover if you are eligible for more
                                benefits
                            </Typography>
                        </HStack>
                    </HStack>
                </VStack>
                <VStack>
                    <HStack justifyContent={'flex-start'}>
                        <HStack sx={styles.liableInfoBox}>
                            <InfoIcon sx={{color: globalStyles.tertiaryColor}}/>
                            <Typography>
                                Results are not legally binding.
                            </Typography>
                        </HStack>
                    </HStack>
                </VStack>
            </VStack>
        </VStack>
    );
};

const styles = {
    titleText: {
        fontWeight: 'bold',
        fontSize: '32px',
    },
    subTitleCardText: {
        fontSize: '16px',
        fontWeight: '400'
    },
    circleText: {
        fontSize: '12px'
    },
    enterInfoBox: {
        padding: '16px',
        borderRadius: '12px',
        backgroundColor: globalStyles.primaryColorTransparent,
    },
    liableInfoBox: {
        padding: '16px',
        borderRadius: '12px',
        backgroundColor: globalStyles.tertiaryColorTransparent,
    }
};

export default EligibilityOverviewScreen;
