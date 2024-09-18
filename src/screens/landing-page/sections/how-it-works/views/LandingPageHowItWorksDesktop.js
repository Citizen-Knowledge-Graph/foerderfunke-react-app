import React from "react";
import VStack from "../../../../../components/VStack";
import HStack from "../../../../../components/HStack";
import LandingPageInfoCard from "../components/LandingPageInfoCard";

const LandingPageHowItWorksDesktop = ({quick_check, benefits_overview, benefit_page}) => {

    return (
        <VStack gap={9} alignItems={'center'} sx={{width: '100%'}}>
            <HStack gap={9} justifyContent={'space-between'} alignItems={'center'}>
                <LandingPageInfoCard
                    title="Answer some basic questions"
                    text="Do a quick check, create your profile, or browse our list of social benefits by topic. Your choice."/>
                <img
                    src={quick_check}
                    style={{
                        width: '300px',
                        height: 'auto',
                        boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.15)',
                        borderRadius: '18px'
                    }}
                    alt={'phone 1'}
                />
            </HStack>
            <HStack gap={9} justifyContent={'space-between'} alignItems={'center'}>
                <img
                    src={benefits_overview}
                    style={{
                        width: '300px',
                        height: 'auto',
                        boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.15)',
                        borderRadius: '18px'
                    }}
                    alt={'phone 1'}/>
                <LandingPageInfoCard
                    title="Get your potential benefits listed"
                    text="The more complete your profile is, the more accurate the list of benefits you get."/>

            </HStack>
            <HStack gap={9} justifyContent={'space-between'} alignItems={'center'}>
                <LandingPageInfoCard
                    title="Learn about relevant benefits"
                    text="Learn about requirements and necessary steps to apply for you benefits."/>
                <img
                    src={benefit_page}
                    style={{
                        width: '300px',
                        height: 'auto',
                        boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.15)',
                        borderRadius: '18px'
                    }}
                    alt={'phone 1'}/>
            </HStack>
        </VStack>
    )
}

export default LandingPageHowItWorksDesktop;
