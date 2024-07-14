import VStack from "../../components/VStack";
import {Typography} from "@mui/material";
import Layout from "../../components/Layout";
import HStack from "../../components/HStack";
import LandingPageImageSection from "./components/LandingPageImageSection";
import LandingPageHowItWorks from "./components/LandingPageHowItWorks";
import React from "react";
import globalStyles from "../../styles/styles";

const LandingPage = () => {
    return (
        <Layout>
            <VStack gap={7}>
                <VStack sx={{padding: "16px"}}>
                    <HStack justifyContent={'center'}>
                        <Typography sx={styles.headerSectionTitle}>Check benefits and financial support you can get
                            support</Typography>
                    </HStack>
                </VStack>
                <VStack alignItems={'center'} sx={{padding: "16px"}}>
                    <LandingPageImageSection/>
                </VStack>
                <VStack gap={0} sx={styles.factHeaderBackground}>
                    <HStack sx={{padding: "16px"}}>
                        <Typography sx={styles.headerSectionTitle}>1 out of 5 households in Germany don’t claim
                            social benefits they are entitled to.</Typography>
                    </HStack>
                    <HStack sx={{padding: "16px"}}>
                        <Typography>We are on a mission to make social benefits in Germany accessible and easy to
                            understand by everyone. We show you what social benefits you might be eligible for and
                            point you the way to apply for them. </Typography>
                    </HStack>
                </VStack>
                <VStack sx={{width: "100%", padding: "16px"}}>
                    <LandingPageHowItWorks/>
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
