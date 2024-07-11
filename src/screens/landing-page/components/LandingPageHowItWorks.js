import React from "react";
import VStack from "../../../components/VStack";
import HStack from "../../../components/HStack";
import {Typography} from "@mui/material";
import LandingPageInfoCard from "./LandingPageInfoCard";
import LandingPageImage from "./LandingPageImage";
import LandingPageBasics from "./LandingPageBasics";
import LandingPageClaimCard from "./LandingPageClaimCard";

const LandingPageHowItWorks = () => {
    const quickCheckImage = `${process.env.PUBLIC_URL}/assets/images/figma_phone_2.svg`;

    return (
        <VStack gap={3} alignItems={'center'} sx={{width: '100%'}}>
            <VStack>
                <HStack justifyContent={'flex-start'} sx={{width: '100%'}}>
                    <Typography sx={styles.subTitleText}>
                        That's how it works
                    </Typography>
                </HStack>
                <HStack justifyContent={'flex-start'} sx={{width: '100%'}}>
                    <Typography sx={styles.titleText}>
                        The easy-peasy way to find social benefits for you
                    </Typography>
                </HStack>
            </VStack>
            <VStack gap={3} sx={{width: '100%'}}>
                <LandingPageInfoCard
                    title="Answer some basic questions"
                    text="Do a quick check, create your  profile, or browse our list of social benefits. Your choice."/>
                <LandingPageImage url={quickCheckImage}/>
                <LandingPageInfoCard
                    title="Get your potential benefits listed"
                    text="The more complete your profile is, the more accurate the list of benefits you get."/>
                <LandingPageImage url={quickCheckImage}/>
            </VStack>
            <VStack gap={3} sx={{width: '100%'}}>
                <LandingPageBasics/>
            </VStack>
            <VStack>
                <LandingPageClaimCard/>
            </VStack>
        </VStack>
    );
}

const styles = {
    titleText: {
        fontWeight: 'bold',
        fontSize: '36px',
    },
    subTitleText: {
        fontSize: '30px',
    }
};

export default LandingPageHowItWorks;
