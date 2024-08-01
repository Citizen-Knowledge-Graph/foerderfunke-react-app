import React from "react";
import OpenWithIcon from "@mui/icons-material/OpenWith";
import LandingPagePrincipleCard from "./LandingPagePrincipleCard";

const LandingPagePrincipleCardData = ({isDesktop}) => {
    const title = 'Privacy By Design';
    const text = 'It is important to us that you maintain control over your data. That\'s why your data ' +
        'remains encrypted on your end device.';
    const icon = OpenWithIcon;

    return (
        <LandingPagePrincipleCard isDesktop={isDesktop} icon={icon} title={title} text={text}/>
    )
}

export default LandingPagePrincipleCardData;
