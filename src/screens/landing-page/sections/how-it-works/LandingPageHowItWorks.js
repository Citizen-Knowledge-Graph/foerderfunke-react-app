import React from "react";
import LandingPageHowItWorksDesktop from "./views/LandingPageHowItWorksDesktop";
import LandingPageHowItWorksMobile from "./views/LandingPageHowItWorksMobile";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";
import VStack from "../../../../components/VStack";
import HStack from "../../../../components/HStack";
import {Typography} from "@mui/material";

const LandingPageHowItWorks = ({isDesktop}) => {
    return (
        <LandingPageSectionWrapper isDesktop={isDesktop}>
            <VStack gap={5}>
                <VStack>
                    <HStack justifyContent={'center'} sx={{width: '100%'}}>
                        <Typography sx={styles.subTitleText}>
                            THAT'S HOW IT WORKS
                        </Typography>
                    </HStack>
                    <HStack justifyContent={'center'} sx={{width: '100%'}}>
                        <Typography sx={styles.titleText}>
                            The easy-peasy way to find social benefits for you
                        </Typography>
                    </HStack>
                </VStack>
                {isDesktop ? <LandingPageHowItWorksDesktop/> : <LandingPageHowItWorksMobile/>}
            </VStack>
        </LandingPageSectionWrapper>
    );
}

const styles = {
    titleText: {
        fontWeight: 'bold',
        fontSize: '36px',
        textAlign: 'center',
    },
    subTitleText: {
        fontSize: '28px',
        textAlign: 'center',
        fontWeight: '300'
    }
};

export default LandingPageHowItWorks;
