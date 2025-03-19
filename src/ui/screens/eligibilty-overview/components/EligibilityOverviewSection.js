import React from "react";
import { Typography } from "@mui/material";
import { ValidationResult } from "@foerderfunke/matching-engine"
import { VBox } from "../../../shared-components/LayoutBoxes"
import EligibilityOverviewList from "./EligibilityOverviewList"
import theme from "../../../../theme";


const EligibilityOverviewSection = ({ category, eligibilitySection, iconPaths }) => {
    const eligibleBenefitsComplete = eligibilitySection[ValidationResult.ELIGIBLE]?.final || [];
    const eligibleBenefitsPreliminary = eligibilitySection[ValidationResult.ELIGIBLE]?.preliminary || [];
    const ineligibleBenefits = eligibilitySection[ValidationResult.INELIGIBLE] || []
    const undeterminableBenefits = eligibilitySection[ValidationResult.UNDETERMINABLE] || []
    const { eligible, preliminaryEligible, ineligible, missing } = iconPaths;

    return (
        <VBox sx={{ 
            gap: theme.spacing(4),
            backgroundColor: theme.palette.white.main,
            padding: '32px',
            borderRadius: theme.shape.borderRadius,
        }}>
            <Typography variant="h4" sx={{ color: theme.palette.pink.main, fontWeight: '400' }}>
                {category}
            </Typography>
            <VBox
                sx={{
                    gap: theme.spacing(4),
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