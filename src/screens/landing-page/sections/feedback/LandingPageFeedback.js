import React from "react";
import {Typography} from "@mui/material";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";
import FeedbackBox from "./components/FeedbackBox";
import LandingPageSectionGrid from "../../components/LandingPageSectionGrid";

const LandingPageFeedback = ({isDesktop}) => {
    return (
        <LandingPageSectionWrapper isDesktop={isDesktop}>
            <LandingPageSectionGrid title={'Help us improve'}>
                <Typography sx={styles.text}>
                    Your feedback is essential for us to understand how we can improve your experience with the
                    application. It helps us improve and add features that allow people to find the right benefits.
                </Typography>
                <FeedbackBox isDesktop={isDesktop}/>
            </LandingPageSectionGrid>
        </LandingPageSectionWrapper>
    );
}

const styles = {
    titleText: {
        fontWeight: 'bold',
        fontSize: '36px',
        textAlign: 'center',
    },
    text: {
        fontSize: '20px',
        textAlign: 'left',
        lineHeight: '1.75'
    }
};

export default LandingPageFeedback;
