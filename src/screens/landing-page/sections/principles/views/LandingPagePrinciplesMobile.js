import React from "react";
import VStack from "../../../../../components/VStack";
import LandingPagePrincipleCardData from "../components/LandingPagePrincipleCardData";
import LandingPagePrincipleCardPrivacy from "../components/LandingPagePrincipleCardPrivacy";
import LandingPagePrincipleCardUser from "../components/LandingPagePrincipleCardUser";

const LandingPagePrinciplesMobile = () => {
    return (
        <VStack gap={5}>
            <VStack justifyContent={'center'} sx={{width: '100%'}}>
                <LandingPagePrincipleCardData/>
                <LandingPagePrincipleCardPrivacy/>
                <LandingPagePrincipleCardUser />
            </VStack>
        </VStack>
    );
}

export default LandingPagePrinciplesMobile;
