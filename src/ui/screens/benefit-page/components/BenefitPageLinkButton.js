import React from 'react';
import { VBox } from '@/ui/shared-components/LayoutBoxes';
import { Typography } from '@mui/material';
import RegularButton from '@/ui/shared-components/buttons/RegularButton';
import theme from '@/theme';

const BenefitPageLinkButton = ({ link }) => {
    console.log('Rendering BenefitPageLinkButton with link:', link);

    return (
        <VBox
            sx={{
                width: { xs: '100%', sm: 250 },
                padding: { xs: 2, sm: 4 },
                backgroundColor: "transparent",
                border: "1px solid",
                borderColor: "blue.main",
                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
                borderRadius: theme.shape.borderRadius

            }}
        >
            <VBox sx={{ gap: 2 }} >
                <Typography variant="h4" sx={{ fontWeight: 500, wordBreak: "break-word" }}>
                    {link?.title}
                </Typography>
                <Typography variant="body1" sx={{ wordBreak: "break-word" }}>
                    {link?.description}
                </Typography>
                <RegularButton
                    variant="transparentBlueOutlined"
                    size='small'
                    text={'Link öffnen'}
                    link={link?.url}
                />
            </VBox >
        </VBox >
    );
}

export default BenefitPageLinkButton;