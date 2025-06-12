import React from 'react';
import { Typography, Box } from '@mui/material';
import { VBox } from '@/ui/shared-components/LayoutBoxes';
import theme from '@/theme';
import { RuleSwitch } from './RuleTypes';
import { useMetadataStore } from '@/ui/storage/zustand';

function renderNode(
    node,
    parentField = {},
    metadata,
    isNegated = false,
    t
) {
    if (!node) return null;
    const nodeType = node.constructor?.nodeType;

    // ROOT → skip wrapper, first AND skip label
    if (nodeType === 'NodeROOT') {
        return renderNode(node.children?.[0], '', metadata, false, t);
    }

    // NOT → flip negation on child
    if (nodeType === 'NodeNOT') {
        const child = node.children?.[0];
        return renderNode(child, parentField, metadata, !isNegated, t);
    }

    // AND / OR group
    if (nodeType === 'NodeAND' || nodeType === 'NodeOR') {
        const children = node.children || [];
        const dataFields = children.filter(c => c.constructor?.nodeType === 'NodeDATAFIELD' && c.children?.length > 0);
        const andGroups = children.filter(c => c.constructor?.nodeType === 'NodeAND');
        const orGroups = children.filter(c => c.constructor?.nodeType === 'NodeOR');

        if (dataFields.length + andGroups.length + orGroups.length === 0) {
            return null;
        }

        const mappedLabel = {
            'NodeAND': t('app.benefitPage.rulesTable.andConditions'),
            'NodeOR': t('app.benefitPage.rulesTable.orConditions'),
        }

        return (
            <VBox
                sx={{
                    position: 'relative',
                    pl: 2,
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: '0rem',
                        bottom: 0,
                        left: 0,
                        borderLeft: '2px dashed #ccc',
                    },
                }}
            >
                <Typography variant="h6">
                    {mappedLabel[nodeType]}
                </Typography>

                {dataFields.map((df, i) => (
                    <Box key={i} sx={{ mb: 1 }}>
                        {renderNode(df, parentField, metadata, isNegated, t)}
                    </Box>
                ))}
                {andGroups.map((grp, i) => (
                    <Box key={i} sx={{ mb: 1 }}>
                        {renderNode(grp, parentField, metadata, isNegated, t)}
                    </Box>
                ))}
                {orGroups.map((grp, i) => (
                    <Box key={i}>
                        {renderNode(grp, parentField, metadata, isNegated, t)}
                    </Box>
                ))}
            </VBox>
        );
    }

    // DATAFIELD → include RULE|NOT, drop MinCount
    if (nodeType === 'NodeDATAFIELD') {
        const raw = node.children || [];
        const rules = raw.filter(c =>
            c.constructor?.nodeType === 'NodeRULE' ||
            c.constructor?.nodeType === 'NodeNOT'
        );
        if (rules.length === 0) return null;

        const fieldName = node.path;
        const meta = metadata?.find(f => f?.['@id'] === fieldName) || {};
        const fieldLabel = meta['rdfs:label']?.['@value'] || fieldName;
        const fieldQuestion = meta['schema:question']?.['@value'] || '';

        parentField = {
            fieldLabel,
            fieldId: fieldName,
        }

        const bg =
            node.status === 'ok' ? 'secondary.light' :
                node.status === 'violation' ? 'error.light' :
                    'white.main';
        const border = node.status === 'missing' ? '1px solid #ccc' : '';

        return (
            <VBox
                gap={2}
                sx={{
                    backgroundColor: bg,
                    padding: 2,
                    border: border,
                    borderRadius: theme.shape.borderRadius,
                    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
                }}
            >
                <VBox gap={1}>
                    <Typography variant="body2">{fieldLabel}</Typography>
                    <VBox gap={0}>
                        <Typography variant="body2">{t('app.benefitPage.rulesTable.datafieldQuestion')}</Typography>
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                            {fieldQuestion}
                        </Typography>
                    </VBox>
                </VBox>
                {rules.map((r, i) => (
                    <VBox key={i}>
                        {renderNode(
                            r,
                            parentField,
                            metadata,
                            isNegated,
                            t
                        )}
                    </VBox>
                ))}
            </VBox>
        );
    }

    // RULE → delegate to RuleTypes
    if (nodeType === 'NodeRULE') {
        const dfMetadata = metadata?.find(f => f?.['@id'] === parentField.fieldId)
        return (<RuleSwitch
            node={node}
            parentField={parentField}
            negate={isNegated}
            dfMetadata={dfMetadata}
            t={t}
        />)
    }

    return null;
}

export default function RecursiveRulesTable({ graphRoot, t }) {
    const metadata = useMetadataStore(state => state.metadata);
    if (!graphRoot) return null;
    return (
        <VBox
            sx={{
                gap: 4,
                backgroundColor: 'white.main',
                padding: '32px',
                borderRadius: theme.shape.borderRadius,
            }}
        >
            <VBox>
                <Typography variant="h2" sx={{ fontWeight: '400', wordBreak: "break-word" }}>
                    {t("app.benefitPage.rulesTable.header")}
                </Typography>
                <Typography variant="body1" sx={{ marginTop: 1 }}>
                    {t("app.benefitPage.rulesTable.description")}
                </Typography>
            </VBox>
            {renderNode(graphRoot, '', metadata?.['ff:hasDF'], false, t)}
        </VBox>
    );
}