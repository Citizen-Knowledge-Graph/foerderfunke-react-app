import React from "react";
import VStack from "../../../shared-components/VStack";
import {useStore} from "../../../shared-components/ViewportUpdater";

const LandingPageSectionWrapper = ({backgroundColor= null, isTop = false, children}) => {
    const isDesktop = useStore((state) => state.isDesktop);
    const horizontalPadding = isDesktop ? '96px' : '16px';
    const verticalPadding = isDesktop
        ? isTop
            ? '16px'
            : '80px'
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
            boxSizing: 'border-box',
        }}>
            {children}
        </VStack>
    )
}

export default LandingPageSectionWrapper;
