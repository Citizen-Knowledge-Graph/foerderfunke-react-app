import React, { useEffect, useState, useRef } from 'react';
import theme from '@/theme';
import { HBox, VBox } from '@/ui/shared-components/LayoutBoxes';
import AntSwitch from "@/ui/shared-components/AntSwitch";
import { Typography } from "@mui/material";
import mermaid from "mermaid";
import { graphToMermaid } from "@foerderfunke/matching-engine/src/rule-graph/EvalGraph";
import matchingEngineManager from "@/core/managers/matchingEngineManager";
import useTranslation from "@/ui/language/useTranslation";

function enablePanZoom(svg) {
    if (!svg) return () => { };

    if (!svg.hasAttribute("viewBox")) {
        const bb = svg.getBBox();
        svg.setAttribute("viewBox", `${bb.x} ${bb.y} ${bb.width} ${bb.height}`);
    }

    const vb = svg.viewBox.baseVal;
    let isPanning = false;
    let sx = 0, sy = 0;

    const onMouseDown = (e) => {
        if (e.button !== 0) return;
        isPanning = true;
        sx = e.clientX; sy = e.clientY;
        svg.style.cursor = "grabbing";
        e.preventDefault();
    };

    const onMouseMove = (e) => {
        if (!isPanning) return;
        const dx = (e.clientX - sx) * (vb.width / svg.clientWidth);
        const dy = (e.clientY - sy) * (vb.height / svg.clientHeight);
        vb.x -= dx; vb.y -= dy;
        sx = e.clientX; sy = e.clientY;
    };

    const endPan = () => { isPanning = false; svg.style.cursor = "grab"; };

    const onDblClick = () => {
        const bb = svg.getBBox();
        svg.setAttribute("viewBox", `${bb.x} ${bb.y} ${bb.width} ${bb.height}`);
    };

    svg.style.cursor = "grab";
    svg.addEventListener("mousedown", onMouseDown);
    svg.addEventListener("mousemove", onMouseMove);
    svg.addEventListener("mouseup", endPan);
    svg.addEventListener("mouseleave", endPan);
    svg.addEventListener("dblclick", onDblClick);

    return () => {
        svg.removeEventListener("mousedown", onMouseDown);
        svg.removeEventListener("mousemove", onMouseMove);
        svg.removeEventListener("mouseup", endPan);
        svg.removeEventListener("mouseleave", endPan);
        svg.removeEventListener("dblclick", onDblClick);
    };
}

mermaid.initialize({
    startOnLoad: false,
    theme: "base",
    themeVariables: {
        fontFamily: 'Funnel Sans, system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
        fontSize: '12px',
        labelBackground: '#fff',
    },
});


export default function FlowChart({ evalGraph }) {
    const { t } = useTranslation();

    const [svgContent, setSvgContent] = useState("");
    const [graphTypeEval, setGraphTypeEval] = useState(false);
    const printLabels = true;
    const orientationVertical = false;

    const svgHostRef = useRef(null);
    const cleanupRef = useRef(null);

    const getSvg = () => svgHostRef.current?.querySelector("svg") || null;

    const ensureViewBox = (svg) => {
        if (!svg) return null;
        if (!svg.viewBox || svg.viewBox.baseVal.width === 0) {
            const bb = svg.getBBox();
            svg.setAttribute("viewBox", `${bb.x} ${bb.y} ${bb.width} ${bb.height}`);
        }
        return svg.viewBox.baseVal;
    };

    const zoomBy = (factor) => {
        const svg = getSvg();
        if (!svg) return;
        const vb = ensureViewBox(svg);
        if (!vb) return;

        const cx = vb.x + vb.width / 2;
        const cy = vb.y + vb.height / 2;

        const newW = Math.max(1, vb.width * (1 / factor));
        const newH = Math.max(1, vb.height * (1 / factor));

        vb.x = cx - newW / 2;
        vb.y = cy - newH / 2;
        vb.width = newW;
        vb.height = newH;
    };

    const fitWithPadding = (padRatio = 0.05) => {
        const svg = getSvg();
        if (!svg) return;
        const bb = svg.getBBox();
        const padX = bb.width * padRatio;
        const padY = bb.height * padRatio;
        svg.setAttribute(
            "viewBox",
            `${bb.x - padX} ${bb.y - padY} ${bb.width + 2 * padX} ${bb.height + 2 * padY}`
        );
    };

    useEffect(() => {
        if (!evalGraph) return;
        const me = matchingEngineManager.matchingEngineInstance;
        const mermaidDef = graphToMermaid(
            graphTypeEval ? evalGraph : evalGraph.ruleGraph,
            me, printLabels, orientationVertical
        );

        try {
            mermaid.parse(mermaidDef);
        } catch (parseError) {
            console.error("Mermaid syntax error:", parseError);
        }

        mermaid
            .render(`rulesGraph${Date.now()}`, mermaidDef)
            .then(({ svg }) => setSvgContent(svg))
            .catch((error) => console.error("Mermaid render error:", error));
    }, [evalGraph, graphTypeEval, printLabels, orientationVertical]);

    useEffect(() => {
        cleanupRef.current?.();

        const svg = svgHostRef.current?.querySelector('svg');
        if (!svg) return;
        cleanupRef.current = enablePanZoom(svg);

        return () => cleanupRef.current?.();
    }, [svgContent]);

    const btnStyle = {
        fontFamily: "Funnel Sans, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        fontSize: 12,
        padding: "6px 10px",
        border: "1px solid #d0d7de",
        borderRadius: 6,
        background: "#fff",
        cursor: "pointer",
    };

    return (
        <div style={{ position: "relative" }}>
            <HBox gap={1} alignItems="center" style={{ paddingBottom: "10px" }}>
                <span>{t("app.benefitPage.requirements.toggleRule")}</span>
                <AntSwitch checked={graphTypeEval} onChange={(e) => setGraphTypeEval(e.target.checked)} color="white"/>
                <span>{t("app.benefitPage.requirements.toggleEval")}</span>
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
                <Typography variant="body1" component="div">
                    <div
                        ref={svgHostRef}
                        style={{
                            backgroundColor: "#fff",
                            backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)",
                            backgroundSize: "12px 12px",
                            borderRadius: 15,
                            padding: 16,
                            overflow: "hidden",
                            userSelect: "none",
                        }}
                        dangerouslySetInnerHTML={{ __html: svgContent }}
                    />
                </Typography>
            </VBox>
            <div
                style={{
                    position: "absolute",
                    right: 24,
                    bottom: 24,
                    display: "flex",
                    gap: 6,
                    background: "rgba(255,255,255,0.9)",
                    border: "1px solid #e5e7eb",
                    borderRadius: 8,
                    padding: 6,
                }}
            >
                <button onClick={() => zoomBy(1 / 1.2)} style={btnStyle}>-</button>
                <button onClick={() => zoomBy(1.2)} style={btnStyle}>+</button>
                <button onClick={() => fitWithPadding(0.05)} style={btnStyle}>Fit</button>
            </div>
        </div>
    );
}
