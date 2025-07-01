export const buildEligibilityReports = (validationReport, metadata, hydrationData, language) => {
    if (!validationReport) {
        return {
            eligible: [],
            nonEligible: [],
            missingData: []
        };
    }

    const reports = validationReport['ff:hasEvaluatedRequirementProfile'] || [];
    const hasDefinition = metadata['ff:hasDefinition'] || [];
    const bcDict = hasDefinition.reduce((acc, cat) => {
        const t = cat['@type'] || '';
        if (t !== 'ff:BenefitCategory') return acc;
      
        const id    = cat['@id'];
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
        const title = rpHydration?.title?.[language] || 'Unknown Title';
        const category = rpHydration?.category || 'Unknown Category';
        const description = rpHydration?.description?.[language] || 'Unknown Description';
        const status = rpHydration?.status || 'Unknown Status';
        const requiredDocuments = rpHydration?.required_documents?.[language] || [];
        const additionalSupport = rpHydration?.additional_support?.[language] || {};
        const legalBasis = rpHydration?.legal_basis?.[language] || {};
        const furtherInformation = rpHydration?.further_information?.[language] || [];

        // metadata
        const rpMetadata = metadata['ff:hasRP']?.find(rp => rp['@id'] === rpUri)
        const validationStage = rpMetadata?.['ff:validationStage']?.['@id'] || 'Unknown Validation Stage';
        const associatedLaw = rpMetadata?.['ff:legalBasis'];
        const providingAgency = rpMetadata?.['ff:providingAgency']?.['@id'];
        const administrativeLevel = rpMetadata?.['ff:administrativeLevel']?.['@id'];
        const rawCategories = rpMetadata?.['ff:category'];
        const categoriesArray = rawCategories
            ? (Array.isArray(rawCategories) ? rawCategories : [rawCategories])
            : [];
        const benefitCategories = categoriesArray.map(cat => bcDict[cat['@id']]).filter(Boolean);

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
            associatedLaw,
            providingAgency,
            administrativeLevel,
            benefitCategories
        };
    });

    const filterSet = {
        associatedLaw: Array.from(
            new Set(
                allReports
                    .flatMap(r =>
                        Array.isArray(r.associatedLaw)
                            ? r.associatedLaw
                            : [r.associatedLaw]
                    )
                    .filter(Boolean)
            )
        ),

        providingAgency: Array.from(
            new Set(
                allReports
                    .map(r => r.providingAgency)
                    .filter(Boolean)
            )
        ),

        administrativeLevel: Array.from(
            new Set(
                allReports
                    .map(r => r.administrativeLevel)
                    .filter(Boolean)
            )
        ),

        benefitCategories: Array.from(
            new Set(
                allReports
                    .flatMap(r => r.benefitCategories)
                    .filter(Boolean)
            )
        ),
    };

    const eligibilityData = allReports.reduce((acc, report) => {
        const { category, result } = report;

        if (!acc[category]) {
            acc[category] = {};
        }

        if (result === "ff:eligible") {
            if (!acc[category][result]) {
                acc[category][result] = { preliminary: [], final: [] };
            }

            if (report.validationStage === "ff:complete-validation") {
                acc[category][result].final.push(report);
            }

            if (report.validationStage === "ff:preliminary-validation") {
                acc[category][result].preliminary.push(report);
            }
        } else {
            if (!acc[category][result]) {
                acc[category][result] = [];
            }
            acc[category][result].push(report);
        }

        return acc;
    }, {});    

    return { eligibilityData, filterSet };
};
