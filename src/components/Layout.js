import React from 'react';
import VStack from "./VStack";
import HeaderBar from "../screens/landing-page/sections/header/HeaderBar";
import {useStore} from "./ViewportUpdater";

const Layout = ({children, logo = true, back = null}) => {
    const isDesktop = useStore((state) => state.isDesktop);

    return (
        <VStack data-testid={'layout-container'}>
            <HeaderBar isDesktop={isDesktop} logo={logo} back={back}/>
            <VStack sx={styles.contentContainerStyle} data-testid="main-parent container">
                {children}
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
