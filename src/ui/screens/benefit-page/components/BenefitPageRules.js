import React, { useState } from "react";
import { Typography, IconButton, Collapse } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useUserStore, useValidationReportStore } from "@/ui/storage/zustand";
import userManager from "@/core/managers/userManager";
import { buildRulesOutput } from "@/core/utils/ruleParsing";
import useTranslation from "@/ui/language/useTranslation";
import useFetchData from "@/ui/shared-hooks/utility/useFetchResource";
import { VBox, HBox } from "@/ui/shared-components/LayoutBoxes";
import theme from "@/theme";
import useAccessMetadata from "@/ui/storage/useAccessMetadata";
import useBenefitPageRules from "../hooks/useBenefitPageRules";
import BenefitPageRuleEntry from "./BenefitPageRuleEntry";

const BenefitPageRules = ({ benefitId, validatedStatus }) => {
    const { t } = useTranslation();
    const metadata = useAccessMetadata();
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