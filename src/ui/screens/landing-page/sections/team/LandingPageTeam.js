import React from "react";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";
import LandingPageTeamDesktop from "./views/LandingPageTeamDesktop";
import LandingPageTeamMobile from "./views/LandingPageTeamMobile";

const LandingPageTeam = ({ isDesktop }) => {

    return (
        <LandingPageSectionWrapper isDesktop={isDesktop}>
            {isDesktop ? <LandingPageTeamDesktop /> : <LandingPageTeamMobile />}
        </LandingPageSectionWrapper>
    );
}

export default LandingPageTeam;
