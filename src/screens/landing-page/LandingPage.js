import VStack from "../../components/VStack";
import Layout from "../../components/Layout";
import LandingPageImageSection from "./sections/LandingPageImageSection";
import LandingPageHowItWorks from "./sections/LandingPageHowItWorks";
import LandingPageOurPrinciples from "./sections/LandingPageOurPrinciples";
import LandingPageTeam from "./sections/LandingPageTeam";
import LandingPageFooter from "./sections/LandingPageFooter";
import LandingPageHeader from "./sections/LandingPageHeader";
import LandingPageFact from "./sections/LandingPageFact";
import LandingPageTopSection from "./sections/landing-page-top-section/LandingPageTopSection";
import React from "react";
import globalStyles from "../../styles/styles";
import {useStore} from "../../components/ViewportUpdater";

const LandingPage = () => {
    const isDesktop = useStore((state) => state.isDesktop);
    const horizontalPadding = 16

    return (
        <Layout>
            <VStack gap={5}>
                <VStack>
                    <LandingPageTopSection isDesktop={isDesktop} horizontalPadding={horizontalPadding} />
                </VStack>
                <VStack>
                    <LandingPageFact/>
                </VStack>
                <VStack>
                    <LandingPageHowItWorks/>
                </VStack>
                <VStack>
                    <LandingPageOurPrinciples/>
                </VStack>
                <VStack>
                    <LandingPageTeam />
                </VStack>
                <VStack>
                    <LandingPageFooter />
                </VStack>
            </VStack>
        </Layout>
    );
}

const styles = {

    headerSectionButtonCard: {
        backgroundColor: globalStyles.primaryColor,
        boxShadow: 'none',
        borderRadius: '12px',
    },
    headerSectionButtonCardContent: {
        padding: "3px 6px 4px 8px",
        "&:last-child":
            {
                paddingBottom: '3px',
            }
        ,
    },
    headerSectionButtonCardText: {
        color: "black",
        fontSize: '20px',
        fontWeight: 'bold',
    },

}

export default LandingPage;
