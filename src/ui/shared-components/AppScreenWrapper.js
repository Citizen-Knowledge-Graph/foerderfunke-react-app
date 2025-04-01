import React from "react";
import { VBox } from "./LayoutBoxes";
import theme from "@/theme";
import { CircularProgress } from '@mui/material';

const AppScreenWrapper = ({ children, isLoading}) => {

    return (
        <VBox sx={{
            alignItems: 'center',
            minHeight: '100%',
            width: {
                xs: 'calc(100% - 48px)',
                md: 'calc(100% - 192px)',
            },
            backgroundColor: 'greyTransparent.main',
            borderRadius: theme.shape.borderRadius,
            padding: {
                xs: '32px 24px',
                md: '96px 108px',
            },
            boxSizing: "border-box",
            margin: {
                xs: '0px 24px 24px 24px',
                md: '0px 96px 96px 96px',
            },
        }}>
            {
                isLoading ? (
                    <VBox alignItems="center" justifyContent="center" sx={{ minHeight: '50vh' }}>
                        <CircularProgress size={32} />
                    </VBox>
                ) : (
                    <VBox sx={{ width: '100%', boxSizing: "border-box" }}>
                        {children}
                    </VBox>
                )
            }
        </VBox>
    )

}

export default AppScreenWrapper;
