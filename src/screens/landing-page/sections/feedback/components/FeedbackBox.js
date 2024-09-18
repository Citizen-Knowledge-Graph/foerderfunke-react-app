import React from "react";
import {Button, TextField, Typography} from "@mui/material";
import VStack from "../../../../../components/VStack";
import FeedbackButtonArray from "./FeedbackButtonArray";
import HStack from "../../../../../components/HStack";
import globalStyles from "../../../../../styles/styles";
import useFeedbackHandler from "../hooks/useFeedbackHandler";

const FeedbackBox = ({isDesktop}) => {

    const {
        feedbackText,
        setFeedbackText,
        setFeedbackValue,
        isSubmitting,
        error,
        submitFeedback,
    } = useFeedbackHandler();

    return (
        <VStack gap={5} sx={styles.feedbackBox}>
            <VStack gap={5} alignItems={'flex-start'} sx={{ width: "100%" }}>
                <Typography sx={styles.text}>
                    How do you rate your overall experience with FörderFunke?
                </Typography>
                <FeedbackButtonArray isDesktop={isDesktop} setFeedbackValue={setFeedbackValue} />
            </VStack>
            <VStack gap={5}>
                <Typography sx={styles.text}>
                    If you like you can also write us a few lines.
                </Typography>
                <TextField
                    label="Enter your text"
                    multiline
                    variant="filled"
                    fullWidth
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                    InputProps={{
                        disableUnderline: true,
                    }}
                    minRows={5}
                    style={{
                        overflow: 'auto',
                        borderRadius: '12px'
                    }}
                />
            </VStack>
            <HStack alignItems={'center'}>
                <Button
                    variant="text"
                    sx={styles.button}
                    onClick={submitFeedback}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
            </HStack>
            {error && (
                <Typography color="error">
                    {error}  {/* Error message displayed here */}
                </Typography>
            )}
        </VStack>
    );
};

const styles = {
    feedbackBox: {
        width: '100%',
        padding: '24px',
        borderRadius: '12px',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: globalStyles.primaryColor,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
    },
    text: {
        fontSize: '20px',
        color: globalStyles.colorDarkGrey,
        textAlign: 'left'
    },
    button: {
        backgroundColor: globalStyles.primaryColor,
        borderRadius: '12px',
        padding: '4px 12px',
        color: 'black',
        fontSize: '20px',
        fontWeight: 'bold',
        textTransform: 'none'
    }
}

export default FeedbackBox;
