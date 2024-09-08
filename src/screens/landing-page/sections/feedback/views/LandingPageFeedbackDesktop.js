import React from "react";
import {Typography} from "@mui/material";
import LandingPageSectionWrapper from "../../../components/LandingPageSectionWrapper";
import VStack from "../../../../../components/VStack";

const LandingPageFeedbackDesktop = ({isDesktop}) => {

    return (
        <LandingPageSectionWrapper isDesktop={isDesktop}>
            <VStack gap={5}>
                <Typography sx={styles.titleText}>
                    Desktop View
                </Typography>
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

export default LandingPageFeedbackDesktop;
