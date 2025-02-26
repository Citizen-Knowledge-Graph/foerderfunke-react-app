import React from "react";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";
import LandingPageMissionDesktop from "./views/LandingPageMissionDesktop";
import LandingPageMissionMobile from "./views/LandingPageMissionMobile";

const LandingPageMission = ({isDesktop}) => {
    return (
        <LandingPageSectionWrapper fullWidth={true} isDesktop={isDesktop}>
            {isDesktop ? <LandingPageMissionDesktop/> : <LandingPageMissionMobile />}
        </LandingPageSectionWrapper>
    )
}

export default LandingPageMission;
