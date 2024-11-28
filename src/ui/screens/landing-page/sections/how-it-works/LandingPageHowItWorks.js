import React from "react";
import VStack from "../../../../shared-components/VStack";
import LandingPageHowItWorksDesktop from "./views/LandingPageHowItWorksDesktop";
import LandingPageHowItWorksMobile from "./views/LandingPageHowItWorksMobile";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";
import LandingPageSectionGrid from "../../components/LandingPageSectionGrid";
import useTranslation from "../../../../language/useTranslation";

const LandingPageHowItWorks = ({isDesktop}) => {
    const { t } = useTranslation();

    const quick_check = `${process.env.PUBLIC_URL}/assets/images/landing-page/current_quickcheck_page.jpg`;
    const benefits_overview = `${process.env.PUBLIC_URL}/assets/images/landing-page/current_overview_page.jpg`;
    const benefit_page = `${process.env.PUBLIC_URL}/assets/images/landing-page/current_benefits_page.jpg`;

    return (
        <LandingPageSectionWrapper isDesktop={isDesktop}>
            <LandingPageSectionGrid title={t('home.howItWorks.header')}>
                <VStack gap={9} alignItems={'center'}>
                    {isDesktop ?
                        <LandingPageHowItWorksDesktop quick_check={quick_check} benefits_overview={benefits_overview}
                                                      benefit_page={benefit_page}/>
                        : <LandingPageHowItWorksMobile quick_check={quick_check} benefits_overview={benefits_overview}
                                                       benefit_page={benefit_page}/>
                    }
                </VStack>
            </LandingPageSectionGrid>
        </LandingPageSectionWrapper>
    );
}

export default LandingPageHowItWorks;
