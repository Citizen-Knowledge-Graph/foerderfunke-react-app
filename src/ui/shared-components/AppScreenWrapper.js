import React from "react";
import VStack from "./VStack";
import AppScreenHeader from "./AppScreenHeader";
import globalStyles from "../styles/styles";
import { useStore } from "../shared-components/ViewportUpdater";

const AppScreenWrapper = ({children, back = false, home = true}) => {
    const isDesktop = useStore((state) => state.isDesktop);
    const horizontalPadding = isDesktop ? '20px' : '16px';
    const verticalPadding = isDesktop ? '20px' : '16px';
    const desktopGradient = isDesktop ? `linear-gradient(
                        to bottom,
                            ${globalStyles.primaryColor}33 0%,
                            ${globalStyles.primaryColor}99 100%)` : 'none';
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
                    {children}
                    <AppScreenHeader back={back} home={home}/>
                </VStack>
            ) : (
                <>
                    {children}
                    <AppScreenHeader back={back} home={home}/>
                </>
            )}
        </VStack>
    )
}

export default AppScreenWrapper;
