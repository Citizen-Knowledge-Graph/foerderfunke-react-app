import { useState, useEffect } from "react";
import { transformRulesFromRequirementProfile } from "@foerderfunke/matching-engine/src/prematch";
import resourceService from "@/core/services/resourceService";

const useBenefitPageRules = (benefitId, validationConfig, validationReport) => {
    const [rulesData, setRulesData] = useState({});
    const [benefitReport, setBenefitReport] = useState({});

    useEffect(() => {
        const fetchRulesData = async () => {
            if (!validationConfig) return;

            const rpUri = benefitId.startsWith("ff:") 
                ? `https://foerderfunke.org/default#${benefitId.split(":")[1]}`
                : benefitId;

            const query = validationConfig['queries'].find(query => query['rpUri'] === rpUri);
            if (!query) return;

            const rpTurtleStr = await resourceService.fetchResource(query.fileUrl);
            const rules = await transformRulesFromRequirementProfile(rpTurtleStr);

            setRulesData(rules);
            setBenefitReport(validationReport?.reports?.find(report => report.rpUri === rpUri));
        };

        fetchRulesData();
    }, [benefitId, validationConfig, validationReport]);

    return { rulesData, benefitReport };
};

export default useBenefitPageRules;