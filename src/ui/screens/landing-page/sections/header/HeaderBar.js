import React from "react";
import HeaderBarMobile from "./views/HeaderBarMobile";
import HeaderBarDesktop from "./views/HeaderBarDesktop";
import { VBox } from "../../../../shared-components/LayoutBoxes";
import theme from "../../../../../theme";

const HeaderBar = ({ isApp, isDesktop }) => {
    return (
        <VBox
            sx={{
                zIndex: 1000,
                position: "sticky",
                top: 0,
                left: 0,
                right: 0,
                width: "100%",
                backgroundColor: theme.palette.white.main,
            }}
        >
            {isDesktop ? <HeaderBarDesktop isApp={isApp} /> : <HeaderBarMobile isApp={isApp} />}
        </VBox>
    );
};

export default HeaderBar;