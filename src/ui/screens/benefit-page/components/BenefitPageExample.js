import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { VBox, HBox } from '@/ui/shared-components/LayoutBoxes';
import theme from '@/theme';
import BenefitPageMarkdownElement from './BenefitPageMarkDownElement';


const BenefitPageExample = ({ idx, content }) => {
    const [open, setOpen] = useState(true);

    return (
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
            <VBox sx={{ gap: 2 }}>
                <HBox sx={{ justifyContent: "space-between", alignItems: "center", cursor: "pointer" }} onClick={() => setOpen(!open)}>
                    <Typography variant="h2" sx={{ fontWeight: 400, wordBreak: "break-word", color: 'pink.main' }}>
                        Beispiel{content.title ? `: ${content.title}` : ` ${idx}`}
                    </Typography>

                </HBox>
                {open && (
                    <VBox sx={{ maxWidth: 800 }}>
                        <BenefitPageMarkdownElement content={content?.description} />
                    </VBox>
                )}
            </VBox>
        </VBox>
    )
}

export default BenefitPageExample;