import React from "react";
import FaceIcon from "@mui/icons-material/Face";
import LandingPagePrincipleCard from "./LandingPagePrincipleCard";

const LandingPagePrincipleCardUser = ({isDesktop}) => {
    const title = 'User Centric Design';
    const text = 'We work in a user-centered and iterative way. We talk with users and constantly improve our ' +
        'product so that it is easy to use, understandable and accessible.';
    const icon = FaceIcon;
    const gif = 'user-centered';

    return (
        <LandingPagePrincipleCard isDesktop={isDesktop} icon={icon} gif={gif} title={title} text={text}/>
    )
}

export default LandingPagePrincipleCardUser;
