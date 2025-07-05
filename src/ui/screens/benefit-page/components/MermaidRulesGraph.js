import React from 'react';
import theme from '@/theme';
import { useMetadataStore } from '@/ui/storage/zustand';
import { VBox } from '@/ui/shared-components/LayoutBoxes';
import { Typography } from "@mui/material";

export default function MermaidRulesGraph({ graphRoot, t }) {
    const metadata = useMetadataStore(state => state.metadata);
    // if (!graphRoot) return null;

    return (
        <VBox
            sx={{
                gap: 4,
                backgroundColor: 'white.main',
                padding: '32px',
                borderRadius: theme.shape.borderRadius,
            }}
        >
            <VBox sx={{ gap: 2 }}>
                <Typography variant="h2" sx={{ fontWeight: '400', wordBreak: "break-word" }}>
                    Rules Graph
                </Typography>
                <Typography variant="body1">
                    TODO
                </Typography>
            </VBox>
        </VBox>
    );
}
