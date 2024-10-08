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
import LandingPageCollaboration from "./sections/collaboration/LandingPageCollaboration";

const LandingPage = () => {
    const isDesktop = useStore((state) => state.isDesktop);

    return (
        <Layout>
            <VStack gap={0}>
                <VStack>
                    <LandingPageTopSection isDesktop={isDesktop}/>
                </VStack>
                <VStack>
                    <LandingPageFact isDesktop={isDesktop}/>
                </VStack>
                <VStack id="how-it-works">
                    <LandingPageHowItWorks isDesktop={isDesktop}/>
                </VStack>
                {
                    featureFlags.newFeedbackSection && (
                        <VStack id="feedback">
                            <LandingPageFeedback isDesktop={isDesktop}/>
                        </VStack>
                    )
                }
                {
                    featureFlags.newCollaborationSection && (
                        <VStack id="collaboration">
                            <LandingPageCollaboration isDesktop={isDesktop}/>
                        </VStack>
                    )
                }
                <VStack id="principles">
                    <LandingPagePrinciples isDesktop={isDesktop}/>
                </VStack>
                <VStack id="about-us">
                    <LandingPageTeam isDesktop={isDesktop}/>
                </VStack>
                <VStack id="find-your-benefits">
                    <LandingPageFooter isDesktop={isDesktop}/>
                </VStack>
            </VStack>
        </Layout>
    );
}

export default LandingPage;
