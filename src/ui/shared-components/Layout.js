import React from 'react';
import VStack from "./VStack";
import HeaderBar from "../screens/landing-page/sections/header/HeaderBar";
import {useStore} from "./ViewportUpdater";

const Layout = ({children, isApp = false, logo = true, back = null, gap = 2}) => {
    const isDesktop = useStore((state) => state.isDesktop);

    return (
        <VStack gap={0}>
            <HeaderBar isDesktop={isDesktop} isApp={isApp} logo={logo} back={back}/>
            <VStack data-testid={'layout-container'}>
                <VStack gap={gap} sx={styles.contentContainerStyle} data-testid="main-parent container" alignItems={'center'}>
                    {children}
                </VStack>
            </VStack>
        </VStack>
    )
};

const styles = {
    contentContainerStyle: {
        width: '100%',
    }
}

export default Layout;
