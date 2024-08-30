import React from "react";
import LandingPageHowItWorksDesktop from "./views/LandingPageHowItWorksDesktop";
import LandingPageHowItWorksMobile from "./views/LandingPageHowItWorksMobile";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";
import VStack from "../../../../components/VStack";
import HStack from "../../../../components/HStack";
import {Typography} from "@mui/material";
import LandingPageBasics from "./components/LandingPageBasics";
import LandingPageWAppButton from "../../components/LandingPageWAppButton";

const LandingPageHowItWorks = ({isDesktop}) => {
    const figma_phone_1 = `${process.env.PUBLIC_URL}/assets/images/figma_phone_v1.svg`;
    const figma_phone_2 = `${process.env.PUBLIC_URL}/assets/images/figma_phone_v2.svg`;

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
                {isDesktop ?
                    <LandingPageHowItWorksDesktop figma_phone_1={figma_phone_1} figma_phone_2={figma_phone_2}/>
                    : <LandingPageHowItWorksMobile figma_phone_1={figma_phone_1} figma_phone_2={figma_phone_2}/>
                }
                <VStack>
                    <LandingPageBasics/>
                </VStack>
                <VStack alignItems={'center'}>
                    <LandingPageWAppButton backgroundColor={'primary'}/>
                </VStack>
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
