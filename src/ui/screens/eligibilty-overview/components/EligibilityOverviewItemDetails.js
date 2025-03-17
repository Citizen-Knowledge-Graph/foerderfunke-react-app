import React from 'react';
import { Link } from "react-router-dom";
import { Button, Typography } from '@mui/material';
import { HBox, VBox } from '../../../shared-components/LayoutBoxes';
import useTranslation from "../../../language/useTranslation";
import { useSelectedBenefitStore, useSelectedTopicsStore } from "../../../storage/zustand";
import theme from '../../../../theme';

const EligibilityOverviewItemDetails = ({ item, eligible }) => {
    const { t } = useTranslation();
    const setSelectedBenefit = useSelectedBenefitStore((state) => state.setSelectedBenefit);
    const clearSelectedTopics = useSelectedTopicsStore((state) => state.clear);

    return (
        <VBox sx={{ gap: theme.spacing(2) }}>
            <HBox sx={{ maxWidth: '800px' }}>
                <Typography variant="body1">
                    {item.description}
                </Typography>
            </HBox>
            <HBox sx={{ gap: theme.spacing(2), flexWrap: 'wrap' }}>
                <Button
                    variant="text"
                    sx={{
                        color: 'pink.main',
                        padding: '0',
                        '&:hover': {
                            backgroundColor: 'transparent',
                            color: theme.palette.black.main,
                        }
                    }}
                    component={Link}
                    to={`/benefit-page/${item.id}`}>
                    <Typography variant="body1" sx={{ color: 'inherit', fontWeight: 'bold', textDecoration: 'underline' }}>
                        {t('app.browseAll.learnMoreBtn')}
                    </Typography>
                </Button>
                {eligible === 'indeterminate' &&
                    <Button
                        variant="text"
                        onClick={() => {
                            clearSelectedTopics()
                            setSelectedBenefit(item.id);
                        }}
                        sx={{
                            color: 'blue.main',
                            padding: '0',
                            '&:hover': {
                                backgroundColor: 'transparent',
                                color: theme.palette.black.main,
                            }
                        }}
                        component={Link}
                        to={`/onboarding-welcome/${item.id}`}>
                        <Typography variant="body1" sx={{ color: 'inherit', fontWeight: 'bold', textDecoration: 'underline' }}>
                            {t('app.browseAll.checkElBtn')}
                        </Typography>
                    </Button>
                }
            </HBox>
        </VBox>
    );
};

export default EligibilityOverviewItemDetails;
