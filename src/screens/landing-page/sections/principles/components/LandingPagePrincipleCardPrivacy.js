import React from "react";
import SecurityIcon from "@mui/icons-material/Security";
import LandingPagePrincipleCard from "./LandingPagePrincipleCard";

const LandingPagePrincipleCardPrivacy = ({isDesktop}) => {
    const title = 'Open Data';
    const text = 'Important information for citizens about their benefits is all too often difficult to find. We ' +
        'make our catalogue of conditions for social benefits publicly available.';
    const icon = SecurityIcon;
    const gif = 'open-data';

    return (
        <LandingPagePrincipleCard isDesktop={isDesktop} icon={icon} gif={gif} title={title} text={text}/>
    )
}

export default LandingPagePrincipleCardPrivacy;
