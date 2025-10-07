import { useEffect, useRef } from "react";
import NavigatedViewer from "bpmn-js/lib/NavigatedViewer";

/* ——— helpers ——— */

function fitWithPadding(canvas, factor = 0.95) {
  canvas.zoom("fit-viewport", "auto");
  const current = canvas.zoom();
  canvas.zoom(current * factor);
}

function installDottedBackground(viewer, { gap = 24, dot = 2, color = "#ebedf0" } = {}) {
  const SVG_NS = "http://www.w3.org/2000/svg";
  const canvas = viewer.get("canvas");
  const container = canvas.getContainer();
  const svg = container.querySelector("svg");
  if (!svg) return;

  let defs = svg.querySelector("defs");
  if (!defs) {
    defs = document.createElementNS(SVG_NS, "defs");
    svg.appendChild(defs);
  }

  const pid = `rf-dots-${gap}-${dot}-${color.replace(/[^a-zA-Z0-9]/g, "")}`;
  let pattern = defs.querySelector(`#${pid}`);
  if (!pattern) {
    pattern = document.createElementNS(SVG_NS, "pattern");
    pattern.setAttribute("id", pid);
    pattern.setAttribute("width", String(gap));
    pattern.setAttribute("height", String(gap));
    pattern.setAttribute("patternUnits", "userSpaceOnUse");

    const c = document.createElementNS(SVG_NS, "circle");
    c.setAttribute("cx", String(gap / 2));
    c.setAttribute("cy", String(gap / 2));
    c.setAttribute("r", String(dot));
    c.setAttribute("fill", color);

    pattern.appendChild(c);
    defs.appendChild(pattern);
  }

  const bgLayer = canvas.getLayer("rf-background", -9999);
  const { x, y, width, height } = canvas.viewbox();
  const pad = Math.max(gap * 10, 1000);

  let bgRect = bgLayer.querySelector("rect[data-rf-bg]");
  if (!bgRect) {
    bgRect = document.createElementNS(SVG_NS, "rect");
    bgRect.setAttribute("data-rf-bg", "true");
    bgRect.setAttribute("pointer-events", "none");
    bgLayer.insertBefore(bgRect, bgLayer.firstChild);
  }

  bgRect.setAttribute("x", String(x - pad));
  bgRect.setAttribute("y", String(y - pad));
  bgRect.setAttribute("width", String(width + pad * 2));
  bgRect.setAttribute("height", String(height + pad * 2));
  bgRect.setAttribute("fill", `url(#${pid})`);
}

/* ——— component ——— */

export default function BpmnViewer({
  xml,
  height = 300,
  className = "",
  onReady,
  removeWatermark = true,
}) {
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);
  const viewerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const viewer = new NavigatedViewer({
      container: containerRef.current,
      textRenderer: {
        defaultStyle: {
          fontFamily: "Funnel Sans, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        },
      },
    });

    viewerRef.current = viewer;
    onReady?.(viewer);

    const ro = new ResizeObserver(() => {
      try {
        const canvas = viewer.get("canvas");
        canvas.resized();
        fitWithPadding(canvas, 0.95);
      } catch { }
    });
    ro.observe(containerRef.current);

    return () => {
      ro.disconnect();
      viewer.destroy();
      viewerRef.current = null;
    };
  }, [onReady]);

  useEffect(() => {
    if (!viewerRef.current || !xml) return;

    viewerRef.current
      .importXML(xml)
      .then(() => {
        const canvas = viewerRef.current.get("canvas");
        fitWithPadding(canvas, 0.95);
        installDottedBackground(viewerRef.current, { gap: 24, dot: 2, color: "#ebedf0" });

        if (removeWatermark) {
          const el = containerRef.current.querySelector(".bjs-powered-by");
          el?.parentNode?.removeChild(el);
        }
      })
      .catch(console.error);
  }, [xml, removeWatermark]);

  const btnStyle = {
    fontFamily: "Funnel Sans, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
    fontSize: 12,
    padding: "6px 10px",
    border: "1px solid #d0d7de",
    borderRadius: 6,
    background: "#fff",
    cursor: "pointer",
  };

  const zoomBy = (factor) => {
    const canvas = viewerRef.current?.get("canvas");
    if (!canvas) return;
    const z = canvas.zoom();
    const rect = containerRef.current.getBoundingClientRect();
    canvas.zoom(Math.max(0.2, Math.min(4, z * factor)), { x: rect.width / 2, y: rect.height / 2 });
  };

  return (
    <div ref={wrapperRef} style={{ position: "relative" }}>
      <div
        ref={containerRef}
        style={{
          width: "100%",
          height,
          border: "1px solid #e5e7eb",
          borderRadius: 15,
          overflow: "hidden",
          background: "#fff",
          touchAction: "none",        // let bpmn-js handle pan/zoom
          WebkitUserSelect: "none",
          userSelect: "none",
          overscrollBehavior: "contain", // avoid scroll chaining to the page
        }}
      />

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
        <button
          onClick={() => {
            const canvas = viewerRef.current?.get("canvas");
            if (canvas) fitWithPadding(canvas, 0.95);
          }}
          style={btnStyle}
        >
          Fit
        </button>
      </div>
    </div>
  );
}