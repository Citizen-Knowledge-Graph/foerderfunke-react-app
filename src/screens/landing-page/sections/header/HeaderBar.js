import React from "react";
import HeaderBarMobile from "./views/HeaderBarMobile";
import HeaderBarDesktop from "./views/HeaderBarDesktop";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";

const HeaderBar = ({isApp, isDesktop}) => {
    return (
        <LandingPageSectionWrapper isDesktop={isDesktop} isTop={true}>
            {isDesktop ? <HeaderBarDesktop isApp={isApp}/> : <HeaderBarMobile isApp={isApp}/>}
        </LandingPageSectionWrapper>
    )
}

export default HeaderBar;
