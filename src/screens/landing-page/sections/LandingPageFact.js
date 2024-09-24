import React from "react";
import HStack from "../../../components/HStack";
import {Typography} from "@mui/material";
import globalStyles from "../../../styles/styles";
import LandingPageSectionWrapper from "../components/LandingPageSectionWrapper";
import VStack from "../../../components/VStack";
import LandingPageSectionGrid from "../components/LandingPageSectionGrid";
import useTranslation from "../../../language/useTranslation";

const LandingPageFact = ({isDesktop}) => {
    const { t } = useTranslation();

    return (
        <LandingPageSectionWrapper backgroundColor={globalStyles.primaryColor} isDesktop={isDesktop}>
            <LandingPageSectionGrid>
                <VStack alignItems={'center'}>
                    <HStack>
                        <Typography sx={styles.headerSectionTitle}>{t('mission.header')}</Typography>
                    </HStack>
                    <HStack>
                        <Typography sx={styles.headerSectionText}>{t('mission.text')}</Typography>
                    </HStack>
                </VStack>
            </LandingPageSectionGrid>
        </LandingPageSectionWrapper>
    )
}

const styles = {
    headerSectionTitle: {
        fontWeight: 'bold',
        fontSize: '28px',
        textAlign: 'center',
    },
    headerSectionText: {
        fontSize: '20px',
        textAlign: 'center',
    },
}

export default LandingPageFact;
