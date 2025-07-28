import React, { useState } from 'react';
import { Divider, Typography } from '@mui/material';
import { HBox, VBox } from '@/ui/shared-components/LayoutBoxes';
import theme from '@/theme';
import RegularButton from '@/ui/shared-components/buttons/RegularButton';
import { useSelectedBenefitStore, useSelectedTopicsStore } from "@/ui/storage/zustand";
import EligibilityOverviewTag from './EligibilityOverviewTag';
import EligibilityOverviewBanner from './EligibilityOverviewBanner';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const filterKeys = [
    'benefitCategories',
    'administrativeLevels',
    'associatedLaws',
    'providingAgencies'
];

const EligibilityOverviewItem = ({ t, item, eligible }) => {
    const [isVisible, setIsVisible] = useState(false);
    const color = eligible === 'indeterminate' ? 'black.light' : 'black.main';
    const setSelectedBenefit = useSelectedBenefitStore((state) => state.setSelectedBenefit);
    const clearSelectedTopics = useSelectedTopicsStore((state) => state.clear);

    return (
        <VBox
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                border: `1px solid ${theme.palette.white.dark}`,
                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
                padding: 2,
                borderRadius: theme.shape.borderRadius,
            }}
        >
            <HBox
                sx={{
                    width: '100%',
                    justifyContent: 'flex-start',
                }}
            >
                <HBox
                    sx={{
                        flex: '5 1 0%',
                        alignItems: 'flex-start',
                        gap: 1
                    }}
                >
                    <VBox sx={{ gap: 2, width: '100%' }}>
                        <HBox sx={{ alignItems: 'flex-end', gap: 2, flexWrap: 'wrap', width: '100%' }}>
                            <HBox sx={{ alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                <HBox sx={{ alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
                                    <Typography variant='h2' sx={{ color: color, fontWeight: '400', wordBreak: 'break-word' }}>
                                        {item.title}
                                    </Typography>
                                    {item.status === "beta" && (
                                        <Typography variant='body1' sx={{ color: 'blue.main' }}>
                                            Beta
                                        </Typography>
                                    )}
                                </HBox>
                                {
                                    !isVisible ? (
                                        <AddIcon
                                            sx={{ fontSize: '24px' }}
                                            onClick={() => setIsVisible(true)}
                                        />
                                    ) : (
                                        <RemoveIcon
                                            sx={{ fontSize: '24px' }}
                                            onClick={() => setIsVisible(false)}
                                        />)
                                }
                            </HBox>
                            {isVisible && (
                                <Typography variant="body1" sx={{ wordBreak: 'break-word' }}>
                                    {item.description}
                                </Typography>
                            )}
                        </HBox>
                    </VBox>
                </HBox>
            </HBox>
            <VBox sx={{ gap: 2 }}>
                {isVisible && (
                    <HBox sx={{ flexWrap: 'wrap', gap: 1 }}>
                        {
                            filterKeys.flatMap(key => (
                                item[key] && (
                                    item[key].map(tag => (
                                        <EligibilityOverviewTag key={tag.id} tag={tag.label} tagType={key} />
                                    ))
                                )
                            ))
                        }
                    </HBox>
                )}
                <Divider sx={{ color: 'dark.light', borderStyle: 'dashed' }} />
                <HBox sx={{ flexWrap: 'wrap', gap: 2, alignItems: 'center' }}>
                    {
                        eligible !== 'indeterminate' && (
                            <HBox>
                                <EligibilityOverviewBanner t={t} eligible={eligible} />
                            </HBox>
                        )
                    }
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
                            endIcon={<ChevronRightIcon sx={{ fontSize: '16px' }} />}
                        />

                    }
                    <RegularButton
                        variant={'blackOutlined'}
                        text={'app.browseAll.learnMoreBtn'}
                        link={`/benefit-page/${item.id}`}
                        size='small'
                        endIcon={<ChevronRightIcon sx={{ fontSize: '16px' }} />}
                    />
                </HBox>
            </VBox>
        </VBox>
    );
};

export default EligibilityOverviewItem;
