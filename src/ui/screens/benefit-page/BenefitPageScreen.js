import React, {useContext} from 'react';
import Layout from "../../shared-components/Layout";
import {Link, useParams} from "react-router-dom";
import BenefitPageHeader from "./components/BenefitPageHeader";
import AppScreenWrapper from "../../shared-components/AppScreenWrapper";
import {useStore} from "../../shared-components/ViewportUpdater";
import {useMetadataStore, useValidationReportStore} from "../../storage/zustand";
import BenefitPageRules from "./components/BenefitPageRules";
import {Box, Button, Typography, Divider, IconButton} from "@mui/material";
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import useTranslation from "../../language/useTranslation";
import {LanguageContext} from "../../language/LanguageContext";
import useIsMissingDataBenefit from './hooks/useIsMissingDataBenefit';
import useBenefitPageData from "./hooks/useBenefitPageData";
import useCategoryTitles from "./hooks/useCategoryTitles";
import useFetchData from "../../shared-hooks/useFetchData";

const BenefitPageScreen = () => {
    const {id} = useParams();
    const {t} = useTranslation();
    const {language} = useContext(LanguageContext);

    const isDesktop = useStore((state) => state.isDesktop);
    const metadata = useMetadataStore((state) => state.metadata);
    const validationReport = useValidationReportStore((state) => state.validationReport);

    const topicsData = useFetchData('assets/data/topics/topics-list.json');
    const isMissingDataBenefit = useIsMissingDataBenefit(id, validationReport);
    const benefitPageData = useBenefitPageData(id, metadata);
    const categoryTitles = useCategoryTitles(topicsData, benefitPageData, language);

    if (!benefitPageData || topicsData?.length === 0) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <Layout isApp={true} logo={false} back="Back">
            <AppScreenWrapper isDesktop={isDesktop} back={true}>
                <BenefitPageHeader benefit={benefitPageData}/>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: '100%'
                }} gap={2}>
                    <Typography variant="body1" sx={{fontWeight: 300}}>{t('app.benefitPage.inTopics')}:</Typography>
                    <Box sx={{display: 'flex', flexWrap: 'wrap'}} gap={2}>
                        {categoryTitles.map((category, index) => (
                            <Box
                                key={index}
                                sx={(theme) => ({
                                    padding: 0.75,
                                    borderRadius: theme.shape.borderRadius,
                                    borderWidth: 1,
                                    borderStyle: 'solid',
                                    borderColor: theme.palette.primary.main,
                                })}
                            >
                                <Typography variant="body2">
                                    {category}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
                {id && isMissingDataBenefit && (
                    <Box sx={{width: '100%', mb: 2}}>
                        <Button
                            variant="contained"
                            sx={{backgroundColor: 'secondary.main', borderColor: 'secondary.main'}}
                            component={Link}
                            to={`/onboarding-welcome/${id}`}
                        >
                            {t('app.benefitPage.eligibilityBtn')}
                        </Button>
                    </Box>
                )}
                <Box gap={3} sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: '100%'
                }}>
                    <Divider/>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: '100%'
                    }} gap={1}>
                        <Typography variant="h6">{t('app.benefitPage.whatIsIt')}</Typography>
                        <Typography variant="body1">{benefitPageData.benefitInfo || t('app.noData')}</Typography>
                    </Box>
                    <Divider/>
                    <BenefitPageRules benefitId={id}/>
                    <Divider/>
                    <Box sx={{display: "flex", alignItems: 'center'}} gap={1}>
                        <Typography variant="body1">{t('app.benefitPage.moreInfo')}</Typography>
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
                                        backgroundColor: 'palette.custom.lightGrey',
                                    },
                                }}
                            >
                                <OpenInNewOutlinedIcon sx={{fontSize: 16, color: 'black'}}/>
                            </IconButton>
                        </a>
                    </Box>
                </Box>
            </AppScreenWrapper>
        </Layout>
    );
};

export default BenefitPageScreen;
