import React, { useEffect, useState } from 'react';
import theme from '@/theme';
import { HBox, VBox } from '@/ui/shared-components/LayoutBoxes';
import { Typography } from "@mui/material";
import mermaid from "mermaid";
import AntSwitch from "@/ui/shared-components/AntSwitch";
import RegularButton from "@/ui/shared-components/buttons/RegularButton";

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
                <HBox gap={4} alignItems="center">
                    <HBox gap={1} alignItems="center">
                        <strong>Type:</strong>
                        <span>Rule</span>
                        <AntSwitch checked={true} onChange={() => {}} color="white"/>
                        <span>Evaluation</span>
                    </HBox>
                    <HBox gap={1} alignItems="center">
                        <strong>Orientation:</strong>
                        <span>Horizontal</span>
                        <AntSwitch checked={true} onChange={() => {}} color="white"/>
                        <span>Vertical</span>
                    </HBox>
                    <HBox gap={1} alignItems="center">
                        <strong>Datafields:</strong>
                        <span>URIs</span>
                        <AntSwitch checked={true} onChange={() => {}} color="white"/>
                        <span>Labels</span>
                    </HBox>
                    <RegularButton
                        variant={'blackOutlined'}
                        text={"Export"}
                        onClick={() => {}}
                        size='small'
                    />
                </HBox>
                <Typography variant="body1" component="div">
                    <div dangerouslySetInnerHTML={{ __html: svgContent }} />
                </Typography>
            </VBox>
        </VBox>
    );
}
