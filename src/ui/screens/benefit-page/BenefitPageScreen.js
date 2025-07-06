import React from 'react';
import Layout from "@/ui/shared-components/Layout";
import { Box, Typography } from "@mui/material";
import theme from '@/theme';
import { VBox } from '@/ui/shared-components/LayoutBoxes';
import BenefitPageInfoList from './components/BenefitPageInfoList';
import BenefitPageRequiredDocuments from './components/BenefitPageRequiredDocuments';
import BenefitPageLinksList from './components/BenefitPageLinksList';
import BenefitPageExampleList from './components/BenefitPageExampleList';
import BenefitPageHeader from "./components/BenefitPageHeader";
import AppScreenWrapperContainer from '@/ui/shared-components/app-screen-wrapper/AppScreenWrapperContainer';
import RecursiveRulesTable from './components/RecursiveRulesTable';
import featureFlags from "@/featureFlags";
import MermaidRulesGraph from "@/ui/screens/benefit-page/components/MermaidRulesGraph";

const BenefitPageScreen = ({
    t,
    id,
    benefitPageData,
    validatedStatus,
    categoryTitles,
    matchingGraph
}) => {

    return (
        <Layout isApp={true} logo={false} back="Back">
            <AppScreenWrapperContainer backTarget={'/eligibility-overview'}>
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
                                <Typography variant="h2" sx={{ fontWeight: '400' }}>{t('app.benefitPage.whatIsIt')}{benefitPageData?.title}</Typography>
                                <Typography sx={{ marginTop: 1 }} variant="body1">{benefitPageData?.description || t('app.noData')}</Typography>
                            </VBox>
                        </VBox>
                        {
                            benefitPageData?.examples.title && (
                                <BenefitPageExampleList listTitle={t('app.benefitPage.examples')} data={benefitPageData?.examples} />
                            )
                        }
                        {
                            benefitPageData?.fundingConditions.title && (
                                <BenefitPageInfoList listTitle={t('app.benefitPage.fundingConditions')} data={benefitPageData?.fundingConditions} />
                            )
                        }
                        {
                            benefitPageData?.applicationProcess.title && (
                                <BenefitPageLinksList listTitle={t('app.benefitPage.applicationProcess')} data={benefitPageData?.applicationProcess} />
                            )
                        }
                        {
                            benefitPageData?.requiredDocuments.length > 0 && (
                                <BenefitPageRequiredDocuments requiredDocuments={benefitPageData?.requiredDocuments} />
                            )
                        }
                        {
                            benefitPageData?.additionalSupport.title && (
                                <BenefitPageLinksList listTitle={t('app.benefitPage.additionalSupport')} data={benefitPageData?.additionalSupport} />
                            )
                        }
                        {
                            benefitPageData?.legalBasis.title && (
                                <BenefitPageLinksList listTitle={t('app.benefitPage.legalBasis')} data={benefitPageData?.legalBasis} />
                            )
                        }
                        {
                            benefitPageData?.furtherInformation.title && (
                                <BenefitPageLinksList listTitle={t('app.benefitPage.furtherInformation')} data={benefitPageData?.furtherInformation} />
                            )
                        }
                        <RecursiveRulesTable rootNodes={matchingGraph?.rootNodes} t={t} />
                        {featureFlags.showMermaidRuleGraph &&
                            <MermaidRulesGraph evalGraph={matchingGraph} t={t} />
                        }
                    </Box>
                </VBox>
            </AppScreenWrapperContainer>
        </Layout>
    );
};

export default BenefitPageScreen;
