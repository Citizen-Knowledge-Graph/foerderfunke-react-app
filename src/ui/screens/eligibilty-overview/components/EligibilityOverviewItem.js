import React from 'react';
import { Typography } from '@mui/material';
import { HBox, VBox } from '@/ui/shared-components/LayoutBoxes';
import theme from '@/theme';
import RegularButton from '@/ui/shared-components/buttons/RegularButton';
import { useSelectedBenefitStore, useSelectedTopicsStore } from "@/ui/storage/zustand";

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
                    display: 'flex',
                    flex: '1 1 auto',
                    width: '100%',
                    justifyContent: 'flex-start',
                }}
            >
                <HBox
                    sx={{
                        flex: '1 1 0%',
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
                        <HBox sx={{ gap: 1, flexWrap: 'wrap' }}>
                            <HBox sx={{ backgroundColor: 'green.main', padding: '6px 10px', borderRadius: theme.shape.borderRadius }}>
                                <Typography variant="body1">
                                    Sie haben womöglich Anspruch!
                                </Typography>
                            </HBox>
                        </HBox>
                    </VBox>
                </HBox>
                <HBox
                    sx={{
                        display: 'flex',
                        flex: '1 1 0%',
                        justifyContent: 'flex-end',
                    }}
                >
                    <VBox
                        sx={{
                            gap: 8,
                            justifyContent: 'space-between',
                            alignItems: 'flex-end',
                        }}
                    >
                        <HBox sx={{ justifyContent: 'flex-end', flexWrap: 'wrap', gap: 1 }}>
                            <HBox sx={{
                                border: `1px solid ${theme.palette.green.main}`,
                                padding: '6px 10px',
                                borderRadius: theme.shape.borderRadius,
                            }}>
                                <Typography variant='body2' sx={{}}>
                                    Bundesleistung
                                </Typography>
                            </HBox>
                            <HBox sx={{
                                border: `1px solid ${theme.palette.pink.main}`,
                                padding: '6px 10px',
                                borderRadius: theme.shape.borderRadius,
                            }}>
                                <Typography variant='body2' sx={{}}>
                                    Agentur für Arbeit
                                </Typography>
                            </HBox>
                            <HBox sx={{
                                border: `1px solid ${theme.palette.blue.main}`,
                                padding: '6px 10px',
                                borderRadius: theme.shape.borderRadius,
                            }}>
                                <Typography variant='body2' sx={{}}>
                                    Rehaibilitierung und Teilhabe
                                </Typography>
                            </HBox>
                        </HBox>
                        <HBox sx={{ gap: 2, flexWrap: 'wrap' }}>
                            <RegularButton
                                variant={'blueHollow'}
                                text={'app.browseAll.learnMoreBtn'}
                                link={`/benefit-page/${item.id}`}
                                size='small'
                            />
                            {eligible === 'indeterminate' &&
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
                            }
                        </HBox>
                    </VBox>
                </HBox>
            </HBox>
        </VBox>
    );
};

export default EligibilityOverviewItem;
