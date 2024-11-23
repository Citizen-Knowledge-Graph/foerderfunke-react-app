import React, {useEffect, useState} from "react";
import {Typography} from '@mui/material';
import {transformRulesFromRequirementProfile} from "@foerderfunke/matching-engine/src/prematch";
import readJson from "../../../utilities/readJson";
import {fetchTurtleResource} from "../../../services/githubService";
import {useMetadataStore, useUserStore, useValidationReportStore} from "../../../storage/zustand";
import {UserModel} from "../../../models/UserModel";
import {buildRulesOutput} from "../../../utilities/ruleParsing";
import VStack from "../../../components/VStack";
import BenefitPageRuleEntry from "./BenefitPageRuleEntry";
import Divider from "@mui/material/Divider";
import useTranslation from "../../../language/useTranslation";

const BenefitPageRules = ({benefitId}) => {
    const { t } = useTranslation();
    const [loaded, setLoaded] = useState(false);
    const [rulesData, setRulesData] = useState({});
    const [benefitReport, setBenefitReport] = useState({});

    const metadata = useMetadataStore((state) => state.metadata);
    const validationReport = useValidationReportStore((state) => state.validationReport);
    const activeUser = useUserStore((state) => state.activeUserId);
    const userProfile = UserModel.retrieveUserData(activeUser);

    useEffect(() => {
        if (loaded) return;
        let rpUri = benefitId.startsWith("ff:") ? "https://foerderfunke.org/default#" + benefitId.split(":")[1] : benefitId;
        const fetchRulesData = async () => {
            const validationConfig = await readJson('assets/data/requirement-profiles/requirement-profiles.json');
            let query = validationConfig['queries'].find(query => query['rpUri'] === rpUri);
            let rpTurtleStr = await fetchTurtleResource(query.fileUrl);
            let rules = await transformRulesFromRequirementProfile(rpTurtleStr);
            setRulesData(rules);
            setBenefitReport(validationReport.reports.find(report => report.rpUri === rpUri));
            setLoaded(true);
        };
        fetchRulesData();
    }, [benefitId, rulesData, metadata, loaded, validationReport]);

    const rules = buildRulesOutput(rulesData, metadata, benefitReport, userProfile, t)

    return (
        <>
            {loaded && (
                <VStack sx={{width: '100%'}}>
                    <Typography sx={styles.sectionTitle}>
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
            )}
        </>
    );
}

const styles = {
    sectionTitle: {
        fontSize: '20px',
        fontWeight: 'bold',
    }
}

export default BenefitPageRules;
