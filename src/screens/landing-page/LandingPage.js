import VStack from "../../components/VStack";
import {Card, CardContent, Typography} from "@mui/material";
import Layout from "../../components/Layout";
import HStack from "../../components/HStack";
import LandingPageImageList from "./components/LandingPageImageList";
import LandingPageHowItWorks from "./components/LandingPageHowItWorks";
import {yellow} from "@mui/material/colors";
import {Link} from "react-router-dom";
import React from "react";

const LandingPage = () => {
    return (
        <Layout>
            <VStack sx={{width: "100%"}} gap={3}>
                <VStack sx={{width: "100%"}}>
                    <HStack justifyContent={'flex-start'}>
                        <Typography sx={styles.headerSectionTitle}>Check personalised benefits and financial
                            support</Typography>
                    </HStack>
                    <HStack>
                        <Card sx={styles.headerSectionButtonCard}>
                            <Link to={'/onboarding-choice'}
                                  style={{textDecoration: 'none', color: "black", width: '100%'}}>
                                <CardContent sx={styles.headerSectionButtonCardContent}>
                                    <HStack gap={1} alignItems={'center'}>
                                        <Typography sx={styles.headerSectionButtonCardText}>
                                            Try FörderFunke
                                        </Typography>
                                    </HStack>
                                </CardContent>
                            </Link>
                        </Card>
                    </HStack>
                </VStack>
                <VStack sx={{width: "100%"}}>
                    <HStack justifyContent={'flex-end'}>
                        <LandingPageImageList/>
                    </HStack>
                </VStack>
                <VStack gap={0} sx={styles.factHeaderBackground}>
                    <HStack sx={{padding: "16px"}}>
                        <Typography sx={styles.headerSectionTitle}>1 out of 5 households in Germany don’t claim social benefits they are entitled to.</Typography>
                    </HStack>
                    <HStack sx={{padding: "16px"}}>
                        <Typography>We are on a mission to make social benefits in Germany accessible and easy to understand by everyone. We show you what social benefits you might be eligible for and point you the way to apply for them. </Typography>
                    </HStack>
                </VStack>
                <VStack sx={{width: "100%"}}>
                    <LandingPageHowItWorks/>
                </VStack>
            </VStack>
        </Layout>
    );
}

const styles = {
    headerSectionTitle: {
        fontWeight: 'bold',
        fontSize:
            '28px',
    },
    headerSectionButtonCard: {
        backgroundColor: yellow[500],
        boxShadow:
            'none',
        borderRadius:
            '12px',
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
        fontSize:
            '20px',
        fontWeight:
            'bold',
    },
    factHeaderBackground: {
        width: "100%",
        backgroundColor: yellow[500]
    }
}

export default LandingPage;
