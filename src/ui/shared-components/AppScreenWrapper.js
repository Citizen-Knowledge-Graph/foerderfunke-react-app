import React from "react";
import { VBox } from "./LayoutBoxes";
import AppScreenHeader from "./AppScreenHeader";
import { useStore } from "../shared-components/ViewportUpdater";
import theme from "../../theme";

const AppScreenWrapper = ({ children, back = false, home = true }) => {
    const isDesktop = useStore((state) => state.isDesktop);
    const desktopGradient = theme.palette.yellow.main;
    return (
        <VBox sx={{
            alignItems: 'center',
            minHeight: '100%',
            width: '100%',
        }}>
            {isDesktop ? (
                <VBox sx={{
                    width: '840px',
                    padding: theme.spacing(1),
                    background: desktopGradient,
                    borderRadius: theme.shape.borderRadius
                }}>
                    <VBox sx={{ 
                        padding: theme.spacing(4), 
                        backgroundColor: theme.palette.white.main,
                        borderRadius: theme.shape.borderRadius}}>
                        {children}
                        <AppScreenHeader back={back} home={home} />
                    </VBox>
                </VBox>
            ) : (
                <VBox sx={{
                    width: '100%', boxSizing: "border-box",
                    padding: theme.spacing(2)
                }}>
                    {children}
                    <AppScreenHeader back={back} home={home} />
                </VBox>
            )}
        </VBox>
    )
}

export default AppScreenWrapper;
