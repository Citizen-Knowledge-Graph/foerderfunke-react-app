import React, { useState } from "react";
import { Typography, IconButton, Collapse } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useMetadataStore, useUserStore, useValidationReportStore } from "../../../storage/zustand";
import userManager from "../../../../core/managers/userManager";
import { buildRulesOutput } from "../../../../core/utilities/ruleParsing";
import BenefitPageRuleEntry from "./BenefitPageRuleEntry";
import useTranslation from "../../../language/useTranslation";
import useFetchData from "../../../shared-hooks/useFetchData";
import useBenefitPageRules from "../hooks/useBenefitPageRules";
import { VBox, HBox } from "../../../shared-components/LayoutBoxes";
import theme from "../../../../theme";

const BenefitPageRules = ({ benefitId, validated_status }) => {
    const { t } = useTranslation();
    const metadata = useMetadataStore((state) => state.metadata);
    const validationReport = useValidationReportStore((state) => state.validationReport);
    const activeUser = useUserStore((state) => state.activeUserId);
    const userProfile = userManager.retrieveUserData(activeUser);

    const validationConfig = useFetchData("assets/data/requirement-profiles/requirement-profiles.json");
    const { rulesData, benefitReport } = useBenefitPageRules(benefitId, validationConfig, validationReport);
    const rules = buildRulesOutput(rulesData, metadata, benefitReport, userProfile, t);

    const [showRules, setShowRules] = useState(false);

    return (
        <VBox
            sx={{
                gap: theme.spacing(2),
                backgroundColor: theme.palette.white.main,
                padding: '32px',
                borderRadius: theme.shape.borderRadius,
            }}
        >
            <HBox sx={{ justifyContent: 'space-between', alignItems: "center", cursor: "pointer" }} onClick={() => setShowRules(!showRules)}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
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
                    <Collapse in={showRules} sx={{ marginTop: theme.spacing(1) }}>
                        <VBox gap={1}>
                            {rules &&
                                rules.map((rule, index) => (
                                    <BenefitPageRuleEntry key={index} ruleData={rule} validated_status={validated_status} />
                                ))}
                        </VBox>
                    </Collapse>
                )
            }
        </VBox>
    );
};

export default BenefitPageRules;