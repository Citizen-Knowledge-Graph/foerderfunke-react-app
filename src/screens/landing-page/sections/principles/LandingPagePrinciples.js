import React from "react";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";
import LandingPagePrinciplesDesktop from "./views/LandingPagePrinciplesDesktop";
import LandingPagePrinciplesMobile from "./views/LandingPagePrinciplesMobile";
import globalStyles from "../../../../styles/styles";
import VStack from "../../../../components/VStack";
import LandingPageSectionTitle from "../../components/LandingPageSectionTitle";

const LandingPagePrinciples = ({isDesktop}) => {
    return (
        <LandingPageSectionWrapper backgroundColor={globalStyles.primaryColor} isDesktop={isDesktop}>
            <VStack gap={5}>
                <LandingPageSectionTitle title={'Our principles'}/>
                {isDesktop ? <LandingPagePrinciplesDesktop/> : <LandingPagePrinciplesMobile/>}
            </VStack>
        </LandingPageSectionWrapper>
    );
}

export default LandingPagePrinciples;
