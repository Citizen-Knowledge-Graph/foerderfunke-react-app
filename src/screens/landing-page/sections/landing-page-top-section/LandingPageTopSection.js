import React from "react";
import LandingPageTopSectionDesktop from "./views/LandingPageTopSectionDesktop";
import LandingPageTopSectionMobile from "./views/LandingPageTopSectionMobile";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";

const LandingPageTopSection = ({isDesktop}) => {
    return (
        <LandingPageSectionWrapper isDesktop={isDesktop}>
            {isDesktop ? <LandingPageTopSectionDesktop/> : <LandingPageTopSectionMobile/>}
        </LandingPageSectionWrapper>
    )
}

export default LandingPageTopSection;
