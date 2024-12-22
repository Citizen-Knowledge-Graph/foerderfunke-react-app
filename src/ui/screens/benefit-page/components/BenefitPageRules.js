import React from "react";
import { Typography } from '@mui/material';
import { useMetadataStore, useUserStore, useValidationReportStore } from "../../../storage/zustand";
import userManager from "../../../../core/managers/userManager";
import { buildRulesOutput } from "../../../../core/utilities/ruleParsing";
import VStack from "../../../shared-components/VStack";
import BenefitPageRuleEntry from "./BenefitPageRuleEntry";
import Divider from "@mui/material/Divider";
import useTranslation from "../../../language/useTranslation";
import useFetchData from "../../../shared-hooks/useFetchData";
import useBenefitPageRules from "../hooks/useBenefitPageRules";


const BenefitPageRules = ({ benefitId }) => {
    const { t } = useTranslation();    
    const metadata = useMetadataStore((state) => state.metadata);
    const validationReport = useValidationReportStore((state) => state.validationReport);
    const activeUser = useUserStore((state) => state.activeUserId);
    const userProfile = userManager.retrieveUserData(activeUser);

    const validationConfig = useFetchData('assets/data/requirement-profiles/requirement-profiles.json');
    const { rulesData, benefitReport } = useBenefitPageRules(benefitId, validationConfig, validationReport);
    const rules = buildRulesOutput(rulesData, metadata, benefitReport, userProfile, t);

    return (
        <VStack sx={{ width: '100%' }}>
            <Typography variant="h6">
                {t('app.benefitPage.rulesTable.header')}
            </Typography>
            <VStack gap={1} sx={{
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'lightgrey',
                borderRadius: '12px',
            }}>
                {
                    rules &&
                    rules.map((rule, index) => (
                        <VStack gap={1} key={index}>
                            <BenefitPageRuleEntry ruleData={rule} />
                            {index < rules.length - 1 && <Divider />}
                        </VStack>
                    ))
                }
            </VStack>
        </VStack>

    );
}

export default BenefitPageRules;
