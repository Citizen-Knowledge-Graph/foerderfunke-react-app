import React from "react";
import {Typography} from "@mui/material";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";
import VStack from "../../../../components/VStack";
import FeedbackBox from "./components/FeedbackBox";
import LandingPageSectionTitle from "../../components/LandingPageSectionTitle";

const LandingPageFeedback = ({isDesktop}) => {

    return (
        <LandingPageSectionWrapper isDesktop={isDesktop}>
            <VStack gap={5} alignItems={'center'}>
                <LandingPageSectionTitle title={'Help us improve'}/>
                <VStack gap={5} sx={{maxWidth: '780px'}}>
                    <Typography sx={styles.text}>
                        Your feedback is essential for us to understand how we can improve your experience with the
                        application. It helps us improve and add features that allow people to find the right benefits.
                    </Typography>
                    <FeedbackBox isDesktop={isDesktop}/>
                </VStack>
            </VStack>
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
