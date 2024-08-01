import React from "react";
import VStack from "../../../components/VStack";

const LandingPageSectionWrapper = ({backgroundColor = 'white', isDesktop, children}) => {
    const horizontalPadding = isDesktop ? '60px' : '16px';
    const verticalPadding = isDesktop ? '60px' : '40px';

    return (
        <VStack sx={{
            backgroundColor: backgroundColor,
            width: '100%',
            paddingLeft: horizontalPadding,
            paddingRight: horizontalPadding,
            paddingTop: verticalPadding,
            paddingBottom: verticalPadding,
        }}>
            {children}
        </VStack>
    )
}

export default LandingPageSectionWrapper;
