import React from 'react';
import { VBox, HBox } from '@/ui/shared-components/LayoutBoxes';
import theme from '@/theme';
import { Typography } from '@mui/material';
import BenefitPageLinkButton from './BenefitPageLinkButton';

const BenefitPageLinks = ({ t, linksList }) => {

    return (
        <VBox
            sx={{
                backgroundColor: 'white.main',
                padding: { xs: '32px 20px', md: '32px' },
                borderRadius: theme.shape.borderRadius,
                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
                gap: 4,
            }}
        >
            <VBox sx={{ gap: 4 }} >
                <HBox gap={1} sx={{ maxWidth: 800, justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Typography variant="h2" sx={{ fontWeight: 500, wordBreak: "break-word" }}>
                        {t('app.benefitPage.links.title')}
                    </Typography>
                </HBox>
                <VBox sx={{flexWrap: 'wrap', gap: 2}}>
                    {
                        linksList?.map((link, i) =>
                            <BenefitPageLinkButton key={i} t={t} link={link} />
                        )
                    }
                </VBox>            
            </VBox >
        </VBox >
    );
}

export default BenefitPageLinks;