import { useEffect, useMemo } from "react";
import ReactFlow, {
    Background,
    Controls,
    MiniMap,
    ReactFlowProvider,
    useReactFlow,
} from "reactflow";
import "reactflow/dist/style.css";

function GraphCanvasInner({
    nodes,
    edges,
    nodeTypes,
    edgeTypes,
    fitView = true,
    fitPadding = 0.2,
    showBackground = true,
    showMiniMap = true,
    showControls = true,
    style,
    proOptions = { hideAttribution: true },
    onNodesChange,
    onEdgesChange,
    onConnect,
    defaultViewport,
}) {
    const rf = useReactFlow();

    useEffect(() => {
        if (!fitView) return;
        const t = setTimeout(() => {
            try {
                rf.fitView({ padding: fitPadding });
            } catch (_) { }
        }, 0);
        return () => clearTimeout(t);
    }, [nodes, edges, fitView, fitPadding, rf]);

    const memoNodeTypes = useMemo(() => nodeTypes || {}, [nodeTypes]);
    const memoEdgeTypes = useMemo(() => edgeTypes || {}, [edgeTypes]);

    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={memoNodeTypes}
            edgeTypes={memoEdgeTypes}
            fitView={false}
            proOptions={proOptions}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            defaultViewport={defaultViewport}
            deleteKeyCode="Delete"
            selectionOnDrag
            defaultEdgeOptions={{ type: 'straight' }}
            elevateEdgesOnSelect
        >
            {showBackground && <Background />}
            {showMiniMap && <MiniMap />}
            {showControls && <Controls showInteractive={false} />}
        </ReactFlow>
    );
}

export default function FlowChart(props) {
    return (
        <div
            style={{
                width: "100%",
                height: 400,
                border: "1px solid #eee",
                borderRadius: 8,
                ...props.containerStyle,
            }}
        >
            <ReactFlowProvider>
                <GraphCanvasInner {...props} />
            </ReactFlowProvider>
        </div>
    );
}