import React from "react";
import {Typography} from "@mui/material";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";
import VStack from "../../../../components/VStack";
import globalStyles from "../../../../styles/styles";
import HStack from "../../../../components/HStack";
import FeedbackBox from "./components/FeedbackBox";

const LandingPageFeedback = ({isDesktop}) => {

    return (
        <LandingPageSectionWrapper backgroundColor={globalStyles.primaryColor} isDesktop={isDesktop}>
            <VStack gap={5} alignItems={'center'}>
                <Typography sx={styles.titleText}>
                    Help us improve FörderFunke
                </Typography>
                <HStack sx={{maxWidth: '780px'}}>
                    <Typography sx={styles.text}>
                        Your feedback is essential for us to understand how we can improve your experience with the
                        application. It helps us improve and add features that allow people to find the right benefits.
                    </Typography>
                </HStack>
                <FeedbackBox isDesktop={isDesktop}/>
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
        fontSize: '24px',
        textAlign: 'left'
    }
};

export default LandingPageFeedback;
