import React from "react";
import HStack from "../../../../../components/HStack";

const LandingPageBenefitsCardMobile = ({benefit, cardHeight}) => {
    const quickCheckImage = `${process.env.PUBLIC_URL}/assets/images/family-stock-gpt4o.png`;

    return (
        <HStack
            justifyContent={'center'}
            sx={{position: "relative", width: '325px', height: `${cardHeight}px`, overflow: 'hidden'}}
        >
            <img
                src={quickCheckImage}
                alt="Landing Page"
                style={{
                    borderRadius: "15px"
                }}
            />
        </HStack>
    );
}

export default LandingPageBenefitsCardMobile;
