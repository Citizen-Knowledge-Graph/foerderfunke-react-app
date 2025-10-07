import React, { useState } from 'react';
import theme from '@/theme';
import { HBox, VBox } from '@/ui/shared-components/LayoutBoxes';
import { Typography } from "@mui/material";
import BenefitPageMarkdownElement from './BenefitPageMarkDownElement';
import RegularButton from '@/ui/shared-components/buttons/RegularButton';
import FlowChart from '@/ui/shared-components/flow-chart/FlowChart';

const BenefitPageRequirements = ({ t, isDesktop, evalGraph, benefitPageData }) => {
    const [open, setOpen] = useState(false);
    const objectIcon = `${process.env.PUBLIC_URL}/assets/images/benefit-pages/tree.svg`;

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
                        <FlowChart evalGraph={evalGraph} />
                    )
                }
            </VBox>
        </VBox>
    );
}

export default BenefitPageRequirements;

