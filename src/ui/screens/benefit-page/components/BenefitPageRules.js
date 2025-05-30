import React, { useState } from "react";
import { Typography, IconButton, Collapse } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useValidationReportStore } from "@/ui/storage/zustand";
import { useMetadataStore } from "@/ui/storage/zustand";
import { buildRulesOutput } from "@/core/utils/ruleParsing";
import useTranslation from "@/ui/language/useTranslation";
import useFetchData from "@/ui/shared-hooks/utility/useFetchResource";
import { VBox, HBox } from "@/ui/shared-components/LayoutBoxes";
import theme from "@/theme";
import useBenefitPageRules from "../hooks/useBenefitPageRules";
import BenefitPageRuleEntry from "./BenefitPageRuleEntry";

const BenefitPageRules = ({ benefitId, validatedStatus }) => {
    const { t } = useTranslation();
    const metadata = useMetadataStore((state) => state.metadata);
    const validationReport = useValidationReportStore((state) => state.validationReport);

    const validationConfig = useFetchData("assets/data/requirement-profiles/requirement-profiles.json");
    const { rulesData } = useBenefitPageRules(benefitId, validationConfig, validationReport);
    const rules = buildRulesOutput(rulesData, metadata, t);

    const [showRules, setShowRules] = useState(false);

    return (
        <VBox
            sx={{
                gap: 2,
                backgroundColor: 'white.main',
                padding: '32px',
                borderRadius: theme.shape.borderRadius,
            }}
        >
            <HBox sx={{ justifyContent: 'space-between', alignItems: "center", cursor: "pointer" }} onClick={() => setShowRules(!showRules)}>
                <Typography variant="h2" sx={{ fontWeight: '400', wordBreak: "break-word" }}>
                    {t("app.benefitPage.rulesTable.header")}
                </Typography>
                <IconButton
                    sx={{
                        transition: "transform 0.3s",
                        transform: showRules ? "rotate(180deg)" : "rotate(0deg)",
                        marginLeft: "8px",
                    }}
                >
                    <ExpandMoreIcon />
                </IconButton>
            </HBox>
            {
                showRules && (
                    <Collapse in={showRules} sx={{ marginTop: 1 }}>
                        <VBox gap={1}>
                            {rules &&
                                rules.map((rule, index) => (
                                    <BenefitPageRuleEntry key={index} ruleData={rule} validatedStatus={validatedStatus} />
                                ))}
                        </VBox>
                    </Collapse>
                )
            }
        </VBox>
    );
};

export default BenefitPageRules;