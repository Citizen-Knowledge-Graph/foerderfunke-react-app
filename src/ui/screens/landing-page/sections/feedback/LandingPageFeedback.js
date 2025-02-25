import React from "react";
import { Typography } from "@mui/material";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";
import FeedbackBox from "./components/FeedbackBox";
import useTranslation from "../../../../language/useTranslation";
import { VBox } from "../../../../shared-components/LayoutBoxes";
import theme from "../../../../../theme";

const LandingPageFeedback = ({ isDesktop }) => {
    const { t } = useTranslation();

    return (
        <LandingPageSectionWrapper backgroundColor={'white'} isDesktop={isDesktop}>
            <VBox sx={{ alignItems: 'center' }}>
                <VBox sx={{ maxWidth: "1118px", gap: theme.spacing(10) }}>
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
