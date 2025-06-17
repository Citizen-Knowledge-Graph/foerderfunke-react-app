import React from "react";
import { HBox, VBox } from "@/ui/shared-components/LayoutBoxes";
import EmailLink from "@/ui/shared-components/EmailLink";
import LinkedInLink from "@/ui/shared-components/LinkedInLink";
import LogoBar from "@/ui/shared-components/LogoBar";
import GitHubLink from "@/ui/shared-components/GitHubLink";
import FeatureToggle from "../components/FeatureToggle";
import RegularButton from "@/ui/shared-components/buttons/RegularButton";

const LandingPageFooterDesktop = () => {

    return (
        <VBox sx={{
            backgroundColor: 'pink.main',
            paddingTop: '104px',
            paddingBottom: '52px',
            paddingLeft: '96px',
            paddingRight: '96px',
            alignItems: 'center',
            gap: 10,
        }}>
            <HBox sx={{ width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                <LogoBar />
                <HBox>
                    <EmailLink email={'info@foerderfunke.org'} />
                    <LinkedInLink linkedin={'https://www.linkedin.com/company/foerderfunke'} />
                    <GitHubLink href={"https://github.com/Citizen-Knowledge-Graph"} />
                    <FeatureToggle />
                </HBox>
            </HBox>
            <HBox justifyContent={'center'} alignItems={'center'}>
                <HBox sx={{ width: '506px', justifyContent: 'center' }}>
                    <RegularButton link='/impressum' variant='pinkContained' text='Impressum' size='small' />
                    <RegularButton variant='pinkContained' text='Datenschutz' size='small' />
                </HBox>
            </HBox>
        </VBox>
    );
}

export default LandingPageFooterDesktop;