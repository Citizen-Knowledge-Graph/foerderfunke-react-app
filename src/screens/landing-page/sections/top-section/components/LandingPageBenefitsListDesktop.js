import React, { useState } from "react";
import HStack from "../../../../../components/HStack";
import LandingPageBenefitsCardDesktop from "./LandingPageBenefitsCardDesktop";

const benefits = [
    { id: 1, name: "Benefit 1" },
    { id: 2, name: "Benefit 2" },
    { id: 3, name: "Benefit 3" },
    { id: 3, name: "Benefit 3" },
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
