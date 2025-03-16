import React from "react";
import { Typography } from "@mui/material";
import { HBox, VBox } from "../../../shared-components/LayoutBoxes";
import theme from "../../../../theme";

const BenefitPageRuleEntry = ({ ruleData, validated_status }) => {

    const validtyColor = (() => {
        switch (ruleData.validity) {
            case 'valid':
                return `${theme.palette.green.main}40`;
            case 'missing':
                return theme.palette.custom.darkGreyTransparent;
            case 'invalid':
                return `${theme.palette.red.main}40`;
            default:
                return theme.palette.custom.darkGreyTransparent;
        }
    })();

    return (
        <VBox sx={{
            borderRadius: theme.shape.borderRadius,
            padding: theme.spacing(2),
            backgroundColor: validtyColor,
            gap: theme.spacing(2),
        }}>
            <HBox sx={{ gap: 1, flexWrap: 'wrap' }}>
                <Typography variant="body1">{ruleData.requirement.label}{':'}</Typography>
                <Typography variant="body1" sx={{
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word',
                    hyphens: 'auto',
                    WebkitHyphens: 'auto',
                    msHyphens: 'auto'
                }}>
                    {ruleData.requirement.rule}
                </Typography>
            </HBox>
            {validated_status && (
                <HBox sx={{ gap: theme.spacing(2)}}>
                    <Typography variant="h2" sx={{ wordBreak: 'break-word', fontWeight: '500' }}>
                        {ruleData.userValue}
                    </Typography>
                </HBox>
            )}
        </VBox>
    );
};

export default BenefitPageRuleEntry;