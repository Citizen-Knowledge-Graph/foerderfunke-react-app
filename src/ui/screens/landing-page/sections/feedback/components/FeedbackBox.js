import React from "react";
import { Link, TextField, Typography } from "@mui/material";
import { HBox, VBox } from "@/ui/shared-components/LayoutBoxes";
import useFeedbackHandler from "../hooks/useFeedbackHandler";
import useTranslation from "@/ui/language/useTranslation";
import EmailIcon from "@mui/icons-material/Email";
import theme from "@/theme";
import RegularButton from "@/ui/shared-components/RegularButton";

const FeedbackBox = ({ isDesktop }) => {
    const { t } = useTranslation();

    const {
        feedbackText,
        setFeedbackText,
        error,
        submitFeedback,
    } = useFeedbackHandler();

    return (
        <VBox
            sx={{
                gap: theme.spacing(8),
                width: '100%',
                border: isDesktop ? `1px solid ${theme.palette.black.light}` : null,
                borderRadius: theme.shape.borderRadius,
                padding: isDesktop ? '104px' : '0px',
                boxSizing: 'border-box'
            }}>
            <VBox sx={{
                alignItems: isDesktop ? 'flex-start' : 'flex-end',
                gap: theme.spacing(4),
            }}>
                <Typography variant="h4" sx={{ fontWeight: 400 }}>
                    {t('home.feedback.writePrompt')}
                </Typography>
                <TextField
                    label={t('home.feedback.placeholder')}
                    multiline
                    variant="filled"
                    fullWidth
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                    InputProps={{
                        disableUnderline: true,
                    }}
                    minRows={3}
                    style={{
                        overflow: 'auto',
                        borderRadius: '12px'
                    }}
                />
                <RegularButton 
                    variant="pinkContained"
                    text={'home.feedback.submitBtn'}
                    onClick={submitFeedback}  
                />
            </VBox>
            {error && (
                <Typography color="error">
                    {error}  {/* Error message displayed here */}
                </Typography>
            )}
            <HBox sx={{
                width: "100%",
                alignItems: isDesktop ? "center" : "flex-start",
                justifyContent: "space-between",
                flexDirection: isDesktop ? "row" : "column"
            }}>
                <HBox sx={{ flex: 2 }}>
                    <Typography variant="body1">
                        {t('home.feedback.messagePrompt')}
                    </Typography>
                </HBox>
                <HBox sx={{ flex: 2, alignItems: "center", justifyContent: "flex-end" }}>
                    <EmailIcon />
                    <Link href={`mailto:info@foerderfunke.org`}
                        sx={{ textDecoration: 'underline', color: theme.palette.black.main }}>
                        info@foerderfunke.org
                    </Link>
                </HBox>
            </HBox>
        </VBox>
    );
};
export default FeedbackBox;
