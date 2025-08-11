import React from "react";
import { VBox } from "@/ui/shared-components/LayoutBoxes";
import EmailLink from "@/ui/shared-components/EmailLink";
import LinkedInLink from "@/ui/shared-components/LinkedInLink";
import LogoBar from "@/ui/shared-components/LogoBar";
import GitHubLink from "@/ui/shared-components/GitHubLink";
import theme from "@/theme";
import RegularButton from "@/ui/shared-components/buttons/RegularButton";
import useTranslation from "@/ui/language/useTranslation";
import FeatureToggle from "@/ui/screens/landing-page/sections/footer/components/FeatureToggle";

const LandingPageFooterMobile = () => {
    const { t } = useTranslation();

    return (
        <VBox sx={{
            backgroundColor: theme.palette.pink.main,
            padding: '64px 24px',
            gap: 10,
        }}>
            <VBox sx={{
                gap: 4,
                width: '100%',
                alignItems: 'flex-start'
            }}>
                <LogoBar />
                <VBox>
                    <EmailLink email={'info@foerderfunke.org'} />
                    <LinkedInLink linkedin={'https://www.linkedin.com/company/foerderfunke'} />
                    <GitHubLink href={"https://github.com/Citizen-Knowledge-Graph"} />
                    <FeatureToggle />
                </VBox>
            </VBox>
            <VBox>
                <RegularButton link='/impressum' variant='pinkContained' text={t("home.legal.impressum.title")} size='small' />
                <RegularButton link='/data-protection' variant='pinkContained' text={t("home.legal.dataProtection.title")} size='small' />
            </VBox>
        </VBox>
    );
}

export default LandingPageFooterMobile;
