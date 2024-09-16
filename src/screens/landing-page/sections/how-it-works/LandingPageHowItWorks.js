import React from "react";
import VStack from "../../../../components/VStack";
import LandingPageHowItWorksDesktop from "./views/LandingPageHowItWorksDesktop";
import LandingPageHowItWorksMobile from "./views/LandingPageHowItWorksMobile";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";
import LandingPageBasics from "./components/LandingPageBasics";
import LandingPageWAppButton from "../../components/LandingPageWAppButton";
import LandingPageSectionTitle from "../../components/LandingPageSectionTitle";

const LandingPageHowItWorks = ({isDesktop}) => {
    const quick_check = `${process.env.PUBLIC_URL}/assets/images/landing-page/current_quickcheck_page.jpg`;
    const benefits_overview = `${process.env.PUBLIC_URL}/assets/images/landing-page/current_overview_page.jpg`;
    const benefit_page = `${process.env.PUBLIC_URL}/assets/images/landing-page/current_benefits_page.jpg`;

    return (
        <LandingPageSectionWrapper isDesktop={isDesktop}>
            <VStack gap={5}>
                <LandingPageSectionTitle title={'That\'s how it works'}/>
                {isDesktop ?
                    <LandingPageHowItWorksDesktop quick_check={quick_check} benefits_overview={benefits_overview} benefit_page={benefit_page}/>
                    : <LandingPageHowItWorksMobile quick_check={quick_check} benefits_overview={benefits_overview} benefit_page={benefit_page}/>
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

export default LandingPageHowItWorks;
