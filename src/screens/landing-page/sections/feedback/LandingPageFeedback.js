import React from "react";
import {Typography} from "@mui/material";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";
import FeedbackBox from "./components/FeedbackBox";
import LandingPageSectionGrid from "../../components/LandingPageSectionGrid";
import useTranslation from "../../../../language/useTranslation";

const LandingPageFeedback = ({isDesktop}) => {
    const { t } = useTranslation();

    return (
        <LandingPageSectionWrapper backgroundColor={'white'} isDesktop={isDesktop}>
            <LandingPageSectionGrid title={t('home.feedback.header')}>
                <Typography sx={styles.text}>
                    {t('home.feedback.text')}
                </Typography>
                <FeedbackBox isDesktop={isDesktop}/>
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

export default LandingPageFeedback;
