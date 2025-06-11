// src/utils/buildFlow.js

// ——— Label mapping for the non-rule nodes ———
const typeLabelMap = {
  NodeROOT: 'Requirements',
  NodeAND:  'All need to be fulfilled',
  NodeOR:   'At least one needs to be met',
};

export default function buildFlow(graphRoot) {
  let nextId = 0;

  // Temp storage of every node with depth & parent
  const raw = [];
  const edges = [];

  // 1) Traverse & collect, skipping MinCount RULEs
  function traverse(node, depth = 0, parentId = null) {
    const typeName = node.constructor?.nodeType;

    // ─── FILTER OUT MinCountConstraintComponent RULEs ───
    if (
      typeName === 'NodeRULE' &&
      node.type === 'sh:MinCountConstraintComponent'
    ) {
      return;
    }

    const myId = `node_${nextId++}`;
    raw.push({ id: myId, node, depth, parentId });

    if (parentId) {
      edges.push({
        id: `e_${parentId}-${myId}`,
        source: parentId,
        target: myId,
        style: { stroke: '#888' },
      });
    }

    (node.children || []).forEach(child =>
      traverse(child, depth + 1, myId)
    );
  }
  traverse(graphRoot);

  // 2) Group by depth
  const levels = raw.reduce((acc, item) => {
    (acc[item.depth] = acc[item.depth] || []).push(item);
    return acc;
  }, {});

  const horizontalSpacing = 200;
  const verticalSpacing   = 100;

  // 3) Assign positions symmetrically
  const nodes = raw.map(item => {
    const { id, node, depth } = item;
    const group = levels[depth];
    const idx   = group.findIndex(g => g.id === id);
    const count = group.length;

    // center siblings around x=0
    const x = (idx - (count - 1) / 2) * horizontalSpacing;
    const y = depth * verticalSpacing;

    // determine label
    let label;
    if (node.constructor?.nodeType === 'NodeRULE') {
      const compType = node.type || '<constraint>';
      const val = Array.isArray(node.value) ? node.value.join(', ') : node.value;
      label = `${compType}: ${val}`;
    } else {
      label = typeLabelMap[node.constructor?.nodeType]
           ?? node.path
           ?? node.constructor?.nodeType
           ?? 'node';
    }

    // detect missing
    const isMissing = node.status === 'missing' || node.shaclEval?.status === 'missing';

    return {
      id,
      data: { label },
      position: { x, y },
      style: {
        padding: 10,
        borderRadius: 6,
        background: isMissing ? '#fde2e2' : '#e2f7de',
        border: `2px solid ${isMissing ? '#f5c2c7' : '#a8e6a3'}`,
        width: Math.max(150, label.length * 8),
      }
    };
  });

  return { nodes, edges };
}