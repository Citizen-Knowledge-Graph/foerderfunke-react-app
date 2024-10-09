import React from "react";
import {Typography} from "@mui/material";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";
import CollaborationBox from "./components/CollaborationBox";
import LandingPageSectionGrid from "../../components/LandingPageSectionGrid";
import useTranslation from "../../../../language/useTranslation";

const LandingPageCollaboration = ({isDesktop}) => {
    const { t } = useTranslation();

    return (
        <LandingPageSectionWrapper isDesktop={isDesktop}>
            <LandingPageSectionGrid title={t('home.collaborate.header')}>
                <Typography sx={styles.text}>
                    {t('home.collaborate.text')}
                </Typography>
                <CollaborationBox isDesktop={isDesktop}/>
            </LandingPageSectionGrid>
        </LandingPageSectionWrapper>
    );
}

const styles = {
    text: {
        fontSize: '20px',
        textAlign: 'left',
        lineHeight: '1.75'
    }
};

export default LandingPageCollaboration;
