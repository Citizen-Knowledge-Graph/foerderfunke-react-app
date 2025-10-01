import React from 'react';
import Layout from "@/ui/shared-components/Layout";
import { VBox } from '@/ui/shared-components/LayoutBoxes';
import BenefitPageHeader from "./components/BenefitPageHeader";
import AppScreenWrapperContainer from '@/ui/shared-components/app-screen-wrapper/AppScreenWrapperContainer';
import featureFlags from "@/featureFlags";
import BenefitPageGeneral from './components/BenefitPageGeneral';
import BenefitPageApplication from './components/BenefitPageApplication';
import BenefitPageRequirements from './components/BenefitPageRequirements';
import BenefitPageLocal from './components/BenefitPageLocal';

const BenefitPageScreen = ({
    t,
    id,
    isDesktop,
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
                    <VBox sx={{ gap: { xs: 4, md: 8 } }}>
                        <BenefitPageGeneral t={t} isDesktop={isDesktop} benefitPageData={benefitPageData} />
                        <BenefitPageApplication t={t} isDesktop={isDesktop} benefitPageData={benefitPageData} />
                        <BenefitPageLocal t={t} isDesktop={isDesktop} benefitPageData={benefitPageData} />
                        {featureFlags.showMermaidRuleGraph &&
                            <BenefitPageRequirements t={t} isDesktop={isDesktop} evalGraph={matchingGraph} benefitPageData={benefitPageData} />
                        }
                    </VBox>
                </VBox>
            </AppScreenWrapperContainer>
        </Layout>
    );
};

export default BenefitPageScreen;
