import React from "react";
import LandingPagePrincipleCardData from '../components/LandingPagePrincipleCardData';
import LandingPagePrincipleCardPrivacy from '../components/LandingPagePrincipleCardPrivacy';
import LandingPagePrincipleCardUser from "../components/LandingPagePrincipleCardUser";
import VStack from "../../../../../components/VStack";

const LandingPagePrinciplesDesktop = () => {
    return (
        <VStack gap={5}>
            <VStack gap={7} justifyContent={'center'} sx={{width: '100%'}}>
                <LandingPagePrincipleCardData isDesktop={true} gifFirst={false}/>
                <LandingPagePrincipleCardPrivacy isDesktop={true}/>
                <LandingPagePrincipleCardUser isDesktop={true}/>
            </VStack>
        </VStack>
    );
}

export default LandingPagePrinciplesDesktop;
