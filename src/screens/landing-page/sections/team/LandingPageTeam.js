import React from "react";
import VStack from "../../../../components/VStack";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";
import LandingPageTeamDesktop from "./views/LandingPageTeamDesktop";
import LandingPageTeamMobile from "./views/LandingPageTeamMobile";
import LandingPageSectionTitle from "../../components/LandingPageSectionTitle";
import useTranslation from "../../../../language/useTranslation";

const LandingPageTeam = ({isDesktop}) => {
    const { t } = useTranslation();

    return (
        <LandingPageSectionWrapper isDesktop={isDesktop}>
            <VStack gap={5}>
                <LandingPageSectionTitle title={t('connect.header')}/>
                {isDesktop ? <LandingPageTeamDesktop/> : <LandingPageTeamMobile/>}
            </VStack>
        </LandingPageSectionWrapper>
    );
}

export default LandingPageTeam;
