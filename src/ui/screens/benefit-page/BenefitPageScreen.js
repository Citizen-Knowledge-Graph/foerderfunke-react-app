import React from 'react';
import Layout from "@/ui/shared-components/Layout";
import { Box, Typography } from "@mui/material";
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
import BenefitPageMarkdown from './components/BenefitPageMarkDown';
import DescriptionIcon from '@mui/icons-material/Description';
import theme from '@/theme';


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
                        {
                            benefitPageData?.descriptionMD ? (
                                <BenefitPageMarkdown title={t('app.benefitPage.description')} content={benefitPageData?.descriptionMD} />
                            ) : (
                                benefitPageData?.teaser && (
                                    <VBox
                                        sx={{
                                            backgroundColor: 'white.main',
                                            padding: '32px',
                                            borderRadius: theme.shape.borderRadius,
                                        }}
                                    >
                                        <VBox sx={{ gap: 2, maxWidth: '800px' }}>
                                            <Typography variant="h2" sx={{ fontWeight: '400' }}>{t('app.benefitPage.whatIsIt')}{benefitPageData?.title}</Typography>
                                            <Typography sx={{ marginTop: 1, whiteSpace: 'pre-line' }} variant="body1">{benefitPageData?.teaser || t('app.noData')}</Typography>
                                        </VBox>
                                    </VBox>
                                )
                            )
                        }
                        {
                            benefitPageData?.goals && (
                                <BenefitPageMarkdown title={t('app.benefitPage.goals')} content={benefitPageData?.goals} />
                            )
                        }
                        {
                            benefitPageData?.benefitScope && (
                                <BenefitPageMarkdown title={t('app.benefitPage.benefitScope')} content={benefitPageData?.benefitScope} />
                            )
                        }
                        {
                            benefitPageData?.examplesMD && (
                                <BenefitPageMarkdown title={t('app.benefitPage.examplesMD')} content={benefitPageData?.examplesMD} />
                            )
                        }
                        {
                            benefitPageData?.howMD && (
                                <BenefitPageMarkdown title={t('app.benefitPage.howMD')} content={benefitPageData?.howMD} />
                            )
                        }
                        {
                            benefitPageData?.contactMD && (
                                <BenefitPageMarkdown title={t('app.benefitPage.contactMD')} content={benefitPageData?.contactMD} />
                            )
                        }
                        {
                            benefitPageData?.documentsMD && (
                                <BenefitPageMarkdown title={t('app.benefitPage.documentsMD')} content={benefitPageData?.documentsMD} icon={<DescriptionIcon />} />
                            )
                        }
                        {
                            benefitPageData?.processMD && (
                                <BenefitPageMarkdown title={t('app.benefitPage.processMD')} content={benefitPageData?.processMD} />
                            )
                        }
                        {
                            benefitPageData?.deadlinesMD && (
                                <BenefitPageMarkdown title={t('app.benefitPage.deadlinesMD')} content={benefitPageData?.deadlinesMD} />
                            )
                        }
                        {
                            benefitPageData?.additionalSupportMD && (
                                <BenefitPageMarkdown title={t('app.benefitPage.additionalSupportMD')} content={benefitPageData?.additionalSupportMD} />
                            )
                        }
                        {
                            benefitPageData?.legalBasisMD && (
                                <BenefitPageMarkdown title={t('app.benefitPage.legalBasisMD')} content={benefitPageData?.legalBasisMD} />
                            )
                        }
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
