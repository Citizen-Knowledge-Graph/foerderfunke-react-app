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
    localisedData,
    xml,
    validatedStatus,
    validationResult,
    categoryTitles,
    matchingGraph
}) => {

    return (
        <Layout isApp={true} logo={false} back="Back">
            <AppScreenWrapperContainer backTarget={'/eligibility-overview'}>
                <VBox sx={{ gap: { xs: 4, md: 8 } }}>
                    <BenefitPageHeader id={id} benefit={benefitPageData} validatedStatus={validatedStatus} validationResult={validationResult} categoryTitles={categoryTitles} />
                    <VBox sx={{ gap: { xs: 4, md: 8 }}}>
                        <BenefitPageGeneral t={t} isDesktop={isDesktop} benefitPageData={benefitPageData} />
                        <BenefitPageApplication t={t} isDesktop={isDesktop} benefitPageData={benefitPageData} xml={xml} />
                        {
                            localisedData && (
                                <BenefitPageLocal t={t} isDesktop={isDesktop} localisedData={localisedData} />
                            )
                        }
                        {featureFlags.showMermaidRuleGraph &&
                            <BenefitPageRequirements t={t} validatedStatus={validatedStatus} isDesktop={isDesktop} evalGraph={matchingGraph} />
                        }
                    </VBox>
                </VBox>
            </AppScreenWrapperContainer>
        </Layout>
    );
};

export default BenefitPageScreen;
