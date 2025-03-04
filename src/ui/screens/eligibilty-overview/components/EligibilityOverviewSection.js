import React from "react";
import { Typography } from "@mui/material";
import { ValidationResult } from "@foerderfunke/matching-engine"
import { VBox } from "../../../shared-components/LayoutBoxes"
import EligibilityOverviewList from "./EligibilityOverviewList"
import ContentBox from '../../../shared-components/ContentBox';


const EligibilityOverviewSection = ({ color, category, eligibilitySection }) => {


    const eligibleBenefits = eligibilitySection[ValidationResult.ELIGIBLE] || []
    const ineligibleBenefits = eligibilitySection[ValidationResult.INELIGIBLE] || []
    const undeterminableBenefits = eligibilitySection[ValidationResult.UNDETERMINABLE] || []

    return (
        <VBox sx={{ gap: 3 }}>
            <ContentBox sx={{ backgroundColor: color }}>
                <Typography variant="h5">
                    {category}
                </Typography>
            </ContentBox>
            <VBox>
                {eligibleBenefits.length > 0 &&
                    <EligibilityOverviewList items={eligibleBenefits} eligible={'eligible'} />}
                {ineligibleBenefits.length > 0 &&
                    <EligibilityOverviewList items={ineligibleBenefits} eligible={'non-eligible'} />}
                {undeterminableBenefits.length > 0 &&
                    <EligibilityOverviewList items={undeterminableBenefits} eligible={'missing-data'} />}
            </VBox>
        </VBox >
    );
}

export default EligibilityOverviewSection;