import React from "react";
import OpenWithIcon from "@mui/icons-material/OpenWith";
import LandingPagePrincipleCard from "./LandingPagePrincipleCard";
import useTranslation from "../../../../../language/useTranslation";

const LandingPagePrincipleCardData = ({isDesktop}) => {
    const { t } = useTranslation();

    const title = t('home.principles.part1Header');
    const text = t('home.principles.part1Text');
    const icon = OpenWithIcon;
    const gif = 'privacy-by-design';

    return (
        <LandingPagePrincipleCard isDesktop={isDesktop} icon={icon} gif={gif} title={title} text={text} gifFirst={false}/>
    )
}

export default LandingPagePrincipleCardData;
