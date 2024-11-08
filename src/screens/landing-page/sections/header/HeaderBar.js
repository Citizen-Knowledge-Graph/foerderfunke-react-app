import React from "react";
import HeaderBarMobile from "./views/HeaderBarMobile";
import HeaderBarDesktop from "./views/HeaderBarDesktop";
import VStack from "../../../../components/VStack";

const HeaderBar = ({isApp, isDesktop}) => {
    const horizontalPadding = isDesktop ? '60px' : '16px';

    return (
        <VStack sx={{
            paddingLeft: horizontalPadding,
            paddingRight: horizontalPadding,
            paddingTop: '16px',
            paddingBottom: '16px'
        }}>
            {isDesktop ? <HeaderBarDesktop isApp={isApp}/> : <HeaderBarMobile isApp={isApp}/>}
        </VStack>
    )
}

export default HeaderBar;
