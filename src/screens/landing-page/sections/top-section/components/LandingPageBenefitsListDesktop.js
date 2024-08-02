import React, { useState } from "react";
import HStack from "../../../../../components/HStack";
import LandingPageBenefitsCardDesktop from "./LandingPageBenefitsCardDesktop";

const benefits = [
    { id: 1, name: "Kinderzuschlag", url: "Kinderzuschlag.png" },
    { id: 2, name: "Wohngeld", url: "Wohngeld.png" },
    { id: 3, name: "Grundsicherung", url: "Grundsicherung.png" },
    { id: 4, name: "Bildungsgutschein", url:  "Bildungsgutschein.png" },
    { id: 5, name: "Viele Weitere", url:  "VieleWeitere.png" },
];

const LandingPageBenefitsListDesktop = () => {
    const [hoveredIndex, setHoveredIndex] = useState(0);

    return (
        <HStack justifyContent={'center'}>
            {benefits.map((benefit, index) => (
                <LandingPageBenefitsCardDesktop
                    key={index}
                    benefit={benefit}
                    isHovered={hoveredIndex === index}
                    onMouseEnter={() => setHoveredIndex(index)}
                />
            ))}
        </HStack>
    );
}

export default LandingPageBenefitsListDesktop;
