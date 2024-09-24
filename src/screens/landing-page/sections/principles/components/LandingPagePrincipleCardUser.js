import React from "react";
import FaceIcon from "@mui/icons-material/Face";
import LandingPagePrincipleCard from "./LandingPagePrincipleCard";
import useTranslation from "../../../../../language/useTranslation";

const LandingPagePrincipleCardUser = ({isDesktop}) => {
    const { t } = useTranslation();

    const title = t('principles.part3Header');
    const text = t('principles.part3Text');
    const icon = FaceIcon;
    const gif = 'user-centered';

    return (
        <LandingPagePrincipleCard isDesktop={isDesktop} icon={icon} gif={gif} title={title} text={text} gifFirst={false}/>
    )
}

export default LandingPagePrincipleCardUser;
