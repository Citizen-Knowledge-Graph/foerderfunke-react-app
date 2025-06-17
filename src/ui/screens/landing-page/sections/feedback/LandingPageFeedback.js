import React from "react";
import { Typography } from "@mui/material";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";
import FeedbackBox from "./components/FeedbackBox";
import useTranslation from "@/ui/language/useTranslation";
import { VBox } from "@/ui/shared-components/LayoutBoxes";

const LandingPageFeedback = ({ isDesktop }) => {
    const { t } = useTranslation();

    return (
        <LandingPageSectionWrapper isDesktop={isDesktop}>
            <VBox sx={{ alignItems: 'center' }}>
                <VBox sx={{ 
                    maxWidth: "1118px", 
                    gap: isDesktop ? 10 : 6
                }}>
                    <Typography variant="h1">
                        Feedback
                    </Typography>
                    <Typography variant="body1">
                        {t('home.feedback.text')}
                    </Typography>
                    <FeedbackBox isDesktop={isDesktop} />
                </VBox>
            </VBox>
        </LandingPageSectionWrapper >
    );
}

export default LandingPageFeedback;
