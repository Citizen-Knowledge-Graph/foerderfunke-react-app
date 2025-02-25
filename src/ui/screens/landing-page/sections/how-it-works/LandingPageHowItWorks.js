import React from "react";
import LandingPageHowItWorksDesktop from "./views/LandingPageHowItWorksDesktop";
import LandingPageHowItWorksMobile from "./views/LandingPageHowItWorksMobile";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";

const LandingPageHowItWorks = ({ isDesktop }) => {
    const quick_check = `${process.env.PUBLIC_URL}/assets/images/landing-page/current_quickcheck_page.jpg`;
    const benefits_overview = `${process.env.PUBLIC_URL}/assets/images/landing-page/current_overview_page.jpg`;
    const benefit_page = `${process.env.PUBLIC_URL}/assets/images/landing-page/current_benefits_page.jpg`;

    return (
        <LandingPageSectionWrapper isDesktop={isDesktop}>
            {isDesktop ?
                <LandingPageHowItWorksDesktop />
                : <LandingPageHowItWorksMobile quick_check={quick_check} benefits_overview={benefits_overview}
                    benefit_page={benefit_page} />
            }
        </LandingPageSectionWrapper>
    );
}

export default LandingPageHowItWorks;
