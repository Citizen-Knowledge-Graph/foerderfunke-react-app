import React from "react";
import HStack from "../../../../../components/HStack";

const LandingPageBenefitsCard = ({isHovered, onMouseEnter, onMouseLeave}) => {
    const quickCheckImage = `${process.env.PUBLIC_URL}/assets/images/family-stock-gpt4o.png`;

    return (
        <HStack
            justifyContent={'center'}
            sx={{position: "relative", width: isHovered ? '325px' : '75px', overflow: 'hidden'}}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <img
                src={quickCheckImage}
                alt="Landing Page"
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "15px"
                }}/>
        </HStack>
    );
}

export default LandingPageBenefitsCard;
