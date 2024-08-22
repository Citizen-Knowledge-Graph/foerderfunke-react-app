import React from "react";
import VStack from "./VStack";
import AppScreenHeader from "./AppScreenHeader";

const AppScreenWrapper = ({isDesktop, isTop = true, children, back=false}) => {
    const horizontalPadding = isDesktop ? '60px' : '30px';
    const verticalPadding = isDesktop
        ? isTop
            ? '32px'
            : '60px'
        : isTop
            ? '16px'
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
                    width: '780px',
                }}>
                    {back && <AppScreenHeader/>}
                    {children}
                </VStack>
            ) : (
                <>
                    {back && <AppScreenHeader/>}
                    {children}
                </>
            )}
        </VStack>
    )
}

export default AppScreenWrapper;
