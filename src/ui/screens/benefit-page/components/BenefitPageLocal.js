import React from 'react';
import { VBox, HBox } from '@/ui/shared-components/LayoutBoxes';
import theme from '@/theme';
import { Typography } from '@mui/material';
import BenefitPageMarkdownElement from './BenefitPageMarkDownElement';

const BenefitPageLocal = ({ t, isDesktop, localisedData }) => {
    const objectIcon = `${process.env.PUBLIC_URL}/assets/images/benefit-pages/darts.svg`;

    return (
        <VBox
            sx={{
                backgroundColor: 'white.main',
                padding: '32px',
                borderRadius: theme.shape.borderRadius,
                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
                gap: 4,
            }}
        >
            <VBox sx={{ gap: { xs: 4, md: 8 } }} >
                <HBox gap={1} sx={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <VBox sx={{ flex: 3, maxWidth: 800, gap: 4 }}>
                        <VBox>
                            <Typography variant="h2" sx={{ fontWeight: 500, wordBreak: "break-word" }}>
                                {t('app.benefitPage.local.title')}
                            </Typography>
                            <BenefitPageMarkdownElement content={t('app.benefitPage.local.description')} />
                        </VBox>
                    </VBox>
                    {
                        isDesktop && (
                            <VBox sx={{ flex: 1, alignItems: 'flex-end' }}>
                                <img src={objectIcon} alt="logo" style={{ width: "125px" }} />
                            </VBox>

                        )
                    }
                </HBox>
                <VBox
                    sx={{
                        backgroundColor: 'greyTransparent.main',
                        borderTop: `1px solid ${theme.palette.grey.light}`,
                        borderRadius: theme.shape.borderRadius,
                        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
                        padding: 2,
                        gap: 2,
                    }}
                >
                    <BenefitPageMarkdownElement content={localisedData} />
                </VBox>
            </VBox>
        </VBox>
    );
}

export default BenefitPageLocal;