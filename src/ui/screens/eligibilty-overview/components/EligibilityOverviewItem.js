import React from 'react';
import { Typography } from '@mui/material';
import { HBox, VBox } from '@/ui/shared-components/LayoutBoxes';
import theme from '@/theme';
import RegularButton from '@/ui/shared-components/buttons/RegularButton';
import { useSelectedBenefitStore, useSelectedTopicsStore } from "@/ui/storage/zustand";
import EligibilityOverviewTag from './EligibilityOverviewTag';

const filterKeys = [
    'benefitCategories',
    'administrativeLevels',
    'associatedLaws',
    'providingAgencies'
];

const EligibilityOverviewItem = ({ item, eligible }) => {
    const color = eligible === 'indeterminate' ? 'black.light' : 'black.main';
    const setSelectedBenefit = useSelectedBenefitStore((state) => state.setSelectedBenefit);
    const clearSelectedTopics = useSelectedTopicsStore((state) => state.clear);

    return (
        <VBox
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
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
                    <VBox sx={{ gap: 2 }}>
                        <Typography variant='h2' sx={{ color: color, fontWeight: '400', wordBreak: 'break-word' }}>
                            {item.title}
                        </Typography>
                        {item.status === "beta" && (
                            <Typography variant='body1' sx={{ color: 'blue.main' }}>
                                Beta
                            </Typography>
                        )}
                        <Typography variant="body1">
                            {item.description}
                        </Typography>
                    </VBox>
                </HBox>
                <HBox sx={{
                    flex: '1 1 auto',
                    gap: 2,
                    flexWrap: 'wrap',
                    justifyContent: 'flex-end'
                }}>
                    <VBox
                        sx={{ alignItems: 'flex-end', gap: 1, flexWrap: 'wrap' }}
                    >
                        {eligible === 'indeterminate' &&
                            <HBox>
                                <RegularButton
                                    variant={'pinkContained'}
                                    onClick={() => {
                                        clearSelectedTopics()
                                        setSelectedBenefit(item.id);
                                    }}
                                    text={'app.browseAll.checkElBtn'}
                                    link={`/onboarding-welcome/${item.id}`}
                                    size='small'
                                />
                            </HBox>
                        }
                        <HBox>
                            <RegularButton
                                variant={'blueHollow'}
                                text={'app.browseAll.learnMoreBtn'}
                                link={`/benefit-page/${item.id}`}
                                size='small'
                            />
                        </HBox>

                    </VBox>
                </HBox>
            </HBox>
            <HBox>
                <VBox
                    sx={{
                        gap: 4,
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                    }}
                >
                    <HBox sx={{ flexWrap: 'wrap', gap: 1 }}>
                        {
                            filterKeys.flatMap(key => (
                                item[key] && (
                                    item[key].map(tag => (
                                        <EligibilityOverviewTag key={tag.id} tag={tag.label} tagType={key} />
                                    ))
                                )
                            )
                        )}
                    </HBox>

                </VBox>
            </HBox>
        </VBox>
    );
};

export default EligibilityOverviewItem;
