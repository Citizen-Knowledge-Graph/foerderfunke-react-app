import { useMemo } from 'react';
import useFetchData from '@/ui/shared-hooks/utility/useFetchResource';
import { pickLang } from "@/ui/language/useTranslation";

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
      title:                pickLang(resource?.title, language, 'Unknown Title'),
      leikaId:              getField(resource, 'leika_id', 'Unknown Id'),
      teaser:               pickLang(resource?.teaser, language, null),
      descriptionMD:        pickLang(resource?.descriptionMD, language, null),
      goals:                pickLang(resource?.goals, language, null),
      benefitScope:         pickLang(resource?.benefit_scope, language, null),
      benefitType:          pickLang(resource?.benefit_type, language, null),
      examplesMD:           pickLang(resource?.examplesMD, language, null),
      contactMD:            pickLang(resource?.contactMD, language, resource?.contactMD),
      howMD:                pickLang(resource?.howMD, language, null),
      documentsMD:          pickLang(resource?.documentsMD, language, null),
      processMD:            pickLang(resource?.processMD, language, null),
      deadlinesMD:          pickLang(resource?.deadlinesMD, language, null),
      additionalSupportMD:  pickLang(resource?.additionalSupportMD, language, null),
      frequentQuestionsMD:  pickLang(resource?.frequentQuestionsMD, language, null),
      furtherCommentsMD:    pickLang(resource?.furtherCommentsMD, language, null),
      relatedBenefitsMD:    pickLang(resource?.relatedBenefitsMD, language, null),
      commonPitfallsMD:     pickLang(resource?.commonPitfallsMD, language, null),
      legalBasisMD:         pickLang(resource?.legalBasisMD, language, null),
      status:               getField(resource, 'status', 'Unknown Status'),
      examples:             pickLang(resource?.examples, language, {}),
      fundingConditions:    pickLang(resource?.funding_conditions, language, {}),
      requiredDocuments:    pickLang(resource?.required_documents, language, []),
      additionalSupport:    pickLang(resource?.additional_support, language, {}),
      legalBasis:           pickLang(resource?.legal_basis, language, {}),
      furtherInformation:   pickLang(resource?.further_information, language, []),
      brief :               pickLang(resource?.general?.brief, language, null),
      scope :               pickLang(resource?.general?.scope, language, null),
      examplesList :        pickLang(resource?.general?.examples, language, null),
      applicationProcess:   pickLang(resource?.application_process?.brief, language, null),
    };
  }, [hydrationData, id, language]);

  return benefitPageData;
};

export default useFetchStaticBenefitPageData;