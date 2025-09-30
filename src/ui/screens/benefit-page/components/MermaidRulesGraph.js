import React, { useEffect, useState } from 'react';
import theme from '@/theme';
import { HBox, VBox } from '@/ui/shared-components/LayoutBoxes';
import { Typography } from "@mui/material";
import mermaid from "mermaid";
import AntSwitch from "@/ui/shared-components/AntSwitch";
import RegularButton from "@/ui/shared-components/buttons/RegularButton";
import { graphToMermaid } from "@foerderfunke/matching-engine/src/rule-graph/EvalGraph";
import matchingEngineManager from "@/core/managers/matchingEngineManager";
import BenefitPageMarkdownElement from './BenefitPageMarkDownElement';

export default function MermaidRulesGraph({ evalGraph, validatedStatus, benefitPageData }) {
    const [svgContent, setSvgContent] = useState("");
    const [graphTypeEval, setGraphTypeEval] = useState(!validatedStatus);
    const [printLabels, setPrintLabels] = useState(true);
    const [orientationVertical, setOrientationVertical] = useState(false);

    const starWoman = `${process.env.PUBLIC_URL}/assets/images/benefit-pages/lightbulb.svg`;

    console.log("evalGraph", JSON.stringify(evalGraph));

    useEffect(() => {
        if (!evalGraph) return;
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
    }, [evalGraph, graphTypeEval, printLabels, orientationVertical]);

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
                <HBox gap={1} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <VBox sx={{ maxWidth: 800 }}>
                        <Typography variant="h2" sx={{ fontWeight: 500, wordBreak: "break-word" }}>
                            Rule Graph
                        </Typography>
                        <BenefitPageMarkdownElement content={benefitPageData?.brief} />
                    </VBox>
                    <img src={starWoman} alt="logo" style={{ width: "125px" }} />
                </HBox>
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
                    <HBox gap={4} alignItems="center" sx={{ flexWrap: 'wrap' }}>
                        <HBox gap={1} alignItems="center">
                            <strong>Type:</strong>
                            <span>Evaluation</span>
                            <AntSwitch checked={graphTypeEval} onChange={(e) => setGraphTypeEval(e.target.checked)} color="white" />
                            <span>Rule</span>
                        </HBox>
                        <HBox gap={1} alignItems="center">
                            <strong>Orientation:</strong>
                            <span>Horizontal</span>
                            <AntSwitch checked={orientationVertical} onChange={(e) => setOrientationVertical(e.target.checked)} color="white" />
                            <span>Vertical</span>
                        </HBox>
                        <HBox gap={1} alignItems="center">
                            <strong>Datafields:</strong>
                            <span>URIs</span>
                            <AntSwitch checked={printLabels} onChange={(e) => setPrintLabels(e.target.checked)} color="white" />
                            <span>Labels</span>
                        </HBox>
                        <RegularButton
                            variant={'blackOutlined'}
                            text={"Export"}
                            onClick={() => alert("TODO")}
                            size='xsmall'
                        />
                    </HBox>
                    <Typography variant="body1" component="div">
                        <div dangerouslySetInnerHTML={{ __html: svgContent }} />
                    </Typography>
                </VBox>
            </VBox>
        </VBox>
    );
}
