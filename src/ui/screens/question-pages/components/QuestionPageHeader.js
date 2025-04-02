import React, { useState } from 'react';
import { Typography } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { HBox, VBox } from '@/ui/shared-components/LayoutBoxes';
import theme from '@/theme';

const QuestionPageHeader = ({ t, eligibleRPs }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <VBox>
            {
                eligibleRPs?.length > 0 && (
                    <VBox sx={{
                        padding: '32px',
                        backgroundColor: `${theme.palette.green.main}40`,
                        borderRadius: theme.shape.borderRadius,
                    }}>
                        <HBox sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                            <HBox sx={{ alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
                                <Typography>
                                    &#127881;
                                </Typography>
                                <HBox sx={{ gap: 1, flexWrap: 'wrap' }}>
                                    <Typography variant='body2' sx={{ fontWeight: 'bold' }}>
                                        {t('app.questions.unlockedPart1')}{' '}{eligibleRPs.length}{' '}{
                                            eligibleRPs.length > 1 ? t('app.questions.unlockedPart2Multiple') : t('app.questions.unlockedPart2Single')
                                        }
                                    </Typography>
                                    <Typography variant='body2' sx={{ fontWeight: '400' }}>
                                        {t('app.questions.unlockedPart3')}
                                    </Typography>
                                </HBox>
                            </HBox>
                            {
                                !isVisible ? (
                                    <KeyboardArrowDownIcon
                                        sx={{ fontSize: '24px' }}
                                        onClick={() => setIsVisible(true)}
                                    />
                                ) : (
                                    <KeyboardArrowUpIcon
                                        sx={{ fontSize: '24px' }}
                                        onClick={() => setIsVisible(false)}
                                    />)
                            }
                        </HBox>
                        {
                            isVisible && (
                                <ul>
                                    {eligibleRPs.map((title, index) => (
                                        <li key={index}>
                                            <Typography key={index} variant='body2' sx={{ fontWeight: 'bold' }}>
                                                {title}
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

export default QuestionPageHeader;
