import React from "react";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";
import LandingPageFooterDesktop from "./views/LandingPageFooterDesktop";
import LandingPageFooterMobile from "./views/LandingPageFooterMobile";
import globalStyles from "../../../../styles/styles";

const LandingPageFooter = ({isDesktop}) => {
    return (
        <LandingPageSectionWrapper backgroundColor={globalStyles.primaryColor} isDesktop={isDesktop}>
            {isDesktop ? <LandingPageFooterDesktop/> : <LandingPageFooterMobile/>}
        </LandingPageSectionWrapper>
    )
}

export default LandingPageFooter;
