import VStack from "../../components/VStack";
import {Typography} from "@mui/material";
import Layout from "../../components/Layout";
import HStack from "../../components/HStack";
import LandingPageImageSection from "./components/LandingPageImageSection";
import LandingPageHowItWorks from "./components/LandingPageHowItWorks";
import LandingPageOurPrinciples from "./components/LandingPageOurPrinciples";
import LandingPageTeam from "./components/LandingPageTeam";
import LandingPageFooter from "./components/LandingPageFooter";
import LandingPageHeader from "./components/LandingPageHeader";
import LandingPageFact from "./components/LandingPageFact";
import React from "react";
import globalStyles from "../../styles/styles";

const LandingPage = () => {
    return (
        <Layout>
            <VStack gap={5}>
                <VStack sx={{padding: "16px"}}>
                    <LandingPageHeader/>
                </VStack>
                <VStack alignItems={'center'} sx={{padding: "16px"}}>
                    <LandingPageImageSection/>
                </VStack>
                <VStack>
                    <LandingPageFact/>
                </VStack>
                <VStack sx={{width: "100%"}}>
                    <LandingPageHowItWorks/>
                </VStack>
                <VStack sx={{width: "100%"}}>
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
