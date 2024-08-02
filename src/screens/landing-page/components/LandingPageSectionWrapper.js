import React from "react";
import VStack from "../../../components/VStack";

const LandingPageSectionWrapper = ({backgroundColor = 'white', isDesktop, isTop=false, children}) => {
    const horizontalPadding = isDesktop ? '60px' : '16px';
    const verticalPadding = isDesktop
        ? isTop
            ? '32px'
            : '60px'
        : isTop
            ? '28px'
            : '60px';
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
