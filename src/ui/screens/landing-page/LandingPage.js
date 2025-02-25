import React from "react";
import { useStore } from "../../shared-components/ViewportUpdater";
import { VBox } from "../../shared-components/LayoutBoxes";
import Layout from "../../shared-components/Layout";
import LandingPageHowItWorks from "./sections/how-it-works/LandingPageHowItWorks";
import LandingPagePrinciples from "./sections/principles/LandingPagePrinciples";
import LandingPageTeam from "./sections/team/LandingPageTeam";
import LandingPageFooter from "./sections/footer/LandingPageFooter";
import LandingPageFact from "./sections/fact/LandingPageFact";
import LandingPageTopSection from "./sections/top-section/LandingPageTopSection";
import LandingPageFeedback from "./sections/feedback/LandingPageFeedback";
import LandingPageFunding from "./sections/funding/LandingPageFunding";
import LandingPageMission from "./sections/mission/LandingPageMission";

const LandingPage = () => {
    const isDesktop = useStore((state) => state.isDesktop);

    return (
        <Layout>
            <VBox sx={{ width: '100%' }}>
                <VBox>
                    <LandingPageTopSection isDesktop={isDesktop} />
                </VBox>
                <VBox>
                    <LandingPageFact isDesktop={isDesktop} />
                </VBox>
                <VBox id="how-it-works">
                    <LandingPageHowItWorks isDesktop={isDesktop} />
                </VBox>
                <VBox id="principles">
                    <LandingPageMission />
                </VBox>
                <VBox id="principles">
                    <LandingPagePrinciples isDesktop={isDesktop} />
                </VBox>
                <VBox id="about-us">
                    <LandingPageTeam isDesktop={isDesktop} />
                </VBox>
                <VBox id="funding">
                    <LandingPageFunding isDesktop={isDesktop} />
                </VBox>
                <VBox id="feedback">
                    <LandingPageFeedback isDesktop={isDesktop} />
                </VBox>
                <VBox id="footer">
                    <LandingPageFooter isDesktop={isDesktop} />
                </VBox>
            </VBox>
        </Layout>
    );
}

export default LandingPage;
