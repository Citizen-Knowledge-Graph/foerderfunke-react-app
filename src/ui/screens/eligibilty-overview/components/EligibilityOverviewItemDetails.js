import React from 'react';
import { Typography } from '@mui/material';
import { HBox, VBox } from '@/ui/shared-components/LayoutBoxes';
import { useSelectedBenefitsStore, useSelectedTopicsStore } from "@/ui/storage/zustand";
import RegularButton from '@/ui/shared-components/buttons/RegularButton';

const EligibilityOverviewItemDetails = ({ item, eligible }) => {
    const setSelectedBenefits = useSelectedBenefitsStore((state) => state.setSelectedBenefits);
    const clearSelectedTopics = useSelectedTopicsStore((state) => state.clear);

    return (
        <VBox sx={{ gap: 4 }}>
            <HBox sx={{ width: '50%' }}>
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
                            setSelectedBenefits([item.id]);
                        }}
                        text={'app.browseAll.checkElBtn'}
                        link={`/onboarding-welcome/`}
                        size='small'
                    />
                }
            </HBox>
        </VBox>
    );
};

export default EligibilityOverviewItemDetails;
