import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import useTranslation from "../../../language/useTranslation";

const LandingPageWAppButton = () => {
    const { t } = useTranslation();
    
    return (
        <Button variant="outlined"
            component={Link}
            to="/user-routing">{t('home.global.actionButton')}</Button>
    );
}

export default LandingPageWAppButton;
