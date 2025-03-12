import React from "react";
import { Typography } from "@mui/material";
import { ValidationResult } from "@foerderfunke/matching-engine"
import { VBox } from "../../../shared-components/LayoutBoxes"
import EligibilityOverviewList from "./EligibilityOverviewList"
import theme from "../../../../theme";


const EligibilityOverviewSection = ({ category, eligibilitySection }) => {
    const eligibleBenefits = eligibilitySection[ValidationResult.ELIGIBLE] || []
    const ineligibleBenefits = eligibilitySection[ValidationResult.INELIGIBLE] || []
    const undeterminableBenefits = eligibilitySection[ValidationResult.UNDETERMINABLE] || []

    const eligibleIcon = `${process.env.PUBLIC_URL}/assets/images/application/icon-image-eligible.svg`;
    const ineligibleIcon = `${process.env.PUBLIC_URL}/assets/images/application/icon-image-ineligible.svg`;
    const missingIcon = `${process.env.PUBLIC_URL}/assets/images/application/icon-image-missing.svg`;

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
                {eligibleBenefits.length > 0 &&
                    <EligibilityOverviewList items={eligibleBenefits} eligible={'eligible'} iconPath={eligibleIcon} />}
                {ineligibleBenefits.length > 0 &&
                    <EligibilityOverviewList items={ineligibleBenefits} eligible={'non-eligible'} iconPath={ineligibleIcon} />}
                {undeterminableBenefits.length > 0 &&
                    <EligibilityOverviewList items={undeterminableBenefits} eligible={'indeterminate'} iconPath={missingIcon} />}
            </VBox>
        </VBox >
    );
}

export default EligibilityOverviewSection;