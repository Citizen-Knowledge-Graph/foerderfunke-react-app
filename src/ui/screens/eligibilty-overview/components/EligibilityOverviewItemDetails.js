import React from 'react';
import { Typography } from '@mui/material';
import { HBox, VBox } from '../../../shared-components/LayoutBoxes';
import { useSelectedBenefitStore, useSelectedTopicsStore } from "@/ui/storage/zustand";
import theme from '@/theme';
import RegularButton from '@/ui/shared-components/buttons/RegularButton';

const EligibilityOverviewItemDetails = ({ item, eligible }) => {
    const setSelectedBenefit = useSelectedBenefitStore((state) => state.setSelectedBenefit);
    const clearSelectedTopics = useSelectedTopicsStore((state) => state.clear);

    return (
        <VBox sx={{ gap: theme.spacing(2) }}>
            <HBox sx={{ maxWidth: '800px' }}>
                <Typography variant="body1">
                    {item.description}
                </Typography>
            </HBox>
            <HBox sx={{ gap: 2, flexWrap: 'wrap' }}>
                <RegularButton
                        variant={'blackOutlined'}
                        text={'app.browseAll.learnMoreBtn'}
                        link={`/benefit-page/${item.id}`}
                        size='small'
                    />
                {eligible === 'indeterminate' &&
                    <RegularButton
                        variant={'blueHollow'}
                        onClick={() => {
                            clearSelectedTopics()
                            setSelectedBenefit(item.id);
                        }}
                        text={'app.browseAll.checkElBtn'}
                        link={`/onboarding-welcome/${item.id}`}
                        size='small'
                    />
                }
            </HBox>
        </VBox>
    );
};

export default EligibilityOverviewItemDetails;
