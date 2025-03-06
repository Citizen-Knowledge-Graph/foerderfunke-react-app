import React from "react";
import { VBox } from "./LayoutBoxes";
import AppScreenHeader from "./AppScreenHeader";
import { useStore } from "../shared-components/ViewportUpdater";
import theme from "../../theme";

const AppScreenWrapper = ({ children, back = false, home = true }) => {
    const isDesktop = useStore((state) => state.isDesktop);

    if (isDesktop) {
        return (
            <VBox sx={{
                alignItems: 'center',
                minHeight: '100%',
                width: "calc(100% - 192px)",
                backgroundColor: `${theme.palette.greyTransparent.main}`,
                borderRadius: theme.shape.borderRadius,
                padding: "96px 108px",
                boxSizing: "border-box",
                margin: "0px 96px",
            }}>
                {children}
            </VBox>
        )

    } else {
        return (
            <VBox sx={{
                width: '100%', boxSizing: "border-box",
                padding: theme.spacing(2)
            }}>
                {children}
                <AppScreenHeader back={back} home={home} />
            </VBox>
        )
    }
}

export default AppScreenWrapper;
