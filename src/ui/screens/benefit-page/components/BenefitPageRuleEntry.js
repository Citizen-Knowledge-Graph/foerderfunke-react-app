import React from "react";
import { Typography } from "@mui/material";
import useTranslation from "../../../language/useTranslation";
import ContentBox from "../../../shared-components/ContentBox";
import { VBox } from "../../../shared-components/LayoutBoxes";
import theme from "../../../../theme";

const BenefitPageRuleEntry = ({ ruleData, validated_status }) => {
    const { t } = useTranslation();

    const validtyColor = (() => {
        switch (ruleData.validity) {
            case 'valid':
                return theme.palette.secondary.light;
            case 'missing':
                return theme.palette.custom.darkGreyTransparent;
            case 'invalid':
                return theme.palette.error.light;
            default:
                return theme.palette.custom.darkGreyTransparent;
        }
    })();

    return (
        <VBox sx={{
            borderRadius: theme.shape.borderRadius,
            borderStyle: 'solid',
            borderWidth: '1px',
            borderColor: theme.palette.custom.lightGrey,
            padding: theme.spacing(2),
            backgroundColor: "white"
        }}>
            <VBox sx={{ gap: 0 }}>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{ruleData.requirement.label}</Typography>
                <Typography variant="body1" sx={{
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word',
                    hyphens: 'auto',
                    WebkitHyphens: 'auto',
                    msHyphens: 'auto'
                }}>
                    {ruleData.requirement.rule}
                </Typography>
            </VBox>
            {validated_status && (
                <ContentBox sx={{ padding: theme.spacing(1), backgroundColor: validtyColor }}>
                    <Typography variant="body2">
                        {t('app.benefitPage.rulesTable.yourAnswer')}
                    </Typography>
                    <Typography variant="body1" sx={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                        {ruleData.userValue}
                    </Typography>
                </ContentBox>
            )}
        </VBox>
    );
};

export default BenefitPageRuleEntry;