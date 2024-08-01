import React from "react";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";
import LandingPagePrinciplesDesktop from "./views/LandingPagePrinciplesDesktop";
import LandingPagePrinciplesMobile from "./views/LandingPagePrinciplesMobile";
import globalStyles from "../../../../styles/styles";

const LandingPagePrinciples = ({isDesktop}) => {
    return (
        <LandingPageSectionWrapper backgroundColor={globalStyles.primaryColor} isDesktop={isDesktop}>
            {isDesktop ? <LandingPagePrinciplesDesktop/> : <LandingPagePrinciplesMobile/>}
        </LandingPageSectionWrapper>
    );
}

export default LandingPagePrinciples;
