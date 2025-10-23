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
      leikaId:              getField(resource, 'leika_id', null),
      teaser:               pickLang(resource?.teaser, language, null),
      brief :               pickLang(resource?.general?.brief, language, null),
      scope :               pickLang(resource?.general?.scope, language, null),
      examplesList :        pickLang(resource?.general?.examples, language, null),
      applicationProcess:   pickLang(resource?.application_process?.brief, language, null),
      localisedData:        resource?.specific ? resource.specific : null,
    };
  }, [hydrationData, id, language]);

  return benefitPageData;
};

export default useFetchStaticBenefitPageData;