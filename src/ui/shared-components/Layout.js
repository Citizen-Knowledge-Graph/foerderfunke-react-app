import React from 'react';
import {VBox} from "./LayoutBoxes";
import HeaderBar from "../screens/landing-page/sections/header/HeaderBar";
import {useStore} from "./ViewportUpdater";

const Layout = ({children, isApp = false, logo = true, back = null, gap = 2}) => {
    const isDesktop = useStore((state) => state.isDesktop);
    const backgroundColor = isApp ? 'blue.dark' : 'transparent';
    const minHeight = isApp ? '100vh' : 'auto';    

    return (
        <VBox gap={0} sx={{backgroundColor: backgroundColor, minHeight: minHeight}}>
            <HeaderBar isApp={isApp} isDesktop={isDesktop} logo={logo} back={back}/>
            <VBox data-testid={'layout-container'}>
                <VBox gap={gap} sx={{ width: '100%'}} data-testid="main-parent container" alignItems={'center'}>
                    {children}
                </VBox>
            </VBox>
        </VBox>
    )
};

export default Layout;
