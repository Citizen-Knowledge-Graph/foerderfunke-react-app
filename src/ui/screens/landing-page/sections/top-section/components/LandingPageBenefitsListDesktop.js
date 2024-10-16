import React, { useState } from "react";
import HStack from "../../../../../components/HStack";
import LandingPageBenefitsCardDesktop from "./LandingPageBenefitsCardDesktop";



const LandingPageBenefitsListDesktop = ({benefits}) => {
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
