import React from "react";
import HStack from "../../../../../components/HStack";

const LandingPageBenefitsCardMobile = ({benefit, isTransitioning}) => {
    const quickCheckImage = `${process.env.PUBLIC_URL}/assets/images/family-stock-gpt4o.png`;

    return (
        <HStack
            justifyContent={'center'}
            sx={{
                position: "relative",
                width: '325px',
                height: '100%',
                overflow: 'hidden',
                transition: 'opacity 0.3s ease-in-out',
                opacity: isTransitioning ? 0 : 1,
        }}
        >
            <img
                src={quickCheckImage}
                alt="Landing Page"
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "15px"
                }}
            />
        </HStack>
    );
}

export default LandingPageBenefitsCardMobile;
