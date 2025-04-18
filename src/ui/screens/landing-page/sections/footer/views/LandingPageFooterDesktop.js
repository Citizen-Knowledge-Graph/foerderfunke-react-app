import React from "react";
import {Typography} from "@mui/material";
import {HBox, VBox} from "../../../../../shared-components/LayoutBoxes";
import EmailLink from "../../../../../shared-components/EmailLink";
import LinkedInLink from "../../../../../shared-components/LinkedInLink";
import LogoBar from "../../../../../shared-components/LogoBar";
import GitHubLink from "../../../../../shared-components/GitHubLink";
import theme from "../../../../../../theme";
import FeatureToggle from "../components/FeatureToggle";

const LandingPageFooterDesktop = () => {

    return (
        <VBox sx={{
            backgroundColor: theme.palette.pink.main,
            paddingTop: '104px',
            paddingBottom: '52px',
            paddingLeft: '96px',
            paddingRight: '96px',
            alignItems: 'center',
            gap: theme.spacing(10),
        }}>
            <HBox sx={{width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
                <LogoBar/>
                <HBox>
                    <EmailLink email={'info@foerderfunke.org'}/>
                    <LinkedInLink linkedin={'https://www.linkedin.com/company/foerderfunke'}/>
                    <GitHubLink href={"https://github.com/Citizen-Knowledge-Graph"}/>
                    <FeatureToggle/>
                </HBox>
            </HBox>
            <HBox justifyContent={'center'} alignItems={'center'}>
                <HBox sx={{width: '506px'}}>
                    <Typography variant="body2" sx={{textAlign: 'center'}}>
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
                </HBox>
            </HBox>
        </VBox>
    );
}

export default LandingPageFooterDesktop;
