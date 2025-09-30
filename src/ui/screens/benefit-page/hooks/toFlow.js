// toFlowBalanced.js
const X_GAP = 260;   // horizontal spacing between depths
const Y_GAP = 90;    // vertical spacing per lane
const NODE_W = 220;
const NODE_H = 48;

function makeLabel(n, printLabels) {
  if (!printLabels) return n.type || 'node';
  if (n.type === 'rule' && n.rule) {
    const r = n.rule;
    if (r.type === 'sh:in') return `in ${JSON.stringify(r.values)}`;
    if ('value' in r) return `${r.type} ${r.value}`;
    return r.type;
  }
  if (n.type === 'datafield' && n.path) return n.path;
  return n.type || 'node';
}

function statusColor(status) {
  switch (status) {
    case 'ok': return '#16a34a';
    case 'violation':
    case 'error': return '#dc2626';
    case 'missing':
    default: return '#9ca3af';
  }
}

export function toFlow(graph, { printLabels = true } = {}) {
  const roots = graph?.rootNodes || [];
  const nodes = [];
  const edges = [];

  // lane usage per depth: Set of integers
  const usedLanes = new Map(); // depth -> Set(lane)

  function takeLane(depth, preferred) {
    if (!usedLanes.has(depth)) usedLanes.set(depth, new Set());
    const used = usedLanes.get(depth);
    // try preferred, then spiral out: +1, -1, +2, -2...
    const order = [preferred];
    for (let k = 1; k < 1000; k++) {
      order.push(preferred + k, preferred - k);
    }
    for (const lane of order) {
      if (!used.has(lane)) {
        used.add(lane);
        return lane;
      }
    }
    // fallback (shouldn't happen)
    let lane = 0;
    while (used.has(lane)) lane++;
    used.add(lane);
    return lane;
  }

  function addNode(n, depth, lane, parentId) {
    const id = `n-${String(n.id ?? Math.random())}`;
    const x = depth * X_GAP;
    const y = lane * Y_GAP;

    const status = n.eval?.status || 'missing';
    const stroke = statusColor(status);

    nodes.push({
      id,
      position: { x, y },
      data: { label: makeLabel(n, printLabels), type: n.type, status },
      style: {
        width: NODE_W,
        height: NODE_H,
        background: '#fff',
        border: `2px solid ${stroke}`,
        borderRadius: 12,
        padding: 8,
        fontFamily: 'Funnel Sans, system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
        fontSize: 12,
        color: '#111827',
        boxShadow: '0 1px 2px rgba(0,0,0,0.06)',
      },
      // make edges route horizontally
      sourcePosition: 'right',
      targetPosition: 'left',
    });

    if (parentId) {
      edges.push({
        id: `e-${parentId}->${id}`,
        source: parentId,
        target: id,
        markerEnd: { type: 'arrowclosed' },
        style: { stroke: '#9ca3af' },
      });
    }

    // order children for stable layout
    const children = (n.children || []).slice();
    children.sort((a, b) => (a.path || a.type || '').localeCompare(b.path || b.type || ''));

    if (depth === 0) {
      // first-level: alternate lanes around 0
      let sign = 1, k = 1;
      for (const child of children) {
        const pref = sign * k;                // +1, -1, +2, -2, ...
        const childLane = takeLane(depth + 1, pref);
        addNode(child, depth + 1, childLane, id);
        sign *= -1;
        if (sign === 1) k += 1;
      }
    } else {
      // deeper levels: try to stay near parent's lane, spread if occupied
      let offset = 0;
      for (const child of children) {
        const pref = lane + offset;
        const childLane = takeLane(depth + 1, pref);
        addNode(child, depth + 1, childLane, id);
        // alternate offsets: +1, -1, +2, -2, ...
        if (offset === 0) offset = 1; else offset = -(offset) + (offset > 0 ? 0 : 1);
      }
    }

    return id;
  }

  // place each root on its own lane (0, +1, -1, +2, -2...)
  let rootLaneOrder = [0];
  for (let k = 1; k < 100; k++) rootLaneOrder.push(+k, -k);
  roots.forEach((r, i) => {
    const lane = takeLane(0, rootLaneOrder[i] ?? 0);
    addNode(r, 0, lane, null);
  });

  return { nodes, edges };
}