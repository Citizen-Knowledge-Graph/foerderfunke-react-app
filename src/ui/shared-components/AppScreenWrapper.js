import React from "react";
import { VBox } from "./LayoutBoxes";
//import AppScreenHeader from "./AppScreenHeader";
import { useStore } from "../shared-components/ViewportUpdater";
import theme from "../../theme";

const AppScreenWrapper = ({ children, back = false, home = true }) => {
    const isDesktop = useStore((state) => state.isDesktop);
    const width = isDesktop ? "calc(100% - 192px)" : "calc(100% - 48px)";
    const padding = isDesktop ? "96px 108px" : "32px 24px";
    const margin = isDesktop ? "0px 96px 96px 96px" : "0px 24px 24px 24px";

    return (
        <VBox sx={{
            alignItems: 'center',
            minHeight: '100%',
            width: width,
            backgroundColor: `${theme.palette.greyTransparent.main}`,
            borderRadius: theme.shape.borderRadius,
            padding: padding,
            boxSizing: "border-box",
            margin: margin,
        }}>
            <VBox sx={{ width: '100%', boxSizing: "border-box" }}>
                {children}
            </VBox>
        </VBox>
    )

}

export default AppScreenWrapper;
