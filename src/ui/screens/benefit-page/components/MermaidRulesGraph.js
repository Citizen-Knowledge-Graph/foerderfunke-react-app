import React, { useEffect, useState } from 'react';
import theme from '@/theme';
import { HBox, VBox } from '@/ui/shared-components/LayoutBoxes';
import { Typography } from "@mui/material";
import mermaid from "mermaid";
import AntSwitch from "@/ui/shared-components/AntSwitch";
import RegularButton from "@/ui/shared-components/buttons/RegularButton";
import { graphToMermaid } from "@foerderfunke/matching-engine/src/rule-graph/EvalGraph";
import matchingEngineManager from "@/core/managers/matchingEngineManager";

export default function MermaidRulesGraph({ evalGraph, t }) {
    // make SVG zoomable TODO
    const [svgContent, setSvgContent] = useState("");
    const [graphTypeEval, setGraphTypeEval] = useState(false);
    const [printLabels, setPrintLabels] = useState(false);
    const [orientationVertical, setOrientationVertical] = useState(true);

    useEffect(() => {
        if (!evalGraph) return;
        renderMermaid();
    }, [evalGraph, graphTypeEval, printLabels, orientationVertical]);

    const renderMermaid = () => {
        const me = matchingEngineManager.matchingEngineInstance;
        const mermaidDef = graphToMermaid(
            graphTypeEval ? evalGraph.ruleGraph : evalGraph,
            me, printLabels, orientationVertical);
        mermaid.initialize();
        try {
            mermaid.parse(mermaidDef);
        } catch (parseError) {
            console.error("Mermaid syntax error:", parseError);
        }
        mermaid.render(`rulesGraph${Date.now()}`, mermaidDef)
            .then(({ svg }) => setSvgContent(svg))
            .catch((error) => console.error("Mermaid render error:", error));
    };

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
                        <span>Evaluation</span>
                        <AntSwitch checked={graphTypeEval} onChange={(e) => setGraphTypeEval(e.target.checked)} color="white"/>
                        <span>Rule</span>
                    </HBox>
                    <HBox gap={1} alignItems="center">
                        <strong>Orientation:</strong>
                        <span>Horizontal</span>
                        <AntSwitch checked={orientationVertical} onChange={(e) => setOrientationVertical(e.target.checked)} color="white"/>
                        <span>Vertical</span>
                    </HBox>
                    <HBox gap={1} alignItems="center">
                        <strong>Datafields:</strong>
                        <span>URIs</span>
                        <AntSwitch checked={printLabels} onChange={(e) => setPrintLabels(e.target.checked)} color="white"/>
                        <span>Labels</span>
                    </HBox>
                    <RegularButton
                        variant={'blackOutlined'}
                        text={"Export"}
                        onClick={() => alert("TODO")}
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
