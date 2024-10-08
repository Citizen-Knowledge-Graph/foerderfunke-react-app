import React from "react";
import {Typography} from "@mui/material";
import VStack from "../../../../../components/VStack";
import HStack from "../../../../../components/HStack";
import Divider from "@mui/material/Divider";
import LandingPageWAppButton from "../../../components/LandingPageWAppButton";
import NarBarLink from "../../../../../components/NavBarLink";
import EmailLink from "../../../../../components/EmailLink";
import LinkedInLink from "../../../../../components/LinkedInLink";
import LogoBar from "../../../../../components/LogoBar";
import GitHubLink from "../../../../../components/GitHubLink";
import FeatureToggle from "../components/FeatureToggle";
import useTranslation from "../../../../../language/useTranslation";

const LandingPageFooterDesktop = () => {
    const { t } = useTranslation();

    return (
        <VStack>
            <HStack justifyContent={'space-between'} alignItems={'center'}>
                <LogoBar/>
                <HStack gap={3} justifyContent={'center'} alignItems={'center'}>
                    <NarBarLink to={"/#how-it-works"} title={t('home.menu.howWorks')}/>
                    <NarBarLink to={"/#principles"} title={t('home.menu.principles')}/>
                    <NarBarLink to={"/#about-us"} title={t('home.menu.aboutUs')}/>
                    <LandingPageWAppButton backgroundColor={'secondary'}/>
                </HStack>
            </HStack>
            <Divider variant="middle" sx={{borderBottomWidth: '2px'}}/>
            <HStack justifyContent={'space-between'} alignItems={'center'}>
                <HStack>
                    <EmailLink email={'info@foerderfunke.org'}/>
                    <LinkedInLink linkedin={'https://www.linkedin.com/company/foerderfunke'}/>
                    <GitHubLink href={"https://github.com/Citizen-Knowledge-Graph"}/>
                </HStack>
                <HStack>
                    <Typography sx={styles.copyrightText}>
                        © 2024 by FörderFunke. All rights reserved.
                        <br/>
                        Degenhart, Espinosa, Gläser - FörderFuchs GbR,
                        c/o Impact Hub Berlin,
                        Rollbergstraße 28A,
                        12053 Berlin
                    </Typography>
                </HStack>
                <VStack>
                    <FeatureToggle/>
                </VStack>
            </HStack>
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
        fontSize: '16px',
    }
}

export default LandingPageFooterDesktop;
