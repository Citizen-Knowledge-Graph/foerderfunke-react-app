import React, { useEffect } from 'react';
import theme from '@/theme';
import { VBox } from '@/ui/shared-components/LayoutBoxes';
import { Typography } from "@mui/material";

export default function MermaidRulesGraph({ evalGraph, t }) {

    useEffect(() => {
        if (!evalGraph) return;
        const mermaidDef = evalGraph.toMermaid();
        // TODO
    }, [evalGraph]);

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
