import React from "react";
import { Button, Link, TextField, Typography } from "@mui/material";
import { HBox, VBox } from "../../../../../shared-components/LayoutBoxes";
import useFeedbackHandler from "../hooks/useFeedbackHandler";
import useTranslation from "../../../../../language/useTranslation";
import EmailIcon from "@mui/icons-material/Email";
import theme from "../../../../../../theme";

const FeedbackBox = () => {
    const { t } = useTranslation();

    const {
        feedbackText,
        setFeedbackText,
        error,
        submitFeedback,
    } = useFeedbackHandler();

    return (
        <VBox gap={5} sx={{
            width: '100%',
            border: `1px solid ${theme.palette.black.light}`,
            borderRadius: theme.shape.borderRadius,
            padding: '104px',
            boxSizing: 'border-box',
        }}>
            <VBox gap={5}>
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
            </VBox>
            <HBox sx={{ gap: theme.spacing(2) }}>
                <Button variant="contained"
                    sx={{
                        backgroundColor: theme.palette.pink.main,
                        color: theme.palette.black.main,
                        borderColor: theme.palette.pink.main,
                        '&:hover': {
                            backgroundColor: theme.palette.blue.dark,
                            color: theme.palette.white.main,
                            borderColor: theme.palette.blue.dark,
                        }
                    }}
                    onClick={submitFeedback}
                    to="/user-routing">{t('home.feedback.submitBtn')}
                </Button>
            </HBox>
            {error && (
                <Typography color="error">
                    {error}  {/* Error message displayed here */}
                </Typography>
            )}
            <HBox sx={{ width: "100%", alignItems: "center", justifyContent: "space-between" }}>
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
