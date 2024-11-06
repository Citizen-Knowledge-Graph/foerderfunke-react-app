import React from "react";
import VStack from "../../../../../components/VStack";
import LogoBar from "../../../../../components/LogoBar";
import EmailLink from "../../../../../components/EmailLink";
import LinkedInLink from "../../../../../components/LinkedInLink";
import Divider from "@mui/material/Divider";
import {Typography} from "@mui/material";
import NarBarLink from "../../../../../components/NavBarLink";
import LandingPageWAppButton from "../../../components/LandingPageWAppButton";
import GitHubLink from "../../../../../components/GitHubLink";
import FeatureToggle from "../components/FeatureToggle";
import useTranslation from "../../../../../language/useTranslation";

const LandingPageFooterMobile = () => {
    const { t } = useTranslation();

    return (
        <VStack>
            <VStack alignItems={'center'}>
                <LogoBar size={'small'}/>
                <VStack gap={2} alignItems={'center'}>
                    <EmailLink email={'info@foerderfunke.org'}/>
                    <LinkedInLink linkedin={'https://www.linkedin.com/company/foerderfunke'}/>
                    <GitHubLink href={"https://github.com/Citizen-Knowledge-Graph"}/>
                </VStack>
            </VStack>
            <Divider variant="middle" sx={{borderBottomWidth: '2px'}}/>
            <VStack alignItems={'center'}>
                <LandingPageWAppButton backgroundColor={'secondary'}/>
                <Typography sx={styles.copyrightText}>
                    © 2024 by FörderFunke. All rights reserved.
                    <br/>
                    FörderFunke UG (haftungsbeschränkt),
                    c/o Impact Hub Berlin,
                    Rollbergstraße 28A,
                    12053 Berlin,
                    USt-IdNr.: DE369936723,
                    Geschäftsführung: Benjamin Degenhart & Ben Gläser,
                    Handelsregisternummer: HRB 267043 B,
                    Amtsgericht Charlottenburg
                </Typography>
                <FeatureToggle/>
            </VStack>
        </VStack>
    );
}

const styles = {
    navbarItemText: {
        fontSize: '18px',
    },
    navbarLink: {
        textDecoration: 'none',
        color: 'inherit'
    },
    copyrightText: {
        fontSize: '12px',
        textAlign: 'center'
    }
}

export default LandingPageFooterMobile;
