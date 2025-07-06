import React, { useEffect, useState } from 'react';
import theme from '@/theme';
import { VBox } from '@/ui/shared-components/LayoutBoxes';
import { Typography } from "@mui/material";
import mermaid from "mermaid";

export default function MermaidRulesGraph({ evalGraph, t }) {
    const [svgContent, setSvgContent] = useState("");

    useEffect(() => {
        if (!evalGraph) return;
        const mermaidDef = evalGraph.toMermaid();
        mermaid.initialize();
        try {
            mermaid.parse(mermaidDef);
        } catch (parseError) {
            console.error("Mermaid syntax error:", parseError);
        }
        mermaid.render(`rulesGraph${Date.now()}`, mermaidDef)
            .then(({ svg }) => setSvgContent(svg))
            .catch((error) => console.error("Mermaid render error:", error));
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
                <Typography variant="body1" component="div">
                    <div dangerouslySetInnerHTML={{ __html: svgContent }} />
                </Typography>
            </VBox>
        </VBox>
    );
}
