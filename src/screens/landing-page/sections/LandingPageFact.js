import React from "react";
import HStack from "../../../components/HStack";
import {Typography} from "@mui/material";
import LandingPageSectionWrapper from "../components/LandingPageSectionWrapper";
import VStack from "../../../components/VStack";
import LandingPageSectionGrid from "../components/LandingPageSectionGrid";
import useTranslation from "../../../language/useTranslation";

const LandingPageFact = ({isDesktop}) => {
    const { t } = useTranslation();

    return (
        <LandingPageSectionWrapper backgroundColor={'white'} isDesktop={isDesktop}>
            <LandingPageSectionGrid>
                <VStack justifyContent={'center'} alignItems={'center'} sx={{minHeight: 350}}>
                    <HStack>
                        <Typography sx={styles.headerSectionTitle}>{t('home.mission.header')}</Typography>
                    </HStack>
                    <HStack>
                        <Typography sx={styles.headerSectionText}>{t('home.mission.text')}</Typography>
                    </HStack>
                </VStack>
            </LandingPageSectionGrid>
        </LandingPageSectionWrapper>
    )
}

const styles = {
    headerSectionTitle: {
        fontWeight: 'bold',
        fontSize: '40px',
        textAlign: 'center',
    },
    headerSectionText: {
        fontSize: '20px',
        textAlign: 'center',
    },
}

export default LandingPageFact;
