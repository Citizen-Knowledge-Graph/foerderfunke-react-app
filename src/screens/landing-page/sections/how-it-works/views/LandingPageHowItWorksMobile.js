import React from "react";
import VStack from "../../../../../components/VStack";
import LandingPageInfoCard from "../components/LandingPageInfoCard";

const LandingPageHowItWorksMobile = ({quick_check, benefits_overview, benefit_page}) => {
    return (
        <VStack gap={9} alignItems={'center'}>
            <VStack gap={3} alignItems={'center'}>
                <LandingPageInfoCard
                    title="Answer some basic questions"
                    text="Do a quick check, create your profile, or browse our list of social benefits by topic. Your choice."/>
                <img
                    src={quick_check}
                    style={{
                        maxWidth: '250px',
                        height: 'auto',
                    }}
                    alt={'phone 1'}/>
            </VStack>
            <VStack gap={3} alignItems={'center'}>
                <LandingPageInfoCard
                    title="Get your potential benefits listed"
                    text="The more complete your profile is, the more accurate the list of benefits you get."/>
                <img
                    src={benefits_overview}
                    style={{
                        maxWidth: '250px',
                        height: 'auto',
                    }}
                    alt={'phone 1'}/>
            </VStack>
            <VStack gap={3} alignItems={'center'}>
                <LandingPageInfoCard
                    title="Learn about relevant benefits"
                    text="Learn about requirements and necessary steps to apply for you benefits."/>
                <img
                    src={benefit_page}
                    style={{
                        maxWidth: '250px',
                        height: 'auto',
                    }}
                    alt={'phone 1'}/>
            </VStack>
        </VStack>
    )
}

export default LandingPageHowItWorksMobile;
