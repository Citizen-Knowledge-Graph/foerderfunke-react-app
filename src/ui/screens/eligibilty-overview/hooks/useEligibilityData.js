import { useEffect, useState } from "react";
import { buildEligibilityReports } from "../../../../core/utilities/buildEligibilityReports";

const useEligibilityData = (validationReport, metadata, hydrationData, language) => {
    const [eligibilityData, setEligibilityData] = useState(null);

    useEffect(() => {
        if (validationReport && hydrationData) {
            const data = buildEligibilityReports(validationReport, metadata, hydrationData, language);
            setEligibilityData(data);
        }

    }, [validationReport, hydrationData, metadata, language]);

    return eligibilityData;
};

export default useEligibilityData;