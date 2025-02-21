import React from "react";
import HeaderBarMobile from "./views/HeaderBarMobile";
import HeaderBarDesktop from "./views/HeaderBarDesktop";
import VStack from "../../../../shared-components/VStack";

const HeaderBar = ({ isApp, isDesktop }) => {
    return (
        <VStack sx={{
            zIndex: 1000,
            position: 'sticky',
            top: 0,
            transition: 'opacity 0.5s ease',
            opacity: 1,
        }}>
            {isDesktop ? <HeaderBarDesktop isApp={isApp} /> : <HeaderBarMobile isApp={isApp} />}
        </VStack>
    );
}

export default HeaderBar;