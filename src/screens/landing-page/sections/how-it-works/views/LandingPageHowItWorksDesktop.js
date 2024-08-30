import React from "react";
import VStack from "../../../../../components/VStack";
import HStack from "../../../../../components/HStack";
import LandingPageInfoCard from "../components/LandingPageInfoCard";

const LandingPageHowItWorksDesktop = ({figma_phone_1, figma_phone_2}) => {

    return (
        <VStack gap={5} alignItems={'center'}>
            <HStack justifyContent={'space-between'} sx={{width: '60%'}}>
                <LandingPageInfoCard
                    title="Answer some basic questions"
                    text="Do a quick check, create your profile, or browse our list of social benefits by topic. Your choice."/>
                <LandingPageInfoCard
                    title="See your potential benefits"
                    text="The more complete your profile is, the more accurate the list of benefits you get."/>
            </HStack>
            <HStack justifyContent={'space-between'} alignItems={'center'} sx={{position: 'relative'}}>
                <img
                    src={figma_phone_1}
                    style={{
                        width: '500px',
                        height: 'auto',
                        zIndex: 1,
                        position: 'relative',
                        marginRight: '-100px',
                        marginTop: '-50px'
                    }}
                    alt={'phone 1'}/>
                <img
                    src={figma_phone_2}
                    style={{
                        width: '600px',
                        height: 'auto',
                        zIndex: 2,
                        position: 'relative',
                        marginLeft: '-50px'
                    }}
                    alt={'phone 1'}/>
            </HStack>
        </VStack>
    )
}

export default LandingPageHowItWorksDesktop;
