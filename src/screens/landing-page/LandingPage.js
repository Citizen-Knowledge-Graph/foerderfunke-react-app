import React from "react";
import {useStore} from "../../components/ViewportUpdater";
import VStack from "../../components/VStack";
import Layout from "../../components/Layout";
import LandingPageHowItWorks from "./sections/how-it-works/LandingPageHowItWorks";
import LandingPagePrinciples from "./sections/principles/LandingPagePrinciples";
import LandingPageTeam from "./sections/team/LandingPageTeam";
import LandingPageFooter from "./sections/footer/LandingPageFooter";
import LandingPageFact from "./sections/LandingPageFact";
import LandingPageTopSection from "./sections/top-section/LandingPageTopSection";
import LandingPageFeedback from "./sections/feedback/LandingPageFeedback";
import featureFlags from "../../featureFlags";
import LandingPageFunding from "./sections/funding/LandingPageFunding";
import globalStyles from "../../styles/styles";

const LandingPage = () => {
    const isDesktop = useStore((state) => state.isDesktop);

    return (
        <Layout>
            <VStack
                gap={0}
                sx={{
                    background: `linear-gradient(
                        to bottom,
                            ${globalStyles.primaryColor}33 0%,
                            ${globalStyles.primaryColor}80 20%,
                            ${globalStyles.primaryColor}33 40%,
                            ${globalStyles.primaryColor}80 60%,
                            ${globalStyles.primaryColor}33 80%,
                            ${globalStyles.primaryColor}80 100%)`,
                }}
            >
                <VStack>
                    <LandingPageTopSection isDesktop={isDesktop}/>
                </VStack>
                <VStack>
                    <LandingPageFact isDesktop={isDesktop}/>
                </VStack>
                <VStack id="how-it-works">
                    <LandingPageHowItWorks isDesktop={isDesktop}/>
                </VStack>
                <VStack id="principles">
                    <LandingPagePrinciples isDesktop={isDesktop}/>
                </VStack>
                {
                    featureFlags.newFeedbackSection && (
                        <VStack id="feedback">
                            <LandingPageFeedback isDesktop={isDesktop}/>
                        </VStack>
                    )
                }
                <VStack id="about-us">
                    <LandingPageTeam isDesktop={isDesktop}/>
                </VStack>
                <VStack id="funding">
                    <LandingPageFunding isDesktop={isDesktop}/>
                </VStack>
                <VStack id="find-your-benefits">
                    <LandingPageFooter isDesktop={isDesktop}/>
                </VStack>
            </VStack>
        </Layout>
    );
}

export default LandingPage;
