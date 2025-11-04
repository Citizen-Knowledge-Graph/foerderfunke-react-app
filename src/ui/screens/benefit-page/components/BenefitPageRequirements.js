import React, { useEffect, useState } from 'react';
import theme from '@/theme';
import { HBox, VBox } from '@/ui/shared-components/LayoutBoxes';
import { Typography } from "@mui/material";
import BenefitPageMarkdownElement from './BenefitPageMarkDownElement';
import RegularButton from '@/ui/shared-components/buttons/RegularButton';
import FlowChart from '@/ui/shared-components/flow-chart/FlowChart';
import matchingEngineManager from "@/core/managers/matchingEngineManager";
import featureFlags from '@/featureFlags';
import ClearIcon from '@mui/icons-material/Clear';


const BenefitPageRequirements = ({ t, validatedStatus, isDesktop, evalGraph }) => {
    const [open, setOpen] = useState(validatedStatus);
    const [violations, setViolations] = useState(null);
    const objectIcon = `${process.env.PUBLIC_URL}/assets/images/benefit-pages/tree.svg`;

    useEffect(() => {
        async function fetchEvalGraph() {
            const violations = await matchingEngineManager.fetchWrittenViolations(evalGraph)
            setViolations(violations);
            console.log("Fetched written violations:", violations);
        }
        if (validatedStatus && evalGraph && featureFlags.writtenViolations) {
            fetchEvalGraph();
        }
    }, [validatedStatus, evalGraph]);

    return (
        <VBox
            sx={{
                gap: 4,
                backgroundColor: 'white.main',
                padding: { xs: '32px 20px', md: '32px' },
                borderRadius: theme.shape.borderRadius,
            }}
        >
            <VBox sx={{ gap: { xs: 4, md: 8 } }} >
                <HBox gap={1} sx={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <VBox sx={{ flex: 3, maxWidth: 800, gap: 4 }}>
                        <VBox sx={{ gap: 2 }}>
                            <Typography variant="h2" sx={{ fontWeight: 500, wordBreak: "break-word" }}>
                                {t('app.benefitPage.requirements.title')}
                            </Typography>
                            <BenefitPageMarkdownElement content={t('app.benefitPage.requirements.description')} />
                        </VBox>
                        {
                            featureFlags.writtenViolations && validatedStatus && violations?.length > 0 && (
                                <VBox
                                    sx={{
                                        backgroundColor: 'greyTransparent.main',
                                        borderTop: `1px solid ${theme.palette.grey.light}`,
                                        borderRadius: theme.shape.borderRadius,
                                        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
                                        padding: 2,
                                        gap: 2,
                                        flex: 1,
                                    }}
                                >
                                    <Typography variant="h3" sx={{ fontWeight: 500 }}>
                                        {t('app.benefitPage.requirements.writtenViolationsTitle')}
                                    </Typography>
                                    <VBox sx={{ gap: 2 }}>
                                        {
                                            violations.map((violation, index) => (
                                                <HBox
                                                    key={index}
                                                    sx={{ gap: 2, alignItems: 'center' }}
                                                >
                                                    <VBox
                                                        sx={{
                                                            flexShrink: 0,
                                                            width: '24px',
                                                            height: '24px',
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: 'error.light',
                                                            borderRadius: '50%',
                                                        }}
                                                    >
                                                        <ClearIcon sx={{ fontSize: '20px' }} />
                                                    </VBox>
                                                    <Typography
                                                        variant="body1" sx={{ color: 'black.main' }}
                                                        component="div"
                                                        dangerouslySetInnerHTML={{ __html: violation }}
                                                    />
                                                </HBox>
                                            ))
                                        }
                                    </VBox>
                                </VBox>
                            )
                        }
                        <RegularButton
                            onClick={() => setOpen(!open)}
                            variant={'whiteOutlinedBlue'}
                            text={open ? 'app.benefitPage.requirements.btnClose' : 'app.benefitPage.requirements.btn'}
                            size={'small'}
                        />
                    </VBox>
                    {
                        isDesktop && (
                            <VBox sx={{ flex: 1, alignItems: 'flex-end' }}>
                                <img src={objectIcon} alt="logo" style={{ width: "125px" }} />
                            </VBox>

                        )
                    }
                </HBox>
                {
                    open && (
                        <FlowChart evalGraph={evalGraph} validatedStatus={validatedStatus} />
                    )
                }
            </VBox>
        </VBox>
    );
}

export default BenefitPageRequirements;

