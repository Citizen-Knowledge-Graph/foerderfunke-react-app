import React from "react";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";
import LandingPagePrinciplesDesktop from "./views/LandingPagePrinciplesDesktop";
import LandingPagePrinciplesMobile from "./views/LandingPagePrinciplesMobile";

const LandingPagePrinciples = ({ isDesktop }) => {
    return (
        <LandingPageSectionWrapper isDesktop={isDesktop}>
            {isDesktop ? <LandingPagePrinciplesDesktop /> : <LandingPagePrinciplesMobile/>}
        </LandingPageSectionWrapper>
    )
}

export default LandingPagePrinciples;
