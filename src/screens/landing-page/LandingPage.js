import VStack from "../../components/VStack";
import Layout from "../../components/Layout";
import LandingPageHowItWorks from "./sections/how-it-works/LandingPageHowItWorks";
import LandingPagePrinciples from "./sections/principles/LandingPagePrinciples";
import LandingPageTeam from "./sections/team/LandingPageTeam";
import LandingPageFooter from "./sections/LandingPageFooter";
import LandingPageFact from "./sections/LandingPageFact";
import LandingPageTopSection from "./sections/top-section/LandingPageTopSection";
import React from "react";
import {useStore} from "../../components/ViewportUpdater";

const LandingPage = () => {
    const isDesktop = useStore((state) => state.isDesktop);

    return (
        <Layout>
            <VStack gap={0}>
                <VStack>
                    <LandingPageTopSection isDesktop={isDesktop} />
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
                <VStack id="about-us">
                    <LandingPageTeam isDesktop={isDesktop}/>
                </VStack>
                <VStack id="find-your-benefits">
                    <LandingPageFooter />
                </VStack>
            </VStack>
        </Layout>
    );
}

export default LandingPage;
