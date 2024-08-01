import React from "react";
import HStack from "../../../../../components/HStack";
import LandingPagePrincipleCardData from '../components/LandingPagePrincipleCardData';
import LandingPagePrincipleCardPrivacy from '../components/LandingPagePrincipleCardPrivacy';
import LandingPagePrincipleCardUser from "../components/LandingPagePrincipleCardUser";

const LandingPagePrinciplesDesktop = () => {
    return (
        <HStack justifyContent={'center'} sx={{width: '100%'}}>
            <LandingPagePrincipleCardData isDesktop={true}/>
            <LandingPagePrincipleCardPrivacy isDesktop={true}/>
            <LandingPagePrincipleCardUser isDesktop={true}/>
        </HStack>
    );
}

export default LandingPagePrinciplesDesktop;
