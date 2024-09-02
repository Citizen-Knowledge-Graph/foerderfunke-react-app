import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout";
import {Link, useParams} from "react-router-dom";
import BenefitPageHeader from "./components/BenefitPageHeader";
import AppScreenWrapper from "../../components/AppScreenWrapper";
import {useStore} from "../../components/ViewportUpdater";
import {useMetadataStore, useValidationReportStore} from "../../storage/zustand";
import useFetchData from "../../services/fetchResourceService";
import BenefitPageRules from "./components/BenefitPageRules";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {Button} from "@mui/material";
import HStack from "../../components/HStack";
import globalStyles from "../../styles/styles";
import {ValidationResult} from "@foerderfunke/matching-engine";

const BenefitPageScreen = () => {
    const isDesktop = useStore((state) => state.isDesktop);
    const {id} = useParams();
    const [benefitPageData, setBenefitPageData] = useState();
    const metadata = useMetadataStore((state) => state.metadata);
    const [topicsData, setTopicsData] = useState([]);
    const validationReport = useValidationReportStore((state) => state.validationReport);

    useFetchData('assets/data/topics/topics-list.json', setTopicsData);

    useEffect(() => {
        let rpUri = id.startsWith("ff:") ? "https://foerderfunke.org/default#" + id.split(":")[1] : id;
        setBenefitPageData(metadata.rp[rpUri]);
    }, [id, topicsData, metadata]);

    const getTopicTitle = (topicUri) => {
        let topicId = topicUri.startsWith("https") ? "ff:" + topicUri.split("#")[1] : topicUri;
        return topicsData.find(topic => topic.id === topicId).title;
    }

    const getCategoryTitles = () => {
        return benefitPageData.categories.map(categoryUri => getTopicTitle(categoryUri)).join(', ');
    }

    const isMissingDataBenefit = () => {
        const report = validationReport.reports.find(report => report.rpUri === "https://foerderfunke.org/default#" + id.split(":")[1]);
        return report.result === ValidationResult.UNDETERMINABLE;
    }

    return (
        <Layout isApp={true} logo={false} back={'Back'}>
            <AppScreenWrapper isDesktop={isDesktop}>
                <HStack justifyContent="space-between" sx={{width: '100%'}}>
                    <Button variant="text" sx={styles.button} startIcon={<ChevronLeftIcon/>} component={Link}
                            to={'/eligibility-overview'}>Back</Button>
                </HStack>
                {benefitPageData && topicsData.length > 0 ? (
                    <>
                        <BenefitPageHeader benefit={benefitPageData}/>
                        {/*<BenefitPageList benefit={benefitPageData}/>*/}
                        <small style={{color: "gray"}}>Topics: {getCategoryTitles()}</small>
                        {id && isMissingDataBenefit() &&
                            <HStack>
                                <Button
                                    sx={styles.checkEligibilityButton}
                                    variant="text"
                                    component={Link}
                                    to={`/onboarding-welcome/${id}`}>
                                    Check eligibility
                                </Button>
                            </HStack>
                        }
                        <h3>In a nutshell</h3>
                        <div>{benefitPageData.benefitInfo}</div>
                        <div>More info: <a target="_blank" rel="noreferrer"
                                           href={benefitPageData.seeAlso}>{benefitPageData.seeAlso.split("//")[1]}</a>
                        </div>
                        <h3>Eligibility rules</h3>
                        <BenefitPageRules benefitId={id}/>
                    </>
                ) : null}
            </AppScreenWrapper>
        </Layout>
    );
};

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
}

export default BenefitPageScreen;

