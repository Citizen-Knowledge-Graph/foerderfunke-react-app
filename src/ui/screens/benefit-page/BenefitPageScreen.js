import React, { useContext } from 'react';
import Layout from "../../shared-components/Layout";
import { useParams } from "react-router-dom";
import BenefitPageHeader from "./components/BenefitPageHeader";
import AppScreenWrapper from "../../shared-components/AppScreenWrapper";
import { useStore } from "../../shared-components/ViewportUpdater";
import BenefitPageRules from "./components/BenefitPageRules";
import { Box, Typography, Divider } from "@mui/material";
import useTranslation from "../../language/useTranslation";
import { LanguageContext } from "../../language/LanguageContext";
import useCategoryTitles from "./hooks/useCategoryTitles";
import useFetchData from "../../shared-hooks/useFetchData";
import useIsMissingDataBenefit from "./hooks/useIsMissingDataBenefit";
import { useValidationReportStore } from "../../storage/zustand";
import useFetchRPMetaData from './hooks/useFetchRPMetaData';
import useFetchBenefitPageData from './hooks/useFetchBenefitPageData';
import { useMetadataStore } from '../../storage/zustand';
import BenefitPageRequiredDocuments from './components/BenefitPageRequiredDocuments';
import ContentBox from '../../shared-components/ContentBox';
import BenefitPageLinksList from './components/BenefitPageLinksList';
import theme from '../../../theme';
import BenefitPageInfoList from './components/BenefitPageInfoList';

const BenefitPageScreen = () => {
    const { id } = useParams();
    const { t } = useTranslation();
    const { language } = useContext(LanguageContext);

    const isDesktop = useStore((state) => state.isDesktop);
    const validationReport = useValidationReportStore((state) => state.validationReport);
    const metadata = useMetadataStore((state) => state.metadata);

    const hydrationData = useFetchData('assets/data/requirement-profiles/requirement-profiles-hydration.json')
    const benefitPageData = useFetchBenefitPageData(id, hydrationData, language);

    const topicsData = useFetchData('assets/data/topics/topics-list.json');
    const rpMetaData = useFetchRPMetaData(id, metadata);
    const categoryTitles = useCategoryTitles(topicsData, rpMetaData, language);
    const validated_status = useIsMissingDataBenefit(id, validationReport);

    if (!benefitPageData || topicsData?.length === 0) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <Layout isApp={true} logo={false} back="Back">
            <AppScreenWrapper isDesktop={isDesktop} back={true}>
                <BenefitPageHeader id={id} benefit={benefitPageData} validated_status={validated_status} />
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: '100%'
                }} gap={2}>
                    <Typography variant="body1" sx={{ fontWeight: 300 }}>{t('app.benefitPage.inTopics')}:</Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }} gap={2}>
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
                <Box gap={2} sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: '100%'
                }}>
                    <Divider />
                    <ContentBox>
                        <Typography variant="h6">{t('app.benefitPage.whatIsIt')}{benefitPageData.title}</Typography>
                        <Typography sx={{ marginTop: theme.spacing(1) }} variant="body1">{benefitPageData.description || t('app.noData')}</Typography>
                    </ContentBox>
                    {
                        benefitPageData.fundingConditions.title && (
                            <BenefitPageInfoList listTitle={t('app.benefitPage.fundingConditions')} data={benefitPageData.fundingConditions} />
                        )
                    }     
                    <BenefitPageRules benefitId={id} validated_status={validated_status} />
                    {
                        benefitPageData.applicationProcess.title && (
                            <BenefitPageLinksList listTitle={t('app.benefitPage.applicationProcess')} data={benefitPageData.applicationProcess} />
                        )
                    }
                    {
                        benefitPageData.requiredDocuments.length > 0 && (
                            <BenefitPageRequiredDocuments requiredDocuments={benefitPageData.requiredDocuments} />
                        )
                    }               
                    {
                        benefitPageData.additionalSupport.title && (
                            <BenefitPageLinksList listTitle={t('app.benefitPage.additionalSupport')} data={benefitPageData.additionalSupport} />
                        )
                    }
                    {
                        benefitPageData.legalBasis.title && (
                            <BenefitPageLinksList listTitle={t('app.benefitPage.legalBasis')} data={benefitPageData.legalBasis} />
                        )
                    }
                    {
                        benefitPageData.furtherInformation.title && (
                            <BenefitPageLinksList listTitle={t('app.benefitPage.furtherInformation')} data={benefitPageData.furtherInformation} />
                        )
                    }
                </Box>
            </AppScreenWrapper>
        </Layout>
    );
};

export default BenefitPageScreen;
