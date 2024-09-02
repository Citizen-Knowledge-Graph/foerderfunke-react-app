import React, {useEffect, useMemo, useState} from 'react';
import Layout from "../../components/Layout";
import {Link, useParams} from "react-router-dom";
import BenefitPageHeader from "./components/BenefitPageHeader";
import AppScreenWrapper from "../../components/AppScreenWrapper";
import {useStore} from "../../components/ViewportUpdater";
import {useMetadataStore, useValidationReportStore} from "../../storage/zustand";
import useFetchData from "../../services/fetchResourceService";
import BenefitPageRules from "./components/BenefitPageRules";
import {Box, Button, IconButton, Typography} from "@mui/material";
import HStack from "../../components/HStack";
import globalStyles from "../../styles/styles";
import {ValidationResult} from "@foerderfunke/matching-engine";
import VStack from "../../components/VStack";
import Divider from "@mui/material/Divider";
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import SearchIcon from '@mui/icons-material/Search';

const BenefitPageScreen = () => {
    const {id} = useParams();
    const [benefitPageData, setBenefitPageData] = useState();
    const [topicsData, setTopicsData] = useState([]);

    const isDesktop = useStore((state) => state.isDesktop);
    const metadata = useMetadataStore((state) => state.metadata);
    const validationReport = useValidationReportStore((state) => state.validationReport);

    useFetchData('assets/data/topics/topics-list.json', setTopicsData);

    useEffect(() => {
        let rpUri = id.startsWith("ff:") ? "https://foerderfunke.org/default#" + id.split(":")[1] : id;
        setBenefitPageData(metadata.rp[rpUri]);
    }, [id, topicsData, metadata]);

    const isMissingDataBenefit = () => {
        const report = validationReport.reports.find(report => report.rpUri === "https://foerderfunke.org/default#" + id.split(":")[1]);
        return report.result === ValidationResult.UNDETERMINABLE;
    }

    const getTopicTitle = useMemo(
        () => (topicUri) => {
            if (!topicsData) {
                return '';
            }

            let topicId = topicUri.startsWith("https") ? "ff:" + topicUri.split("#")[1] : topicUri;
            const topic = topicsData.find(topic => topic.id === topicId);

            return topic ? topic.title : ''; // Return the title if found, otherwise return an empty string
        },
        [topicsData]
    );

    const getCategoryTitles = useMemo(
        () => {
            if (!benefitPageData || !benefitPageData.categories) {
                return '';
            }

            return benefitPageData.categories.map(categoryUri => getTopicTitle(categoryUri));
        },
        [benefitPageData, getTopicTitle]
    );

    return (
        <Layout isApp={true} logo={false} back={'Back'}>
            <AppScreenWrapper isDesktop={isDesktop} back={true}>
                {benefitPageData && topicsData.length > 0 ? (
                    <>
                        <BenefitPageHeader benefit={benefitPageData}/>
                        <VStack sx={{width: '100%'}}>
                            <Typography sx={styles.topicsTitle}>
                                Appears in the following topics
                            </Typography>
                            <HStack sx={{flexWrap: 'wrap'}}>
                                {
                                    getCategoryTitles.map((category, index) => (
                                        <Box
                                            key={index}
                                            sx={styles.topicTag}
                                        >
                                            {category}
                                        </Box>
                                    ))
                                }
                            </HStack>
                        </VStack>
                        {id && isMissingDataBenefit() &&
                            <VStack sx={{width: '100%'}}>
                                <HStack>
                                    <Button
                                        sx={styles.checkEligibilityButton}
                                        variant="text"
                                        component={Link}
                                        to={`/onboarding-welcome/${id}`}
                                        startIcon={<SearchIcon/>}
                                    >
                                        Check eligibility
                                    </Button>
                                </HStack>
                            </VStack>
                        }
                        <VStack sx={{width: '100%'}} gap={3}>
                            <Divider sx={{width: "100%"}}/>
                            <VStack sx={{width: "100%"}} gap={1}>
                                <Typography sx={styles.sectionTitle}>
                                    What is it
                                </Typography>
                                <Typography sx={styles.sectionText}>
                                    {benefitPageData.benefitInfo}
                                </Typography>
                            </VStack>
                            <Divider sx={{width: "100%"}}/>
                            <BenefitPageRules benefitId={id}/>
                            <Divider sx={{width: "100%"}}/>
                            <VStack sx={{width: "100%"}} gap={1}>
                                <Typography sx={styles.sectionTitle}>
                                    What documents do you need
                                </Typography>
                                <Typography sx={styles.sectionText}>
                                    More information to come here. We are working on this section.
                                </Typography>
                            </VStack>
                            <Divider sx={{width: "100%"}}/>
                            <VStack sx={{width: "100%"}} gap={1}>
                                <Typography sx={styles.sectionTitle}>
                                    Contact
                                </Typography>
                                <Typography sx={styles.sectionText}>
                                    More information to come here. We are working on this section.
                                </Typography>
                            </VStack>
                            <Divider sx={{width: "100%"}}/>
                            <VStack sx={{width: "100%"}} gap={1}>
                                <Typography sx={styles.sectionTitle}>
                                    Do you need help with your application?
                                </Typography>
                                <Typography sx={styles.sectionText}>
                                    More information to come here. We are working on this section.
                                </Typography>
                            </VStack>
                            <Divider sx={{width: "100%"}}/>
                            <VStack sx={{width: "100%"}} gap={1}>
                                <HStack gap={1}>
                                    <Typography sx={styles.sectionText}>
                                        More information available here
                                    </Typography>
                                    <a href={benefitPageData.seeAlso} target="_blank" rel="noopener noreferrer">
                                        <IconButton
                                            sx={{
                                                width: 24,
                                                height: 24,
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                backgroundColor: 'white',
                                                '&:hover': {
                                                    backgroundColor: globalStyles.colorLightGrey,
                                                },
                                            }}
                                        >
                                            <OpenInNewOutlinedIcon sx={{fontSize: 16, color: 'black'}}/>
                                        </IconButton>
                                    </a>
                                </HStack>
                            </VStack>
                        </VStack>
                    </>
                ) : null}
            </AppScreenWrapper>
        </Layout>
    );
};

const styles = {
    checkEligibilityButton: {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: '12px',
        padding: '8px',
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
    topicsTitle: {
        fontSize: 16,
        fontWeight: 300,
    },
    topicTag: {
        padding: '8px',
        borderRadius: '12px',
        fontSize: '14px',
        color: 'black',
        fontWeight: '400',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: globalStyles.primaryColor,
    },
    sectionTitle: {
        fontSize: '20px',
        fontWeight: 'bold',
    },
    sectionText: {
        fontSize: '16px',
        fontWeight: '400',
    }
}

export default BenefitPageScreen;

