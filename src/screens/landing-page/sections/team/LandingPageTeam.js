import React from "react";
import VStack from "../../../../components/VStack";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";
import LandingPageTeamDesktop from "./views/LandingPageTeamDesktop";
import LandingPageTeamMobile from "./views/LandingPageTeamMobile";
import LandingPageSectionTitle from "../../components/LandingPageSectionTitle";

const LandingPageTeam = ({isDesktop}) => {
    return (
        <LandingPageSectionWrapper isDesktop={isDesktop}>
            <VStack gap={5}>
                <LandingPageSectionTitle title={'Let\'s connect'}/>
                {isDesktop ? <LandingPageTeamDesktop/> : <LandingPageTeamMobile/>}
            </VStack>
        </LandingPageSectionWrapper>
    );
}

export default LandingPageTeam;
