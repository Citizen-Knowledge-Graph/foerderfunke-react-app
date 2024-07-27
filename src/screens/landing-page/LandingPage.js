import VStack from "../../components/VStack";
import Layout from "../../components/Layout";
import LandingPageHowItWorks from "./sections/LandingPageHowItWorks";
import LandingPageOurPrinciples from "./sections/LandingPageOurPrinciples";
import LandingPageTeam from "./sections/LandingPageTeam";
import LandingPageFooter from "./sections/LandingPageFooter";
import LandingPageFact from "./sections/LandingPageFact";
import LandingPageTopSection from "./sections/landing-page-top-section/LandingPageTopSection";
import React from "react";
import {useStore} from "../../components/ViewportUpdater";

const LandingPage = () => {
    const isDesktop = useStore((state) => state.isDesktop);

    return (
        <Layout>
            <VStack gap={5}>
                <VStack>
                    <LandingPageTopSection isDesktop={isDesktop} />
                </VStack>
                <VStack>
                    <LandingPageFact isDesktop={isDesktop}/>
                </VStack>
                <VStack id="how-it-works">
                    <LandingPageHowItWorks />
                </VStack>
                <VStack id="principles">
                    <LandingPageOurPrinciples/>
                </VStack>
                <VStack id="about-us">
                    <LandingPageTeam />
                </VStack>
                <VStack id="find-your-benefits">
                    <LandingPageFooter />
                </VStack>
            </VStack>
        </Layout>
    );
}

export default LandingPage;
