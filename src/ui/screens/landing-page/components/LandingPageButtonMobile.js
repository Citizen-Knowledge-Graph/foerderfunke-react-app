import React from "react";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import theme from "../../../../theme";

const LandingPageHollowButton = ({ text, to }) => {

    return (
        <Button variant="text"
            sx={{ padding: '0px' }}
            component={Link}
            to={to}>
            <Typography variant="h1" sx={{ color: theme.palette.black.main }}>
                {text}
            </Typography>
        </Button>
    );
}


export default LandingPageHollowButton;
