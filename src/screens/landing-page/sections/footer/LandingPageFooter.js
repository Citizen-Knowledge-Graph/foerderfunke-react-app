import React from "react";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";
import LandingPageFooterDesktop from "./views/LandingPageFooterDesktop";
import LandingPageFooterMobile from "./views/LandingPageFooterMobile";

const LandingPageFooter = ({isDesktop}) => {
    return (
        <LandingPageSectionWrapper isDesktop={isDesktop}>
            {isDesktop ? <LandingPageFooterDesktop/> : <LandingPageFooterMobile/>}
        </LandingPageSectionWrapper>
    )
}

export default LandingPageFooter;
