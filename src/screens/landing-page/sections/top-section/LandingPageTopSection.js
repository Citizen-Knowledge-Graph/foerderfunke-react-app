import React from "react";
import LandingPageTopSectionDesktop from "./views/LandingPageTopSectionDesktop";
import LandingPageTopSectionMobile from "./views/LandingPageTopSectionMobile";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";

const benefits = [
    {id: 1, name: "Child allowance", url: "Kinderzuschlag.png"},
    {id: 2, name: "Housing benefit", url: "Wohngeld.png"},
    {id: 3, name: "Cost-of-living assistance", url: "Grundsicherung.png"},
    {id: 4, name: "Vocational training allowance", url: "Bildungsgutschein.png"},
    {id: 5, name: "More", url: "VieleWeitere.png"},
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
