import React from "react";
import HeaderBarMobile from "./views/HeaderBarMobile";
import HeaderBarDesktop from "./views/HeaderBarDesktop";
import { VBox } from "@/ui/shared-components/LayoutBoxes";

const HeaderBar = ({ isApp, isDesktop, runway }) => {
    const backgroundColor = isApp ? 'blue.dark' : 'white.main';
    const sticky = isApp ? "relative" : "sticky";

    return (
        <VBox
            sx={{
                zIndex: 1000,
                position: sticky,
                top: 0,
                left: 0,
                right: 0,
                width: "100%",
                backgroundColor: backgroundColor
            }}
        >
            {isDesktop ? <HeaderBarDesktop isApp={isApp} runway={runway} /> : <HeaderBarMobile isApp={isApp} runway={runway} />}
        </VBox>
    );
};

export default HeaderBar;