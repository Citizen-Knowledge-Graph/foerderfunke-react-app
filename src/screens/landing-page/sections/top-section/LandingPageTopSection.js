import React from "react";
import LandingPageTopSectionDesktop from "./views/LandingPageTopSectionDesktop";
import LandingPageTopSectionMobile from "./views/LandingPageTopSectionMobile";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";
import useTranslation from "../../../../language/useTranslation";
import LandingPageSectionGrid from "../../components/LandingPageSectionGrid";

const LandingPageTopSection = ({isDesktop}) => {
    const { t } = useTranslation();

    const benefits = [
        { id: 1, name: t("hero.childAllowance"), url: "Kinderzuschlag.png" },
        { id: 2, name: t("hero.housingBenefit"), url: "Wohngeld.png" },
        { id: 3, name: t("hero.citizensBenefit"), url: "Grundsicherung.png" },
        { id: 4, name: t("hero.vocationalTrainingAllowance"), url: "Bildungsgutschein.png" },
        { id: 5, name: t("hero.manyMore"), url: "VieleWeitere.png" },
    ];

    return (
        <LandingPageSectionWrapper isDesktop={isDesktop}>
            {isDesktop ? <LandingPageTopSectionDesktop benefits={benefits}/> :
                <LandingPageTopSectionMobile benefits={benefits}/>}
        </LandingPageSectionWrapper>
    )
}

export default LandingPageTopSection;
