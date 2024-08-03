import React from "react";
import LandingPageTopSectionDesktop from "./views/LandingPageTopSectionDesktop";
import LandingPageTopSectionMobile from "./views/LandingPageTopSectionMobile";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";

const benefits = [
    {id: 1, name: "Kinderzuschlag", url: "Kinderzuschlag.png"},
    {id: 2, name: "Wohngeld", url: "Wohngeld.png"},
    {id: 3, name: "Grundsicherung", url: "Grundsicherung.png"},
    {id: 4, name: "Bildungsgutschein", url: "Bildungsgutschein.png"},
    {id: 5, name: "Viele Weitere", url: "VieleWeitere.png"},
];

const LandingPageTopSection = ({isDesktop}) => {
    return (
        <LandingPageSectionWrapper isDesktop={isDesktop}>
            {isDesktop ? <LandingPageTopSectionDesktop benefits={benefits}/> :
                <LandingPageTopSectionMobile benefits={benefits}/>}
        </LandingPageSectionWrapper>
    )
}

export default LandingPageTopSection;
