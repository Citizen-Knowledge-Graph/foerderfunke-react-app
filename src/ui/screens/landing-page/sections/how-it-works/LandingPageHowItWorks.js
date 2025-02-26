import React from "react";
import LandingPageHowItWorksDesktop from "./views/LandingPageHowItWorksDesktop";
import LandingPageHowItWorksMobile from "./views/LandingPageHowItWorksMobile";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";

const LandingPageHowItWorks = ({ isDesktop }) => {

    return (
        <LandingPageSectionWrapper isDesktop={isDesktop}>
            {isDesktop ?
                <LandingPageHowItWorksDesktop />
                : <LandingPageHowItWorksMobile />
            }
        </LandingPageSectionWrapper>
    );
}

export default LandingPageHowItWorks;
