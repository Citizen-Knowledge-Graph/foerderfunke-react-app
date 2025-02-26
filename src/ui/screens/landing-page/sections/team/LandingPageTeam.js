import React from "react";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";
import LandingPageTeamDesktop from "./views/LandingPageTeamDesktop";
import LandingPageTeamMobile from "./views/LandingPageTeamMobile";

const LandingPageTeam = ({ isDesktop }) => {

    if (isDesktop) {
        return (
            <LandingPageSectionWrapper fullWidth={true} isDesktop={isDesktop}>
                <LandingPageTeamDesktop />
            </LandingPageSectionWrapper>
        )
    }


    return (
        <LandingPageSectionWrapper isDesktop={isDesktop} fullWidth={true}>
            <LandingPageTeamMobile />
        </LandingPageSectionWrapper>
    );
}

export default LandingPageTeam;
