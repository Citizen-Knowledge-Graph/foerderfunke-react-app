import { useMemo } from "react";
import { pickLang } from "@/ui/language/useTranslation";

const useEligibilityData = (validationReport, metadata, hydrationData, language) => {
  return useMemo(() => {
    if (!validationReport) {
      return {
        eligible: [],
        nonEligible: [],
        missingData: []
      };
    }

    const reports = validationReport['ff:hasEvaluatedRequirementProfile'] || [];
    const hasDefinition = metadata['ff:hasDefinition'] || [];
    const defDict = hasDefinition.reduce((acc, cat) => {
      const id = cat['@id'];
      const label = cat['rdfs:label']?.['@value'] || '';
      acc[id] = label;
      return acc;
    }, {});

    const allReports = reports.map(report => {
      const rpUri = report['ff:hasRpUri']?.['@id'] || null;
      const result = report['ff:hasEligibilityStatus']?.['@id'] || null;

      // hydration data
      const rpHydration = hydrationData?.[rpUri]
      const id = rpHydration?.id || 'Unknown Id';
      const title = pickLang(rpHydration?.title, language, 'Unknown Title');
      const category = rpHydration?.category || 'Unknown Category';
      const description = pickLang(rpHydration?.teaser, language, 'Unknown Description');
      const status = rpHydration?.status || 'Unknown Status';
      const requiredDocuments = pickLang(rpHydration?.required_documents, language, []);
      const additionalSupport = pickLang(rpHydration?.additional_support, language, {});
      const legalBasis = pickLang(rpHydration?.legal_basis, language, {});
      const furtherInformation = pickLang(rpHydration?.further_information, language, []);

      // metadata
      const rpMetadata = metadata['ff:hasRP']?.find(rp => rp['@id'] === rpUri)
      const validationStage = rpMetadata?.['ff:validationStage']?.['@id'] || 'Unknown Validation Stage';

      // administrative level
      const rawLevels = rpMetadata?.['ff:administrativeLevel'];
      const administrativeLevels = rawLevels
        ? (Array.isArray(rawLevels) ? rawLevels : [rawLevels])
          .map(level => ({
            id: level['@id'],
            label: defDict[level['@id']] || ''
          }))
        : [];

      // associated law
      const rawLaw = rpMetadata?.['ff:legalBasis'];
      const associatedLaws = rawLaw
        ? (Array.isArray(rawLaw) ? rawLaw : [rawLaw])
          .map(law => ({
            id: law['@id'],
            label: defDict[law['@id']] || ''
          }))
        : [];

      // providing agency
      const rawAgencies = rpMetadata?.['ff:providingAgency'];
      const providingAgencies = rawAgencies
        ? (Array.isArray(rawAgencies) ? rawAgencies : [rawAgencies])
          .map(agency => ({
            id: agency['@id'],
            label: defDict[agency['@id']] || ''
          }))
        : [];

        // tags
        const rawTags = rpMetadata?.['ff:tag'];
        const tags = rawTags
            ? (Array.isArray(rawTags) ? rawTags : [rawTags])
                .map(tag => ({
                    id: tag['@id'],
                    label: defDict[tag['@id']] || ''
                }))
            : [];

      // benefit categories
      const rawCategories = rpMetadata?.['ff:category'];
      const benefitCategories = rawCategories
        ? (Array.isArray(rawCategories) ? rawCategories : [rawCategories])
          .map(cat => ({
            id: cat['@id'],
            label: defDict[cat['@id']] || ''
          }))
        : [];

      return {
        uri: rpUri,
        result,
        id,
        title,
        category,
        description,
        status,
        requiredDocuments,
        additionalSupport,
        legalBasis,
        furtherInformation,
        validationStage,
        associatedLaws,
        providingAgencies,
        tags,
        administrativeLevels,
        benefitCategories
      };
    });

    const filterOptions = {
      associatedLaws: Array.from(
        new Map(
          allReports
            .flatMap(r => r.associatedLaws || [])
            .filter(Boolean)
            .map(cat => [cat.id, cat])
        ).values()
      ),

      providingAgencies: Array.from(
        new Map(
          allReports
            .flatMap(r => r.providingAgencies || [])
            .filter(Boolean)
            .map(cat => [cat.id, cat])
        ).values()
      ),

      administrativeLevels: Array.from(
        new Map(
          allReports
            .flatMap(r => r.administrativeLevels || [])
            .filter(Boolean)
            .map(cat => [cat.id, cat])
        ).values()
      ),

      benefitCategories: Array.from(
        new Map(
          allReports
            .flatMap(r => r.benefitCategories || [])
            .filter(Boolean)
            .map(cat => [cat.id, cat])
        ).values()
      ),
    };

    filterOptions.tags = Array.from(
      new Map(
        allReports
          .flatMap(r => r.tags || [])
          .filter(Boolean)
          .map(cat => [cat.id, cat])
        ).values()
      );

    const eligibilityData = allReports.reduce((acc, report) => {
      const { category, result } = report;

      if (!acc[category]) {
        acc[category] = {};
      }

      if (!acc[category][result]) {
        acc[category][result] = [];
      }

      acc[category][result].push(report);

      return acc;
    }, {});

    return { eligibilityData, filterOptions };


  }, [validationReport, metadata, hydrationData, language]);
};

export default useEligibilityData;