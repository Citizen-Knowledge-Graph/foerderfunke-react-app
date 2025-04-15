import React, { useContext } from 'react';
import { useParams } from "react-router-dom";
import Layout from "@/ui/shared-components/Layout";
import AppScreenWrapper from "@/ui/shared-components/AppScreenWrapper";
import { useStore } from "@/ui/shared-components/ViewportUpdater";
import { Box, Typography } from "@mui/material";
import useTranslation from "@/ui/language/useTranslation";
import { LanguageContext } from "@/ui/language/LanguageContext";
import useFetchData from "@/ui/shared-hooks/useFetchData";
import { useValidationReportStore } from "@/ui/storage/zustand";
import { useMetadataStore } from '@/ui/storage/zustand';
import theme from '../../../theme';
import { VBox } from '@/ui/shared-components/LayoutBoxes';
import BenefitPageInfoList from './components/BenefitPageInfoList';
import BenefitPageRequiredDocuments from './components/BenefitPageRequiredDocuments';
import BenefitPageLinksList from './components/BenefitPageLinksList';
import BenefitPageExampleList from './components/BenefitPageExampleList';
import BenefitPageRules from "./components/BenefitPageRules";
import BenefitPageHeader from "./components/BenefitPageHeader";
import useFetchRPMetaData from './hooks/useFetchRPMetaData';
import useFetchBenefitPageData from './hooks/useFetchBenefitPageData';
import useIsMissingDataBenefit from "./hooks/useIsMissingDataBenefit";
import useCategoryTitles from "./hooks/useCategoryTitles";


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
    const validatedStatus = useIsMissingDataBenefit(id, validationReport);

    if (!benefitPageData || topicsData?.length === 0) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <Layout isApp={true} logo={false} back="Back">
            <AppScreenWrapper isDesktop={isDesktop} back={true} backTarget={'/eligibility-overview'}>
                <VBox sx={{ gap: { xs: 4, md: 8 } }}>
                    <BenefitPageHeader id={id} benefit={benefitPageData} validatedStatus={validatedStatus} categoryTitles={categoryTitles} />
                    <Box gap={2} sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: '100%'
                    }}>
                        <VBox
                            sx={{
                                backgroundColor: 'white.main',
                                padding: '32px',
                                borderRadius: theme.shape.borderRadius,
                            }}
                        >
                            <VBox sx={{ gap: 2, maxWidth: '800px' }}>
                                <Typography variant="h2" sx={{ fontWeight: '400' }}>{t('app.benefitPage.whatIsIt')}{benefitPageData.title}</Typography>
                                <Typography sx={{ marginTop: 1 }} variant="body1">{benefitPageData.description || t('app.noData')}</Typography>
                            </VBox>
                        </VBox>
                        <BenefitPageRules benefitId={id} validatedStatus={validatedStatus} />
                        {
                            benefitPageData.examples.title && (
                                <BenefitPageExampleList listTitle={t('app.benefitPage.examples')} data={benefitPageData.examples} />
                            )
                        }                           
                        {
                            benefitPageData.fundingConditions.title && (
                                <BenefitPageInfoList listTitle={t('app.benefitPage.fundingConditions')} data={benefitPageData.fundingConditions} />
                            )
                        }                     
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
                </VBox>
            </AppScreenWrapper>
        </Layout>
    );
};

export default BenefitPageScreen;
