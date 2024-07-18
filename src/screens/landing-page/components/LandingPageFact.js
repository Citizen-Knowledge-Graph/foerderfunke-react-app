import VStack from "../../../components/VStack";
import HStack from "../../../components/HStack";
import {Typography} from "@mui/material";
import React from "react";
import globalStyles from "../../../styles/styles";

const LandingPageFact = () => {
    return (
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
    )
}

const styles = {
    factHeaderBackground: {
        width: "100%",
        padding: "16px",
        backgroundColor: globalStyles.primaryColor,
    },
    headerSectionTitle: {
        fontWeight: 'bold',
        fontSize: '28px',
        textAlign: 'center',
    },
    headerSectionText: {
        fontSize: '20px',
        textAlign: 'center',
    },
}

export default LandingPageFact;
