import React from "react";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";
import {Typography} from "@mui/material";
import LandingPageFooterDesktop from "./views/LandingPageFooterDesktop";
import LandingPageFooterMobile from "./views/LandingPageFooterMobile";
import globalStyles from "../../../../styles/styles";

const LandingPageFooter = ({isDesktop}) => {
    return (
        <LandingPageSectionWrapper backgroundColor={globalStyles.primaryColor} isDesktop={isDesktop}>
            <Typography>
                Footer Bar
            </Typography>
            {isDesktop ? <LandingPageFooterDesktop/> : <LandingPageFooterMobile/>}
        </LandingPageSectionWrapper>
    )
}

export default LandingPageFooter;
