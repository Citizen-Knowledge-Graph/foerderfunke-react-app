import { useMemo } from "react";

const useBuildBenefitTitle = (selectedBenefit, metadata) => {
  return useMemo(() => {
    if (!metadata?.['ff:hasRP'] || !selectedBenefit) return null;
    return metadata?.['ff:hasRP']?.find(rp => rp['@id'] === selectedBenefit)?.['ff:title']["@value"]|| "";
  }
  , [metadata, selectedBenefit]);
};

export default useBuildBenefitTitle;