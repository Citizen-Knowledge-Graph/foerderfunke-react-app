import { useMemo } from "react";

const useBuildBenefitsTitles = (selectedBenefits, metadata) => {
    return useMemo(() => {
        if (!metadata?.['ff:hasRP'] || !Array.isArray(selectedBenefits) || selectedBenefits.length === 0) {
            return [];
        }
        return selectedBenefits
            .map(benefitId => {
                const match = metadata['ff:hasRP']?.find(rp => rp['@id'] === benefitId);
                return match?.['ff:title']?.["@value"] || "";
            })
            .filter(title => title); // remove empty strings
    }, [metadata, selectedBenefits]);
};

export default useBuildBenefitsTitles;
