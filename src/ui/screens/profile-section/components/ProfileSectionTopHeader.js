import React, { useState } from 'react';
import { ValidationResult } from "@foerderfunke/matching-engine";
import { Typography } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useMetadataStore } from "../../../storage/zustand";
import useTranslation from "../../../language/useTranslation";
import { HBox, VBox } from '../../../shared-components/LayoutBoxes';
import theme from '../../../../theme';

const ProfileSectionTopHeader = ({ validationReport }) => {
    const { t } = useTranslation();
    const [benefitsListVisible, setBenefitsListVisible] = useState(false);
    const metadata = useMetadataStore((state) => state.metadata);

    const eligibleRpUris = validationReport.reports
        .filter(report => report.result === ValidationResult.ELIGIBLE)
        .map(report => report.rpUri);

    return (
        <VBox>
            {
                eligibleRpUris.length > 0 && (
                    <VBox sx={{
                        padding: '32px',
                        backgroundColor: `${theme.palette.green.main}40`,
                        borderRadius: theme.shape.borderRadius,
                    }}>
                        <HBox sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                            <HBox sx={{ alignItems: 'center', gap: theme.spacing(2), flexWrap: 'wrap' }}>
                                <Typography>
                                    &#127881;
                                </Typography>
                                <HBox sx={{ gap: theme.spacing(1), flexWrap: 'wrap' }}>
                                    <Typography variant='body2' sx={{ fontWeight: 'bold' }}>
                                        {t('app.questions.unlockedPart1')}{' '}{eligibleRpUris.length}{' '}{
                                            eligibleRpUris.length > 1 ? t('app.questions.unlockedPart2Multiple') : t('app.questions.unlockedPart2Single')
                                        }
                                    </Typography>
                                    <Typography variant='body2' sx={{ fontWeight: '400' }}>
                                        {t('app.questions.unlockedPart3')}
                                    </Typography>
                                </HBox>
                            </HBox>
                            {
                                !benefitsListVisible ? (
                                    <KeyboardArrowDownIcon
                                        sx={{ fontSize: '24px' }}
                                        onClick={() => setBenefitsListVisible(true)}
                                    />
                                ) : (
                                    <KeyboardArrowUpIcon
                                        sx={{ fontSize: '24px' }}
                                        onClick={() => setBenefitsListVisible(false)}
                                    />)
                            }
                        </HBox>
                        {
                            benefitsListVisible && (
                                <ul>
                                    {eligibleRpUris.map((rpUri, index) => (
                                        <li key={index}>
                                            <Typography key={index} variant='body2' sx={{ fontWeight: 'bold' }}>
                                                {metadata.rp[rpUri].title}
                                            </Typography>
                                        </li>
                                    ))}
                                </ul>
                            )
                        }
                    </VBox>
                )
            }
        </VBox>
    );
};

export default ProfileSectionTopHeader;
