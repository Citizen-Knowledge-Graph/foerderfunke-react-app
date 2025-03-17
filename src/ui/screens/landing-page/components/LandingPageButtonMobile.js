import React from "react";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const LandingPageHollowButtonMobile = ({ setShowDropdown, text, to, isApp }) => {
    const color = isApp ? 'white.main' : 'black.main';
    const backgroundColor = isApp ? 'transparent' : 'white.main';

    return (
        <Button variant="text"
            sx={{
                padding: '0px',
                backgroundColor: backgroundColor,
                '&:hover': {
                    backgroundColor: 'transparent',
                    color: 'black.main',
                }
            }}
            component={Link}
            to={to}
            onClick={() => setShowDropdown(false)}>
            <Typography variant="h1" sx={{ color: color }}>
                {text}
            </Typography>
        </Button>
    );
}


export default LandingPageHollowButtonMobile;
