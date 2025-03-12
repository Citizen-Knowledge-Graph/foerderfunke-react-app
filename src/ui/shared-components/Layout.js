import React from 'react';
import {VBox} from "./LayoutBoxes";
import HeaderBar from "../screens/landing-page/sections/header/HeaderBar";
import {useStore} from "./ViewportUpdater";
//import theme from "../../theme";

const Layout = ({children, isApp = false, logo = true, back = null, gap = 2}) => {
    const isDesktop = useStore((state) => state.isDesktop);
    const backgroundColor = 'transparent';
    const minHeight = isApp ? '100vh' : 'auto';    

    return (
        <VBox gap={0} sx={{backgroundColor: backgroundColor, minHeight: minHeight}}>
            <HeaderBar isApp={false} isDesktop={isDesktop} logo={logo} back={back}/>
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
