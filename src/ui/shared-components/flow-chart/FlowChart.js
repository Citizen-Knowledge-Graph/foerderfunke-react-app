import React, { useMemo, useState } from 'react';
import ReactFlow, { Background } from 'reactflow';
import 'reactflow/dist/style.css';

export default function FlowChart({ nodes, edges, height = 500, padding = 0.2 }) {
    const [rf, setRf] = useState(null); // React Flow instance

    const memoNodes = useMemo(() => nodes, [nodes]);
    const memoEdges = useMemo(() => edges, [edges]);

    const zoomBy = (factor) => {
        if (!rf) return;
        const { zoom } = rf.getViewport();
        rf.zoomTo(Math.max(0.2, Math.min(4, zoom * factor))); // clamp 0.2–4
    };

    const fitWithPadding = (factor = 0.95) => {
        if (!rf) return;
        rf.fitView({ padding });               // fit to diagram
        const { zoom } = rf.getViewport();     // then zoom out a touch
        rf.zoomTo(zoom * factor);
    };

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
            <div
                style={{
                    width: "100%",
                    height,
                    background: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: 15,
                    overflow: "hidden",
                    fontFamily: "Funnel Sans, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
                }}
            >
                <ReactFlow
                    nodes={memoNodes}
                    edges={memoEdges}
                    onInit={setRf}                 // <-- get instance
                    fitView
                    fitViewOptions={{ padding }}
                    panOnDrag
                    zoomOnScroll
                    proOptions={{ hideAttribution: true }}
                    defaultEdgeOptions={{ type: "step", markerEnd: { type: "arrowclosed" } }}
                >
                    <Background variant="dots" gap={12} size={1} />
                </ReactFlow>
            </div>

            {/* overlay controls (same look as your BPMN controls) */}
            <div
                style={{
                    position: "absolute",
                    right: 8,
                    bottom: 8,
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
                <button onClick={() => fitWithPadding(0.95)} style={btnStyle}>Fit</button>
            </div>
        </div>
    );
}