import React, { useState } from 'react';
import { VBox, HBox } from '@/ui/shared-components/LayoutBoxes';
import theme from '@/theme';
import { Typography } from '@mui/material';
import BenefitPageMarkdownElement from './BenefitPageMarkDownElement';
import RegularButton from '@/ui/shared-components/buttons/RegularButton';

const BenefitPageLocal = ({ t, isDesktop, benefitPageData }) => {
    const [open, setOpen] = useState(false);
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
                        <RegularButton
                            onClick={() => setOpen(!open)}
                            variant={'whiteOutlinedBlue'}
                            text={open ? 'app.benefitPage.local.btnClose' : 'app.benefitPage.local.btn'}
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
            </VBox>
        </VBox>
    );
}

export default BenefitPageLocal;