import React from "react";
import LandingPageTopSectionDesktop from "./views/LandingPageTopSectionDesktop";
import LandingPageTopSectionMobile from "./views/LandingPageTopSectionMobile";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";
import useTranslation from "../../../../language/useTranslation";

const LandingPageTopSection = ({isDesktop}) => {
    const { t } = useTranslation();

    const benefits = [
        { id: 1, name: t("home.hero.childAllowance"), url: "Kinderzuschlag.png" },
        { id: 2, name: t("home.hero.housingBenefit"), url: "Wohngeld.png" },
        { id: 3, name: t("home.hero.citizensBenefit"), url: "Grundsicherung.png" },
        { id: 4, name: t("home.hero.bafög"), url: "Bildungsgutschein.png" },
        { id: 5, name: t("home.hero.manyMore"), url: "VieleWeitere.png" },
    ];

    return (
        <LandingPageSectionWrapper isDesktop={isDesktop}>
            {isDesktop ? <LandingPageTopSectionDesktop benefits={benefits}/> :
                <LandingPageTopSectionMobile benefits={benefits}/>}
        </LandingPageSectionWrapper>
    )
}

export default LandingPageTopSection;
