import React from "react";
import TemplateViewHeader from "./TemplateViewHeader";
import {useNavigate} from "react-router-dom";

const AppScreenHeader = () => {
    const navigate = useNavigate();

    return (
        <TemplateViewHeader onClick={() => navigate(-1)} />
    );
}

export default AppScreenHeader;
