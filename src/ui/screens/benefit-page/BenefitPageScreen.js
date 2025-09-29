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
import featureFlags from "@/featureFlags";
import MermaidRulesGraph from "@/ui/screens/benefit-page/components/MermaidRulesGraph";
import BenefitPageMarkdown from './components/BenefitPageMarkDown';
import BenefitPageGeneral from './components/BenefitPageGeneral';
import BenefitPageApplication from './components/BenefitPageApplication';
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

    console.log("benefitPageData", benefitPageData);

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
                        <BenefitPageGeneral t={t} benefitPageData={benefitPageData} />
                        <BenefitPageApplication t={t} overview={benefitPageData?.overview} />
                        {featureFlags.showMermaidRuleGraph &&
                            <MermaidRulesGraph evalGraph={matchingGraph} validatedStatus={validatedStatus} />
                        }
                    </Box>
                </VBox>
            </AppScreenWrapperContainer>
        </Layout>
    );
};

export default BenefitPageScreen;
