import React from "react";
import VStack from "../../../../../components/VStack";
import LogoBar from "../../../../../components/LogoBar";
import EmailLink from "../../../../../components/EmailLink";
import LinkedInLink from "../../../../../components/LinkedInLink";
import Divider from "@mui/material/Divider";
import {Typography} from "@mui/material";
import NarBarLink from "../../../../../components/NavBarLink";
import LandingPageWAppButton from "../../../components/LandingPageWAppButton";

const LandingPageFooterMobile = () => {
    return (
        <VStack>
            <VStack alignItems={'center'}>
                <LogoBar size={'small'}/>
                <VStack gap={2}>
                    <EmailLink email={'info@foerderfunke.org'}/>
                    <LinkedInLink profileUrl={'https://www.linkedin.com/company/foerderfunke'}/>
                </VStack>
            </VStack>
            <Divider variant="middle" sx={{borderBottomWidth: '2px'}}/>
            <VStack alignItems={'center'}>
                <Typography sx={styles.navbarItemText}>
                    Impressum
                </Typography>
                <NarBarLink to={"/#how-it-works"} title={'How it works'}/>
                <NarBarLink to={"/#principles"} title={'Principles'}/>
                <NarBarLink to={"/#about-us"} title={'About us'}/>
                <LandingPageWAppButton backgroundColor={'secondary'}/>
                <Typography sx={styles.copyrightText}>
                    ©  2024 by FörderFunke. All rights reserved.
                </Typography>
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
    }
}

export default LandingPageFooterMobile;
