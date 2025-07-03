import React from "react";
import { Typography } from "@mui/material";
import { VBox } from "@/ui/shared-components/LayoutBoxes";
import theme from "@/theme";
import EligibilityOverviewList from "./EligibilityOverviewList";

const EligibilityOverviewSection = ({ t, category, eligibilitySection }) => {
    const eligibleBenefitsComplete = eligibilitySection['ff:eligible'] || [];
    const ineligibleBenefits = eligibilitySection['ff:ineligible'] || []
    const undeterminableBenefits = eligibilitySection['ff:missingData'] || []

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
                    <EligibilityOverviewList t={t} items={eligibleBenefitsComplete} eligible={'eligible'} />}                                      
                {ineligibleBenefits.length > 0 &&
                    <EligibilityOverviewList t={t} items={ineligibleBenefits} eligible={'non-eligible'} />}
                {undeterminableBenefits.length > 0 &&
                    <EligibilityOverviewList t={t} items={undeterminableBenefits} eligible={'indeterminate'} />}
            </VBox>
        </VBox >
    );
}

export default EligibilityOverviewSection;