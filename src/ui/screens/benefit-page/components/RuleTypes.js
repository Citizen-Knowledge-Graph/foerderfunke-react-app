import React from 'react';
import { Typography } from '@mui/material';
import { VBox } from '@/ui/shared-components/LayoutBoxes';
import { expand } from "@foerderfunke/sem-ops-utils";

const ActualValue = ({ actual, dfMetadata, t }) => {
  let answer;
  switch (dfMetadata?.['ff:datatype']?.['@id']) {
    case 'xsd:boolean':
      answer = actual === 'true' ? t('app.benefitPage.rulesTable.yes') :
        actual === 'false' ? t('app.benefitPage.rulesTable.no') :
        'not provided';
      break;
    case 'ff:selection':
      answer = actual ? dfMetadata?.['ff:hasAnswerOption']?.find(ao => expand(ao?.['@id']) === actual)?.['rdfs:label']?.['@value'] : 'not provided';
      break;
    case 'ff:selection_multiple':
      answer = actual
        ? dfMetadata?.['ff:hasAnswerOption']
          ?.filter(ao => actual.includes(expand(ao?.['@id'])))
          .map(ao => ao?.['rdfs:label']?.['@value'])
          .join(', ')
        : 'not provided';
      break;
    default:
      answer = actual != null ? actual : 'not provided';
      break;
  }

  return (
    <VBox gap={0}>
      <Typography variant="body2">
        {t('app.benefitPage.rulesTable.actualValue')}
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
        <strong>{answer}</strong>
      </Typography>
    </VBox>
  );
};

export const MinInclusiveConstraint = ({ node, negate = false, t }) => {
  return (
    <VBox>
      <Typography variant="body2">
        {t('app.benefitPage.rulesTable.responseMustBeGreaterThanOrEqualTo')}
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
        {node.value}
      </Typography>
    </VBox>
  );
};

export const MaxExclusiveConstraint = ({ node, t }) => {
  return (
    <VBox>
      <Typography variant="body2">
        {t('app.benefitPage.rulesTable.responseMustBeLessThan')}
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
        {node.value}
      </Typography>
    </VBox>
  );
};

export const InConstraint = ({ node, dfMetadata, negate = false, t }) => {
  const vals = Array.isArray(node.value) ? node.value : [];

  const labels = (Array.isArray(vals) ? vals : []).map(v => {
    const opt = dfMetadata?.['ff:hasAnswerOption']?.find(f => f?.['@id'] === v);
    if (opt) {
      return opt['rdfs:label']?.['@value'];
    }
    if (v === true) return t('app.benefitPage.rulesTable.yes');
    if (v === false) return t('app.benefitPage.rulesTable.no');
    return String(v);
  }).filter(Boolean);

  // single value
  if (labels.length === 1) {
    const l = labels[0];
    return (
      <VBox gap={0}>
        <Typography variant="body2">
          {negate
            ? t('app.benefitPage.rulesTable.responseMustNotBe')
            : t('app.benefitPage.rulesTable.responseNeedsToBe')}
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
          {l}
        </Typography>
      </VBox>
    );
  }

  // multiple values
  return (
    <VBox gap={0}>
      <Typography variant="body2">
        {negate
          ? t('app.benefitPage.rulesTable.responseMustNotBeOneOf')
          : t('app.benefitPage.rulesTable.responseMustBeOneOf')}
      </Typography>
      <VBox gap={0}>
        {
          labels.map((label, index) => (
            <Typography key={index} variant="body1" sx={{ fontWeight: 'bold' }}>
              - {label}
            </Typography>
          ))
        }
      </VBox>
    </VBox>
  );
};

const constraintMap = {
  'sh:MinInclusiveConstraintComponent': MinInclusiveConstraint,
  'sh:MaxExclusiveConstraintComponent': MaxExclusiveConstraint,
  'sh:InConstraintComponent': InConstraint,
};

export const RuleSwitch = ({ node, parentField, dfMetadata, negate, t }) => {
  const missing = node?.shaclEval?.status === 'missing';
  const Comp = constraintMap[node?.type];

  if (Comp) {
    return (
      <VBox gap={1}>
        <Comp
          field={parentField}
          node={node}
          dfMetadata={dfMetadata}
          negate={negate}
          t={t}
        />
        {!missing && (
          <ActualValue
            actual={node.shaclEval?.actualValue}
            dfMetadata={dfMetadata}
            t={t}
          />
        )}
      </VBox>
    );
  }

  // fallback for any unrecognized constraint type
  return (
    <Typography variant="body1">
      {negate
        ? `${parentField.fieldLabel} must not match the constraint`
        : `${parentField.fieldLabel} must match the constraint`}
    </Typography>
  );
};

