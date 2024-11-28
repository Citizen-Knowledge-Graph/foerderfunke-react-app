import React from "react";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";
import LandingPageTeamDesktop from "./views/LandingPageTeamDesktop";
import LandingPageTeamMobile from "./views/LandingPageTeamMobile";
import useTranslation from "../../../../language/useTranslation";
import LandingPageSectionGrid from "../../components/LandingPageSectionGrid";

const LandingPageTeam = ({isDesktop}) => {
    const {t} = useTranslation();

    return (
        <LandingPageSectionWrapper isDesktop={isDesktop}>
            <LandingPageSectionGrid title={t('home.connect.header')}>
                {isDesktop ? <LandingPageTeamDesktop/> : <LandingPageTeamMobile/>}
            </LandingPageSectionGrid>
        </LandingPageSectionWrapper>
    );
}

export default LandingPageTeam;
