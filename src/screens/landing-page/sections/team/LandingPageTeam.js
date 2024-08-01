import React from "react";
import VStack from "../../../../components/VStack";
import {Typography} from "@mui/material";
import HStack from "../../../../components/HStack";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";
import LandingPageTeamDesktop from "./views/LandingPageTeamDesktop";
import LandingPageTeamMobile from "./views/LandingPageTeamMobile";

const LandingPageTeam = ({isDesktop}) => {
    return (
        <LandingPageSectionWrapper isDesktop={isDesktop}>
            <VStack gap={5}>
                <HStack justifyContent={'center'} sx={{width: '100%'}}>
                    <Typography sx={styles.titleText}>
                        Let's connect!
                    </Typography>
                </HStack>
                {isDesktop ? <LandingPageTeamDesktop/> : <LandingPageTeamMobile/>}
            </VStack>
        </LandingPageSectionWrapper>
    );
}

const styles = {
    titleText: {
        fontWeight: 'bold',
        fontSize: '36px',
        textAlign: 'center',
    }
};

export default LandingPageTeam;
