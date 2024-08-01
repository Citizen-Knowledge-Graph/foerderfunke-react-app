import React from "react";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";
import LandingPagePrinciplesDesktop from "./views/LandingPagePrinciplesDesktop";
import LandingPagePrinciplesMobile from "./views/LandingPagePrinciplesMobile";
import globalStyles from "../../../../styles/styles";
import VStack from "../../../../components/VStack";
import HStack from "../../../../components/HStack";
import {Typography} from "@mui/material";

const LandingPagePrinciples = ({isDesktop}) => {
    return (
        <LandingPageSectionWrapper backgroundColor={globalStyles.primaryColor} isDesktop={isDesktop}>
            <VStack gap={5}>
                <HStack justifyContent={'center'} sx={{width: '100%'}}>
                    <Typography sx={styles.titleText}>
                        Our Principles
                    </Typography>
                </HStack>
                {isDesktop ? <LandingPagePrinciplesDesktop/> : <LandingPagePrinciplesMobile/>}
            </VStack>
        </LandingPageSectionWrapper>
    );
}

const styles = {
    titleText: {
        fontWeight: 'bold',
        fontSize: '36px',
        textAlign: 'center',
    }
};

export default LandingPagePrinciples;
