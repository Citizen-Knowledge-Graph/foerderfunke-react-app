import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { HBox, VBox } from '@/ui/shared-components/LayoutBoxes';
import theme from '@/theme';
import RegularButton from '@/ui/shared-components/buttons/RegularButton';
import { useSelectedBenefitsStore, useSelectedTopicsStore } from "@/ui/storage/zustand";
import EligibilityOverviewTag from './EligibilityOverviewTag';
import EligibilityOverviewBanner from './EligibilityOverviewBanner';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const filterKeys = [
    'benefitCategories',
    'administrativeLevels',
    'associatedLaws',
    'providingAgencies',
    'tags'
];

const EligibilityOverviewItem = ({ t, item, eligible }) => {
    const [isVisible, setIsVisible] = useState(false);
    const setSelectedBenefits = useSelectedBenefitsStore((state) => state.setSelectedBenefits);
    const clearSelectedTopics = useSelectedTopicsStore((state) => state.clear);

    return (
        <VBox
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                border: `1px solid ${theme.palette.white.dark}`,
                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
                padding: 4,
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
                                    <Typography variant='h2' sx={{ fontWeight: '400', wordBreak: 'break-word' }}>
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
            <VBox sx={{ gap: 4, flex: 1 }}>
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
                <HBox sx={{
                    flexWrap: 'wrap',
                    gap: 2,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    '& > :only-child': { marginLeft: 'auto' }
                }}>
                    <HBox sx={{ gap: 2, alignItems: 'center', flex: 4 }}>
                        {
                            eligible !== 'indeterminate' && (
                                <HBox>
                                    <EligibilityOverviewBanner t={t} eligible={eligible} />
                                </HBox>
                            )
                        }
                        {!isVisible && (
                            <HBox sx={{ flexWrap: 'wrap', gap: 1 }}>
                                {item.benefitCategories?.map(tag => (
                                    <EligibilityOverviewTag
                                        key={tag.id}
                                        tag={tag.label}
                                        tagType="benefitCategories"
                                    />
                                ))}
                            </HBox>
                        )}
                    </HBox>
                    <HBox sx={{ justifyContent: 'flex-end', flexWrap: 'wrap', gap: 2, alignItems: 'center', flex: 3 }}>
                        <RegularButton
                            variant={'blackOutlined'}
                            text={'app.browseAll.learnMoreBtn'}
                            link={`/benefit-page/${item.id}`}
                        />
                        {eligible === 'indeterminate' &&
                            <RegularButton
                                variant={'blueHollow'}
                                onClick={() => {
                                    clearSelectedTopics()
                                    setSelectedBenefits([item.id]);
                                }}
                                text={'app.browseAll.checkElBtn'}
                                link={`/onboarding-welcome`}
                                endIcon={<ChevronRightIcon sx={{ fontSize: '16px' }} />}
                            />
                        }
                    </HBox>
                </HBox>
            </VBox>
        </VBox>
    );
};

export default EligibilityOverviewItem;
