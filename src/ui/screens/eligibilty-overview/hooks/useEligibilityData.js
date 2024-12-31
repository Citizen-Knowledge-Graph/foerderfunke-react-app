import { useEffect, useState } from "react";
import { buildEligibilityReports } from "../../../../core/utilities/buildEligibilityReports";

const useEligibilityData = (validationReport, hydrationData, language) => {
    const [eligibilityData, setEligibilityData] = useState(null);

    useEffect(() => {
        if (validationReport && hydrationData) {
            const data = buildEligibilityReports(validationReport, hydrationData, language);
            setEligibilityData(data);
        }
    }, [validationReport, hydrationData, language]);

    return eligibilityData;
};

export default useEligibilityData;