import React from 'react';
import Layout from "@/ui/shared-components/Layout";
import { VBox } from '@/ui/shared-components/LayoutBoxes';
import BenefitPageHeader from "./components/BenefitPageHeader";
import AppScreenWrapperContainer from '@/ui/shared-components/app-screen-wrapper/AppScreenWrapperContainer';
import featureFlags from "@/featureFlags";
import MermaidRulesGraph from "@/ui/screens/benefit-page/components/MermaidRulesGraph";
import BenefitPageGeneral from './components/BenefitPageGeneral';
import BenefitPageApplication from './components/BenefitPageApplication';

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
                    <VBox sx={{ gap: { xs: 4, md: 8 } }}>
                        <BenefitPageGeneral t={t} benefitPageData={benefitPageData} />
                        <BenefitPageApplication t={t} benefitPageData={benefitPageData} />
                        {featureFlags.showMermaidRuleGraph &&
                            <MermaidRulesGraph
                                evalGraph={matchingGraph}
                                validatedStatus={validatedStatus}
                                benefitPageData={benefitPageData}
                            />
                        }
                    </VBox>
                </VBox>
            </AppScreenWrapperContainer>
        </Layout>
    );
};

export default BenefitPageScreen;
