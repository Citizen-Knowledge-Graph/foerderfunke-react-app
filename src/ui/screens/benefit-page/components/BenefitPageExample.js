import React, { useState } from 'react';
import { Typography, IconButton } from '@mui/material';
import { VBox, HBox } from '@/ui/shared-components/LayoutBoxes';
import theme from '@/theme';
import BenefitPageMarkdownElement from './BenefitPageMarkDownElement';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const BenefitPageExample = ({ idx, content }) => {
    const [open, setOpen] = useState(false);

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
                    <IconButton
                        aria-label="toggle section"
                        aria-expanded={open}
                        sx={{
                            transition: "transform 0.3s",
                            transform: open ? "rotate(180deg)" : "rotate(0deg)",
                            ml: 1,
                        }}
                    >
                        <ExpandMoreIcon />
                    </IconButton>
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