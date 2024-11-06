import React from "react";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";
import useTranslation from "../../../../language/useTranslation";
import LandingPageSectionGrid from "../../components/LandingPageSectionGrid";
import LandingPageSupportCard from "./components/LandingPageSupportCard";
import LandingPageSupportCardNGI from "./components/LandingPageSupportCardNGI";

const LandingPageFunding = ({isDesktop}) => {
    const {t} = useTranslation();

    return (
        <LandingPageSectionWrapper isDesktop={isDesktop}>
            <LandingPageSectionGrid title={t('home.funding.header')}>
                <LandingPageSupportCardNGI isDesktop={isDesktop}/>
                <LandingPageSupportCard isDesktop={isDesktop}/>
            </LandingPageSectionGrid>
        </LandingPageSectionWrapper>
    );
}

export default LandingPageFunding;
