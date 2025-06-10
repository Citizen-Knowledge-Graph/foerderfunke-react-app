import React from 'react';
import { Typography, Box } from '@mui/material';
import { VBox } from '@/ui/shared-components/LayoutBoxes';
import theme from '@/theme';
import {
  InConstraint,
  MaxExclusiveConstraint,
  MinInclusiveConstraint
} from './RuleTypes';

const typeLabelMap = {
  NodeROOT: 'Requirements',
  NodeAND:  'AND',
  NodeOR:   'OR',
};

function renderNode(node, skipAndWrapper = false, parentField = '') {
  if (!node) return null;
  const t = node.constructor?.name;

  if (t === 'NodeROOT') {
    return renderNode(node.children?.[0], true, '');
  }

  if (t === 'NodeDATAFIELD') {
    const rules = (node.children || []).filter(
      c => c.constructor?.name === 'NodeRULE' &&
           c.type !== 'sh:MinCountConstraintComponent'
    );
    if (rules.length === 0) return null;

    return (
      <VBox
        gap={1}
        sx={{
          border: '1px solid',
          borderColor: 'black.light',
          padding: 2,
          borderRadius: theme.shape.borderRadius,
        }}
      >
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
          {node.path}
        </Typography>
        {rules.map((rule, i) => (
          <VBox key={i} sx={{ pl: 2 }}>
            {renderNode(rule, false, node.path)}
          </VBox>
        ))}
      </VBox>
    );
  }

  if (t === 'NodeNOT') {
    return null;
  }

  if (t === 'NodeRULE') {
    if (node.type === 'sh:MinCountConstraintComponent') return null;

    switch (node.type) {
      case 'sh:MinInclusiveConstraintComponent':
        return <MinInclusiveConstraint field={parentField} value={node.value} />;
      case 'sh:MaxExclusiveConstraintComponent':
        return <MaxExclusiveConstraint field={parentField} value={node.value} />;
      case 'sh:InConstraintComponent':
        return <InConstraint field={parentField} value={node.value} />;
      default: {
        const valStr =
          typeof node.value === 'boolean'
            ? node.value.toString()
            : Array.isArray(node.value)
            ? node.value.join(', ')
            : node.value == null
            ? '<no value>'
            : node.value;
        return (
          <Typography>
            {parentField} needs to satisfy {node.type.replace('sh:', '')} — {valStr}
          </Typography>
        );
      }
    }
  }

  if (t === 'NodeAND' || t === 'NodeOR') {
    const children = node.children || [];

    const dataFields = children.filter(c =>
      c.constructor?.name === 'NodeDATAFIELD' &&
      (c.children || []).some(
        r => r.constructor?.name === 'NodeRULE' &&
             r.type !== 'sh:MinCountConstraintComponent'
      )
    );
    const andGroups = children.filter(c => c.constructor?.name === 'NodeAND');
    const orGroups  = children.filter(c => c.constructor?.name === 'NodeOR');

    if (dataFields.length + andGroups.length + orGroups.length === 0) {
      return null;
    }

    const label = skipAndWrapper && t === 'NodeAND'
      ? null
      : typeLabelMap[t];

    return (
      <VBox gap={2}>
        {label && <Typography variant="body1">{label}</Typography>}

        {dataFields.map((df, i) => (
          <Box key={`df-${i}`} sx={{ pl: 2 }}>
            {renderNode(df, false, parentField)}
          </Box>
        ))}

        {andGroups.map((grp, i) => (
          <Box key={`and-${i}`} sx={{ pl: 2 }}>
            {renderNode(grp, false, parentField)}
          </Box>
        ))}

        {orGroups.map((grp, i) => (
          <Box key={`or-${i}`} sx={{ pl: 2 }}>
            {renderNode(grp, false, parentField)}
          </Box>
        ))}
      </VBox>
    );
  }

  return null;
}

export default function RecursiveRulesTable({ graphRoot }) {
  if (!graphRoot) return null;
  return (
    <VBox
      sx={{
        backgroundColor: 'white.main',
        padding: '32px',
        borderRadius: theme.shape.borderRadius,
      }}
    >
      {renderNode(graphRoot)}
    </VBox>
  );
}