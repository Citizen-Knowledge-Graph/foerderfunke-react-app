import React from "react";
import { Typography } from "@mui/material";
import { VBox } from "@/ui/shared-components/LayoutBoxes";
import theme from "@/theme";
import EligibilityOverviewList from "./EligibilityOverviewList";

const EligibilityOverviewSection = ({ category, eligibilitySection, iconPaths }) => {
    const eligibleBenefitsComplete = eligibilitySection['ff:eligible']?.final || [];
    const eligibleBenefitsPreliminary = eligibilitySection['ff:eligible']?.preliminary || [];
    const ineligibleBenefits = eligibilitySection['ff:ineligible'] || []
    const undeterminableBenefits = eligibilitySection['ff:missingData'] || []
    const { eligible, preliminaryEligible, ineligible, missing } = iconPaths;

    return (
        <VBox sx={{ 
            gap: 4,
            backgroundColor: 'white.main',
            padding: '32px',
            borderRadius: theme.shape.borderRadius,
        }}>
            <Typography variant="h4" sx={{ color: 'pink.main', fontWeight: '400' }}>
                {category}
            </Typography>
            <VBox
                sx={{
                    gap: 4,
                }}
            >
                {eligibleBenefitsComplete.length > 0 &&
                    <EligibilityOverviewList items={eligibleBenefitsComplete} eligible={'eligible'} iconPath={eligible} />}       
                {eligibleBenefitsPreliminary.length > 0 &&
                    <EligibilityOverviewList items={eligibleBenefitsPreliminary} eligible={'preliminary-eligible'} iconPath={preliminaryEligible} />}                                   
                {ineligibleBenefits.length > 0 &&
                    <EligibilityOverviewList items={ineligibleBenefits} eligible={'non-eligible'} iconPath={ineligible} />}
                {undeterminableBenefits.length > 0 &&
                    <EligibilityOverviewList items={undeterminableBenefits} eligible={'indeterminate'} iconPath={missing} />}
            </VBox>
        </VBox >
    );
}

export default EligibilityOverviewSection;