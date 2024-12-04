import React from "react";
import {Typography} from "@mui/material";
import VStack from "../../../../../shared-components/VStack";
import HStack from "../../../../../shared-components/HStack";
import Divider from "@mui/material/Divider";
import LandingPageWAppButton from "../../../components/LandingPageWAppButton";
import EmailLink from "../../../../../shared-components/EmailLink";
import LinkedInLink from "../../../../../shared-components/LinkedInLink";
import LogoBar from "../../../../../shared-components/LogoBar";
import GitHubLink from "../../../../../shared-components/GitHubLink";
import FeatureToggle from "../components/FeatureToggle";

const LandingPageFooterDesktop = () => {

    return (
        <VStack>
            <HStack justifyContent={'space-between'} alignItems={'center'}>
                <LogoBar/>
                <HStack gap={3} justifyContent={'center'} alignItems={'center'}>
                    <LandingPageWAppButton />
                </HStack>
            </HStack>
            <Divider variant="middle" sx={{borderBottomWidth: '2px'}}/>
            <HStack justifyContent={'space-between'} alignItems={'center'}>
                <HStack sx={{flex: 1}}>
                    <EmailLink email={'info@foerderfunke.org'}/>
                    <LinkedInLink linkedin={'https://www.linkedin.com/company/foerderfunke'}/>
                    <GitHubLink href={"https://github.com/Citizen-Knowledge-Graph"}/>
                </HStack>
                <HStack sx={{flex: 1}}>
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
                </HStack>
                <HStack justifyContent={'flex-end'} sx={{flex: 1}}>
                    <VStack>
                        <FeatureToggle/>
                    </VStack>
                </HStack>
            </HStack>
        </VStack>
    );
}

const styles = {
    navbarItemText: {
        fontSize: '18px',
    },
    copyrightText: {
        fontSize: '14px'
    },
    bottomElement:  {
        width: '40%',
    }
}

export default LandingPageFooterDesktop;
