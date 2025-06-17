import React, { useState } from 'react';
import theme from '@/theme';
import { RuleSwitch } from './RuleTypes';
import { useMetadataStore } from '@/ui/storage/zustand';
import { Typography, IconButton, Collapse, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { HBox, VBox } from '@/ui/shared-components/LayoutBoxes';
import { useStore } from "@/ui/shared-components/ViewportUpdater";

function CollapsibleGroup({ label, children, status }) {
    const isDesktop = useStore((state) => state.isDesktop);
    const [open, setOpen] = useState(false);

    const bg =
        status === 'ok' ? 'secondary.light' :
            status === 'violation' ? 'error.light' :
                'white.main';

    return (
        <VBox
            gap={2}
            sx={{
                backgroundColor: open ? 'transparent' : bg,
                border: '1px solid #ccc',
                padding: isDesktop ? 1 : 0.125,
                borderRadius: theme.shape.borderRadius,
                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
            }}
        >
            <Box display="flex" alignItems="center" justifyContent="space-between">
                <HBox sx={{ padding: 2, justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <Typography variant="body1">{label}</Typography>
                    <IconButton size="small" onClick={() => setOpen(prev => !prev)}>
                        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                </HBox>
            </Box>
            {
                open && (
                    <Collapse in={open}>
                        <VBox>
                            {children}
                        </VBox>
                    </Collapse>
                )
            }
        </VBox>
    );
}

function renderNode(
    node,
    parentField = {},
    metadata,
    t,
    isNegated = false,
    groupType = null,
) {
    if (!node) return null;
    const nodeType = node.constructor?.nodeType;

    // NOT → flip negation on child
    if (nodeType === 'NodeNOT') {
        const child = node.children?.[0];
        return renderNode(child, parentField, metadata, t, !isNegated);
    }

    // AND / OR group
    if (['NodeROOT', 'NodeCLASS', 'NodeAND', 'NodeOR'].includes(nodeType)) {
        const children = node.children || [];
        const dataFields = children.filter(c => c.constructor?.nodeType === 'NodeDATAFIELD' && c.children?.length > 0);
        const andGroups = children.filter(c => c.constructor?.nodeType === 'NodeAND');
        const orGroups = children.filter(c => c.constructor?.nodeType === 'NodeOR');
        const classGroups = children.filter(c => c.constructor?.nodeType === 'NodeCLASS');

        if (dataFields.length + andGroups.length + orGroups.length + classGroups.length === 0) {
            return null;
        }

        return (
            <VBox>
                {dataFields.map((df, i) => (
                    <VBox key={i} sx={{ mb: 1 }}>
                        {renderNode(df, parentField, metadata, t, isNegated)}
                    </VBox>
                ))}
                {classGroups.map((grp, i) => (
                    <VBox key={i} sx={{ mb: 1 }}>
                        {renderNode(grp, parentField, metadata, t, isNegated, 'NodeCLASS')}
                    </VBox>
                ))}
                {andGroups.map((grp, i) => (
                    <CollapsibleGroup key={i} label={t('app.benefitPage.rulesTable.andConditions')} status={grp.status}>
                        {renderNode(grp, parentField, metadata, t, isNegated, 'NodeAND')}
                    </CollapsibleGroup>
                ))}
                {orGroups.map((grp, i) => (
                    <CollapsibleGroup key={i} label={t('app.benefitPage.rulesTable.orConditions')} status={grp.status}>
                        {renderNode(grp, parentField, metadata, t, isNegated, 'NodeOR')}
                    </CollapsibleGroup>
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
                            t,
                            isNegated
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
            <VBox sx={{ gap: 2 }}>
                <Typography variant="h2" sx={{ fontWeight: '400', wordBreak: "break-word" }}>
                    {t("app.benefitPage.rulesTable.header")}
                </Typography>
                <Typography variant="body1">
                    {t("app.benefitPage.rulesTable.description")}
                </Typography>
                <Typography variant="body1">
                    {t("app.benefitPage.rulesTable.explanationRules")}
                </Typography>
                <VBox>
                    <Typography variant="body1" sx={{ fontWeight: 'bold'}}>
                        {t("app.benefitPage.rulesTable.andExplanationTitle")}
                    </Typography>
                    <Typography variant="body1">
                        {t("app.benefitPage.rulesTable.andExplanationText")}
                    </Typography>
                </VBox>
                <VBox>
                    <Typography variant="body1" sx={{ fontWeight: 'bold'}}>
                        {t("app.benefitPage.rulesTable.orExplanationTitle")}
                    </Typography>
                    <Typography variant="body1">
                        {t("app.benefitPage.rulesTable.orExplanationText")}
                    </Typography>
                </VBox>
            </VBox>
            {renderNode(graphRoot, '', metadata?.['ff:hasDF'], t)}
        </VBox>
    );
}