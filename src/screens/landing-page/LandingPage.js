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
                <VStack gap={2} sx={styles.factHeaderBackground}>
                    <HStack>
                        <Typography sx={styles.headerSectionTitle}>1 out of 5 households in Germany don’t claim
                            social benefits they are entitled to.</Typography>
                    </HStack>
                    <HStack>
                        <Typography sx={styles.headerSectionText}>We are on a mission to make social benefits in Germany
                            accessible and easy to understand by everyone. We show you what social benefits you might be
                            eligible for and point you the way to apply for them. </Typography>
                    </HStack>
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
    headerSectionTitle: {
        fontWeight: 'bold',
        fontSize: '28px',
        textAlign: 'center',
    },
    headerSectionText: {
        fontSize: '20px',
        textAlign: 'center',
    },
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
    factHeaderBackground: {
        width: "100%",
        padding: "16px",
        backgroundColor: globalStyles.primaryColor,
    }
}

export default LandingPage;