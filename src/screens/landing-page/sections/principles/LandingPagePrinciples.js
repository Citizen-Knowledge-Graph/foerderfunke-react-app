import React from "react";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";
import LandingPageSectionGrid from "../../components/LandingPageSectionGrid";
import VStack from "../../../../components/VStack";
import LandingPagePrincipleCardData from "./components/LandingPagePrincipleCardData";
import LandingPagePrincipleCardPrivacy from "./components/LandingPagePrincipleCardPrivacy";
import LandingPagePrincipleCardUser from "./components/LandingPagePrincipleCardUser";

const LandingPagePrinciples = ({isDesktop}) => {
    return (
        <LandingPageSectionWrapper isDesktop={isDesktop}>
            <LandingPageSectionGrid title={'Our principles'}>
                <VStack gap={5}>
                    <VStack gap={7} justifyContent={'center'} sx={{width: '100%'}}>
                        <LandingPagePrincipleCardData isDesktop={isDesktop} gifFirst={false}/>
                        <LandingPagePrincipleCardPrivacy isDesktop={isDesktop}/>
                        <LandingPagePrincipleCardUser isDesktop={isDesktop}/>
                    </VStack>
                </VStack>
            </LandingPageSectionGrid>
        </LandingPageSectionWrapper>
    );
}

export default LandingPagePrinciples;
