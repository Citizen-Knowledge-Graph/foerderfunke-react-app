import React from "react";
import { VBox } from "./LayoutBoxes";
import { useStore } from "@/ui/shared-components/ViewportUpdater";
import theme from "@/theme";
import { CircularProgress } from '@mui/material';

const AppScreenWrapper = ({ children, isLoading}) => {
    const isDesktop = useStore((state) => state.isDesktop);
    const width = isDesktop ? "calc(100% - 192px)" : "calc(100% - 48px)";
    const padding = isDesktop ? "96px 108px" : "32px 24px";
    const margin = isDesktop ? "0px 96px 96px 96px" : "0px 24px 24px 24px";

    if (isLoading) {
        return (
            <VBox alignItems="center" justifyContent="center" sx={{ minHeight: '50vh' }}>
                <CircularProgress size={32} />
            </VBox>
        );
    }

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
