import React from 'react';
import Layout from "@/ui/shared-components/Layout";
import { VBox } from '@/ui/shared-components/LayoutBoxes';
import BenefitPageHeader from "./components/BenefitPageHeader";
import AppScreenWrapperContainer from '@/ui/shared-components/app-screen-wrapper/AppScreenWrapperContainer';
import BenefitPageGeneral from './components/BenefitPageGeneral';
import BenefitPageApplication from './components/BenefitPageApplication';
import BenefitPageRequirements from './components/BenefitPageRequirements';
import BenefitPageLocal from './components/BenefitPageLocal';
import BenefitPageCustomHints from "@/ui/screens/benefit-page/components/BenefitPageCustomHints";
import featureFlags from "@/featureFlags";

const BenefitPageScreen = ({
    t,
    id,
    isDesktop,
    benefitPageData,
    localisedData,
    customHints,
    xml,
    targetClass,
    validatedStatus,
    validationResult,
    categoryTitles,
    matchingGraph
}) => {

    return (
        <Layout isApp={true} logo={false} back="Back">
            <AppScreenWrapperContainer backTarget={'/eligibility-overview'}>
                <VBox sx={{ gap: { xs: 4, md: 8 } }}>
                    <BenefitPageHeader 
                        id={id} 
                        benefit={benefitPageData} 
                        validatedStatus={validatedStatus} 
                        validationResult={validationResult} 
                        targetClass={targetClass} 
                        categoryTitles={categoryTitles}
                    />
                    <VBox sx={{ gap: { xs: 4, md: 8 }}}>
                        {
                            featureFlags.customHints && customHints && customHints.length > 0 && (
                                <BenefitPageCustomHints t={t} isDesktop={isDesktop} customHints={customHints} />
                            )
                        }
                        <BenefitPageGeneral t={t} isDesktop={isDesktop} benefitPageData={benefitPageData} />
                        <BenefitPageApplication t={t} isDesktop={isDesktop} benefitPageData={benefitPageData} xml={xml} />
                        {
                            localisedData && (
                                <BenefitPageLocal t={t} isDesktop={isDesktop} localisedData={localisedData} />
                            )
                        }
                        <BenefitPageRequirements t={t} validatedStatus={validatedStatus} isDesktop={isDesktop} evalGraph={matchingGraph} />
                    </VBox>
                </VBox>
            </AppScreenWrapperContainer>
        </Layout>
    );
};

export default BenefitPageScreen;
