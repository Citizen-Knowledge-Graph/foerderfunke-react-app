import React from 'react';
import {VBox} from "./LayoutBoxes";
import HeaderBar from "../screens/landing-page/sections/header/HeaderBar";
import {useStore} from "./ViewportUpdater";

const Layout = ({children, isApp = false, logo = true, back = null, gap = 2}) => {
    const isDesktop = useStore((state) => state.isDesktop);

    return (
        <VBox gap={0}>
            <HeaderBar isDesktop={isDesktop} isApp={isApp} logo={logo} back={back}/>
            <VBox data-testid={'layout-container'}>
                <VBox gap={gap} sx={styles.contentContainerStyle} data-testid="main-parent container" alignItems={'center'}>
                    {children}
                </VBox>
            </VBox>
        </VBox>
    )
};

const styles = {
    contentContainerStyle: {
        width: '100%',
    }
}

export default Layout;
