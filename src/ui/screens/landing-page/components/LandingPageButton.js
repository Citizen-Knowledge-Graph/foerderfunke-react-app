import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const LandingPageHollowButton = ({ text, to }) => {

    return (
        <Button variant="text"
            component={Link}
            to={to}>{text}</Button>
    );
}


export default LandingPageHollowButton;
