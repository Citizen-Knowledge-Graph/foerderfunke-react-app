import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import theme from "../../../../theme";

const LandingPageHollowButtonDesktop = ({ isApp, text, to }) => {
    const isAppStyle = isApp ? {
        color: theme.palette.white.main,
        backgroundColor: "transparent",
        "&:hover": {
            color: theme.palette.blue.dark,
            backgroundColor: theme.palette.white.main,
        }
    } : {};

    return (
        <Button 
            variant="text"
            component={Link}
            sx={isAppStyle}
            to={to}>
                {text}
        </Button>
    );
}


export default LandingPageHollowButtonDesktop;
