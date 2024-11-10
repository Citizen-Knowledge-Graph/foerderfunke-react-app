import React from "react";
import VStack from "./VStack";
import AppScreenHeader from "./AppScreenHeader";
import globalStyles from "../styles/styles";

const AppScreenWrapper = ({isDesktop, children, back = false}) => {
    const horizontalPadding = isDesktop ? '15px' : '16px';
    const verticalPadding = isDesktop ? '15px' : '16px';
    const desktopGradient = isDesktop ? `linear-gradient(
                        to bottom,
                            ${globalStyles.primaryColor}33 0%,
                            ${globalStyles.primaryColor}80 100%)` : 'none';
    return (
        <VStack alignItems={'center'} sx={{
            paddingLeft: horizontalPadding,
            paddingRight: horizontalPadding,
            paddingTop: verticalPadding,
            paddingBottom: verticalPadding,
            borderRadius: '4px',
            minHeight: '100%',
            boxSizing: 'border-box',
            background: desktopGradient
        }}>
            {isDesktop ? (
                <VStack sx={{
                    width: '840px',
                    padding: '32px',
                    backgroundColor: 'white'
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
