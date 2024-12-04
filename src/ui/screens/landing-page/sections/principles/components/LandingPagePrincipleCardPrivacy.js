import React from "react";
import SecurityIcon from "@mui/icons-material/Security";
import LandingPagePrincipleCard from "./LandingPagePrincipleCard";
import useTranslation from "../../../../../language/useTranslation";

const LandingPagePrincipleCardPrivacy = ({isDesktop}) => {
    const { t } = useTranslation();

    const title = t('home.principles.part2Header');
    const text = t('home.principles.part2Text');
    const icon = SecurityIcon;
    const gif = 'open-data';

    return (
        <LandingPagePrincipleCard isDesktop={isDesktop} icon={icon} gif={gif} title={title} text={text}/>
    )
}

export default LandingPagePrincipleCardPrivacy;
