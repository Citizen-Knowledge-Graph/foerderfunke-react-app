import React from "react";
import VStack from "./VStack";

const AppScreenWrapper = ({isDesktop, isTop = true, children}) => {
    const horizontalPadding = isDesktop ? '60px' : '16px';
    const verticalPadding = isDesktop
        ? isTop
            ? '32px'
            : '60px'
        : isTop
            ? '28px'
            : '60px';
    return (
        <VStack alignItems={'center'} sx={{
            width: '100%',
            paddingLeft: horizontalPadding,
            paddingRight: horizontalPadding,
            paddingTop: verticalPadding,
            paddingBottom: verticalPadding,
        }}>
            {isDesktop ? (
                <VStack sx={{
                    maxWidth: '840px',
                }}>
                    {children}
                </VStack>
            ) : (
                children
            )}
        </VStack>
    )
}

export default AppScreenWrapper;
