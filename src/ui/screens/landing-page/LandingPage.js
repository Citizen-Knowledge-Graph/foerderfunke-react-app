import React from "react";
import { useStore } from "@/ui/shared-components/ViewportUpdater";
import { VBox } from "@/ui/shared-components/LayoutBoxes";
import Layout from "@/ui/shared-components/Layout";
import LandingPageHowItWorks from "./sections/how-it-works/LandingPageHowItWorks";
import LandingPagePrinciples from "./sections/principles/LandingPagePrinciples";
import LandingPageTeam from "./sections/team/LandingPageTeam";
import LandingPageFooter from "./sections/footer/LandingPageFooter";
import LandingPageFact from "./sections/fact/LandingPageFact";
import LandingPageFeedback from "./sections/feedback/LandingPageFeedback";
import LandingPageFunding from "./sections/funding/LandingPageFunding";
import LandingPageMission from "./sections/mission/LandingPageMission";
import LandingPageTopSection from "./sections/top-section/LandingPageTopSection";
import LandingPageTopSectionBielefunke from "./sections/top-section/variants/LandingPageTopSectionBielefunke";

const LandingPage = ({ runway }) => {
    const isDesktop = useStore((state) => state.isDesktop);

    let topSection;
    switch (runway) {
        case 'bielefunke':
            topSection = <LandingPageTopSectionBielefunke isDesktop={isDesktop} />;
            break;
        default:
            topSection = <LandingPageTopSection isDesktop={isDesktop} />;
            break;
    };

    return (
        <Layout runway={runway}>
            <VBox sx={{ width: '100%' }}>
                <VBox>
                    {topSection}
                </VBox>
                <VBox>
                    <LandingPageFact isDesktop={isDesktop} />
                </VBox>
                <VBox id="how-it-works">
                    <LandingPageHowItWorks isDesktop={isDesktop} />
                </VBox>
                <VBox id="principles">
                    <LandingPageMission isDesktop={isDesktop} />
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
