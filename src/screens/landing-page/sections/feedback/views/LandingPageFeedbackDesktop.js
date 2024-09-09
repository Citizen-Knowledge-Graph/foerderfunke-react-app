import React from "react";
import {Typography} from "@mui/material";
import FeedbackBox from "../components/FeedbackBox";
import VStack from "../../../../../components/VStack";

const LandingPageFeedbackDesktop = ({isDesktop}) => {

    return (
        <VStack gap={5} sx={{maxWidth: '780px'}}>
            <Typography sx={styles.text}>
                Your feedback is essential for us to understand how we can improve your experience with the
                application. It helps us improve and add features that allow people to find the right benefits.
            </Typography>
            <FeedbackBox isDesktop={isDesktop}/>
        </VStack>
    );
}

const styles = {
    text: {
        fontSize: '24px',
        textAlign: 'left',
        lineHeight: '2'
    }
};

export default LandingPageFeedbackDesktop;
