import React from "react";
import HStack from "../../../components/HStack";
import {Typography} from "@mui/material";
import globalStyles from "../../../styles/styles";
import LandingPageSectionWrapper from "../components/LandingPageSectionWrapper";
import VStack from "../../../components/VStack";
import LandingPageSectionGrid from "../components/LandingPageSectionGrid";

const LandingPageFact = ({isDesktop}) => {
    return (
        <LandingPageSectionWrapper backgroundColor={globalStyles.primaryColor} isDesktop={isDesktop}>
            <LandingPageSectionGrid>
                <VStack alignItems={'center'}>
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
            </LandingPageSectionGrid>
        </LandingPageSectionWrapper>
    )
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
}

export default LandingPageFact;
