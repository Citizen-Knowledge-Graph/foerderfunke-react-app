import React from "react";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import useTranslation from "../../../language/useTranslation";

const LandingPageWAppButton = () => {
    const { t } = useTranslation();

    return (
        <Button variant="outlined"
            component={Link}
            to="/user-routing"
            sx={{
                "&:hover": {
                    color: "white !important",
                },
            }}>
            <Typography sx={{
                fontWeight: 400,
                color: "inherit",
            }} variant="h6">{t('home.global.actionButton')}</Typography>
        </Button>
    );
}

export default LandingPageWAppButton;
