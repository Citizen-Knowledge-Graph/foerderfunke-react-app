import React from "react";
import {Typography} from "@mui/material";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";
import VStack from "../../../../components/VStack";
import globalStyles from "../../../../styles/styles";
import LandingPageFeedbackDesktop from "./views/LandingPageFeedbackDesktop";
import LandingPageFeedbackMobile from "./views/LandingPageFeedbackMobile";

const LandingPageFeedback = ({isDesktop}) => {

    return (
        <LandingPageSectionWrapper backgroundColor={globalStyles.primaryColor} isDesktop={isDesktop}>
            <VStack gap={5} alignItems={'center'}>
                <Typography sx={styles.titleText}>
                    Help us improve FörderFunke
                </Typography>
                {
                    isDesktop ? (<LandingPageFeedbackDesktop isDesktop={isDesktop}/>) : (
                        <LandingPageFeedbackMobile isDesktop={isDesktop}/>)
                }
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

export default LandingPageFeedback;
