import { useState, useEffect } from "react";
import { transformRulesFromRequirementProfile } from "@foerderfunke/matching-engine/src/prematch";
import resourceService from "@/core/services/resourceService";
import { expand } from "@foerderfunke/sem-ops-utils";

const useBenefitPageRules = (benefitId, validationConfig, validationReport) => {
    const [rulesData, setRulesData] = useState({});
    const [benefitReport, setBenefitReport] = useState({});

    useEffect(() => {
        const fetchRulesData = async () => {
            if (!validationConfig) return;

            const query = validationConfig['queries'].find(query => query['rpUri'] === expand(benefitId));
            if (!query) return;

            const rpTurtleStr = await resourceService.fetchResource(query.fileUrl);
            const rules = await transformRulesFromRequirementProfile(rpTurtleStr);

            setRulesData(rules);
            setBenefitReport(validationReport?.['ff:hasEvaluatedRequirementProfile']?.find(rp => rp['ff:hasRpUri']['@id'] === benefitId));
        };

        fetchRulesData();
    }, [benefitId, validationConfig, validationReport]);

    return { rulesData, benefitReport };
};

export default useBenefitPageRules;