import React from "react";
import {useStore} from "../../shared-components/ViewportUpdater";
import VStack from "../../shared-components/VStack";
import Layout from "../../shared-components/Layout";
import LandingPageHowItWorks from "./sections/how-it-works/LandingPageHowItWorks";
import LandingPagePrinciples from "./sections/principles/LandingPagePrinciples";
import LandingPageTeam from "./sections/team/LandingPageTeam";
import LandingPageFooter from "./sections/footer/LandingPageFooter";
import LandingPageFact from "./sections/fact/LandingPageFact";
import LandingPageTopSection from "./sections/top-section/LandingPageTopSection";
import LandingPageFeedback from "./sections/feedback/LandingPageFeedback";
import featureFlags from "../../../featureFlags";
import LandingPageFunding from "./sections/funding/LandingPageFunding";
import LandingPageMission from "./sections/mission/LandingPageMission";

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
                <VStack id="principles">
                    <LandingPageMission />
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
                <VStack id="footer">
                    <LandingPageFooter isDesktop={isDesktop}/>
                </VStack>
            </VStack>
        </Layout>
    );
}

export default LandingPage;
