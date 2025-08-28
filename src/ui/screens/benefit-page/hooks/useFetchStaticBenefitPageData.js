import { useMemo } from 'react';
import useFetchData from '@/ui/shared-hooks/utility/useFetchResource';

const getField = (data, path, fallback) =>
  path
    .split('.')
    .reduce((acc, part) => acc?.[part], data) ?? fallback;

const useFetchStaticBenefitPageData = (id, language) => {
  const hydrationData = useFetchData(
    'assets/data/requirement-profiles/requirement-profiles-hydration.json'
  );

  const benefitPageData = useMemo(() => {
    if (!hydrationData || !id) {
      return null;
    }

    const resource = hydrationData[id] || {};
    return {
      title:                getField(resource, `title.${language}`, 'Unknown Title'),
      leikaId:              getField(resource, 'leika_id',       'Unknown Id'),
      teaser:               getField(resource, `teaser.${language}`, null),
      descriptionMD:        getField(resource, `descriptionMD.${language}`,null),
      goals:                getField(resource, `goals.${language}`, null),
      benefitScope:         getField(resource, `benefit_scope.${language}`, null),
      benefitType:          getField(resource, `benefit_type.${language}`, null),
      examplesMD:           getField(resource, `examplesMD.${language}`, null),
      contactMD:            getField(resource, `contactMD.${language}`, null),
      howMD:                getField(resource, `howMD.${language}`, null),
      documentsMD:          getField(resource, `documentsMD.${language}`, null),
      processMD:            getField(resource, `processMD.${language}`, null),          
      deadlinesMD:          getField(resource, `deadlinesMD.${language}`, null),
      additionalSupportMD:  getField(resource, `additionalSupportMD.${language}`, null),
      frequentQuestionsMD:  getField(resource, `frequentQuestionsMD.${language}`, null),
      furtherCommentsMD:    getField(resource, `furtherCommentsMD.${language}`, null),
      relatedBenefitsMD:    getField(resource, `relatedBenefitsMD.${language}`, null),
      commonPitfallsMD:     getField(resource, `commonPitfallsMD.${language}`, null),
      legalBasisMD:         getField(resource, `legalBasisMD.${language}`, null),
      status:               getField(resource, 'status',         'Unknown Status'),
      applicationProcess:   getField(resource, `application_process.${language}`, {}),
      examples:             getField(resource, `examples.${language}`,           {}),
      fundingConditions:    getField(resource, `funding_conditions.${language}`, {}),
      requiredDocuments:    getField(resource, `required_documents.${language}`, []),
      additionalSupport:    getField(resource, `additional_support.${language}`, {}),
      legalBasis:           getField(resource, `legal_basis.${language}`,        {}),
      furtherInformation:   getField(resource, `further_information.${language}`, []),
    };
  }, [hydrationData, id, language]);

  return benefitPageData;
};

export default useFetchStaticBenefitPageData;