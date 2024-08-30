import React from "react";
import VStack from "../../../../../components/VStack";
import LandingPageInfoCard from "../components/LandingPageInfoCard";

const LandingPageHowItWorksMobile = ({figma_phone_1, figma_phone_2}) => {
    return (
        <VStack alignItems={'center'}>
            <LandingPageInfoCard
                title="Get your potential benefits listed"
                text="Do a quick check, create your profile, or browse our list of social benefits by topic. Your choice."/>
            <img
                src={figma_phone_1}
                style={{
                    width: '350px',
                    height: 'auto',
                    position: 'relative',
                }}
                alt={'phone 1'}/>
            <LandingPageInfoCard
                title="See your potential benefits"
                text="The more complete your profile is, the more accurate the list of benefits you get."/>
            <img
                src={figma_phone_2}
                style={{
                    maxWidth: '350px',
                    height: 'auto',
                    position: 'relative',
                }}
                alt={'phone 1'}/>
        </VStack>
    )
}

export default LandingPageHowItWorksMobile;
