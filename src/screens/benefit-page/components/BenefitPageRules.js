import React, {useEffect, useState} from "react";
import {Typography} from '@mui/material';
import {transformRulesFromRequirementProfile} from "@foerderfunke/matching-engine/src/prematch";
import readJson from "../../../utilities/readJson";
import {fetchTurtleResource} from "../../../services/githubService";
import {useMetadataStore, useUserStore, useValidationReportStore} from "../../../storage/zustand";
import {UserModel} from "../../../models/UserModel";
import {buildRulesOutput} from "../../../utilities/ruleParsing";
import VStack from "../../../components/VStack";
import globalStyles from "../../../styles/styles";
import BenefitPageRuleEntry from "./BenefitPageRuleEntry";

const BenefitPageRules = ({benefitId}) => {
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

    const rules = buildRulesOutput(rulesData, metadata, benefitReport, userProfile)

    console.log("BenefitPageRules loaded:", buildRulesOutput(rulesData, metadata, benefitReport, userProfile));

    return (
        <>
            {loaded && (
                <VStack sx={{width: '100%'}}>
                    <Typography sx={styles.sectionTitle}>
                        Eligibility rules
                    </Typography>
                    <VStack gap={3}>
                        {
                            rules &&
                            rules.map((rule, index) => (
                                <BenefitPageRuleEntry ruleData={rule} key={index}/>
                            ))
                        }
                    </VStack>
                </VStack>
            )}
        </>
    );
}

const styles = {
    button: {
        color: 'black',
        fontSize: 16,
    },
    checkEligibilityButton: {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: '15px',
        borderColor: globalStyles.secondaryColor,
        backgroundColor: globalStyles.secondaryColor,
        color: 'white',
        fontSize: '14px',
        fontWeight: 'bold',
        textTransform: 'none',
        '&:hover': {
            backgroundColor: globalStyles.secondaryColor,
            color: 'white',
            borderColor: globalStyles.secondaryColor,
        },
    },
    topicTag: {
        backgroundColor: globalStyles.primaryColor,
        padding: '8px',
        borderRadius: '12px',
        fontSize: '14px',
        color: 'black',
        fontWeight: '400'
    },
    sectionTitle: {
        fontSize: '20px',
        fontWeight: 'bold',
    },
    sectionText: {
        fontSize: '16px',
        fontWeight: '400',
    },
    fieldText: {
        fontSize: '14px',
        fontWeight: '300',
    },
    requirementText: {
        fontSize: '16px',
        fontWeight: '400',
    }
}

export default BenefitPageRules;
