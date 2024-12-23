import React, {useState} from 'react';
import VStack from "../../../shared-components/VStack";
import {ValidationResult} from "@foerderfunke/matching-engine";
import HStack from "../../../shared-components/HStack";
import {Typography} from "@mui/material";
import globalStyles from "../../../styles/styles";
import RedeemIcon from '@mui/icons-material/Redeem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {useMetadataStore} from "../../../storage/zustand";
import Divider from "@mui/material/Divider";

const ProfileSectionTopHeader = ({validationReport}) => {
    const [benefitsListVisible, setBenefitsListVisible] = useState(false);
    const metadata = useMetadataStore((state) => state.metadata);

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
                                    <RedeemIcon sx={{fontSize: '24px', color: globalStyles.secondaryColor}}/>
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
                                        <>
                                            <Divider sx={{backgroundColor: globalStyles.colorLightGreyTransparent}}/>
                                            <VStack alignItems={'center'}>
                                                {eligibleRpUris.map((rpUri, index) => (

                                                    <Typography key={index} sx={styles.benefitsUnlocked}>
                                                        {metadata.rp[rpUri].title}
                                                    </Typography>
                                                ))}
                                            </VStack>
                                        </>
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
    },
    benefitsUnlocked: {
        fontSize: '14px',
        padding: '8px',
        fontWeight: 'bold',
        color: globalStyles.secondaryColor
    }
};

export default ProfileSectionTopHeader;
