import React, {useState} from 'react';
import VStack from "../../../components/VStack";
import {ValidationResult} from "@foerderfunke/matching-engine";
import HStack from "../../../components/HStack";
import {Typography} from "@mui/material";
import globalStyles from "../../../styles/styles";
import RedeemIcon from '@mui/icons-material/Redeem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ProfileSectionTopHeader = ({validationReport}) => {
    const [benefitsListVisible, setBenefitsListVisible] = useState(false);

    const eligibleRpUris = validationReport.reports
        .filter(report => report.result === ValidationResult.ELIGIBLE)
        .map(report => report.rpUri);

    return (
        <VStack>
            {
                eligibleRpUris.length > 0 && (
                    <VStack>
                        <HStack>
                            <VStack sx={styles.benefitsUnlockedBox}>
                                <HStack justifyContent={'space-between'} alignItems={'center'}>
                                    <RedeemIcon sx={{fontSize: '24px', color: globalStyles.tertiaryColor}}/>
                                    <VStack gap={0}>
                                        <Typography sx={styles.benefitsUnlockedText}>
                                            You have unlocked {eligibleRpUris.length} benefits
                                        </Typography>
                                        <Typography sx={styles.benefitsUnlockedSubText}>
                                            based on your answers.
                                        </Typography>
                                    </VStack>
                                    {
                                        !benefitsListVisible ? (
                                            <KeyboardArrowDownIcon
                                                sx={{fontSize: '24px', color: globalStyles.secondaryColor}}
                                                onClick={() => setBenefitsListVisible(true)}
                                            />
                                        ) : (
                                            <KeyboardArrowUpIcon
                                                sx={{fontSize: '24px', color: globalStyles.secondaryColor}}
                                                onClick={() => setBenefitsListVisible(false)}
                                            />)
                                    }
                                </HStack>
                                {
                                    benefitsListVisible && (
                                        <VStack>
                                            {eligibleRpUris.map((scheme, index) => (
                                                <Typography key={index} sx={styles.benefitsUnlockedSubText}>
                                                    {scheme}
                                                </Typography>
                                            ))}
                                        </VStack>
                                    )
                                }
                            </VStack>
                        </HStack>
                    </VStack>
                )
            }
        </VStack>
    );
};

const styles = {
    updateInfoBox: {
        padding: '12px',
        borderRadius: '12px',
        backgroundColor: globalStyles.tertiaryColorTransparent,
    },
    updateInfoText: {
        fontSize: '12px'
    },
    questionBox: {
        padding: '12px',
        borderRadius: '12px',
    },
    questionText: {
        fontSize: '12px'
    },
    benefitsUnlockedBox: {
        width: "100%",
        padding: '12px',
        borderRadius: '12px',
        backgroundColor: globalStyles.secondaryColorTransparent,
    },
    benefitsUnlockedText: {
        fontSize: '14px',
        fontWeight: 'bold',
        color: globalStyles.secondaryColor
    },
    benefitsUnlockedSubText: {
        fontSize: '14px',
        color: globalStyles.secondaryColor
    }
};

export default ProfileSectionTopHeader;
