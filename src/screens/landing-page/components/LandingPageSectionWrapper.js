import React from "react";
import VStack from "../../../components/VStack";

const LandingPageSectionWrapper = ({backgroundColor='white', isDesktop, children}) => {
    const horizontalPadding = isDesktop ? '60px' : '16px';

    return (
        <VStack sx={{backgroundColor: backgroundColor, width: '100%', padding: horizontalPadding}}>
            {children}
        </VStack>
    )
}

export default LandingPageSectionWrapper;
