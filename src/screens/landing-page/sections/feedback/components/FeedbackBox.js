import React from "react";
import {Button, Link, TextField, Typography} from "@mui/material";
import VStack from "../../../../../components/VStack";
import HStack from "../../../../../components/HStack";
import globalStyles from "../../../../../styles/styles";
import useFeedbackHandler from "../hooks/useFeedbackHandler";
import useTranslation from "../../../../../language/useTranslation";
import EmailIcon from "@mui/icons-material/Email";
import Divider from "@mui/material/Divider";

const FeedbackBox = () => {
    const { t } = useTranslation();

    const {
        feedbackText,
        setFeedbackText,
        isSubmitting,
        error,
        submitFeedback,
    } = useFeedbackHandler();

    return (
        <VStack gap={5} sx={styles.feedbackBox}>
            <VStack gap={5}>
                <Typography sx={styles.text}>
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
            </VStack>
            <HStack alignItems={'center'}>
                <Button
                    variant="text"
                    sx={styles.button}
                    onClick={submitFeedback}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? t('home.feedback.submitting') : t('home.feedback.submitBtn')}
                </Button>
            </HStack>
            {error && (
                <Typography color="error">
                    {error}  {/* Error message displayed here */}
                </Typography>
            )}
            <Divider />
            <VStack gap={3} alignItems={'center'} sx={{width: "100%"}}>
                <HStack sx={{flex: 2}}>
                    <Typography sx={styles.text}>
                        {t('home.feedback.messagePrompt')}
                    </Typography>
                </HStack>
                <HStack justifyContent={'center'} sx={{flex: 2}}>
                    <HStack alignItems={'center'} sx={styles.email}>
                        <EmailIcon/>
                        <Link href={`mailto:info@foerderfunke.org`}
                              sx={{textDecoration: 'underline'}}> info@foerderfunke.org</Link>
                    </HStack>
                </HStack>
            </VStack>
        </VStack>
    );
};

const styles = {
    feedbackBox: {
        width: '100%',
        padding: '24px',
        borderRadius: '4px',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: globalStyles.primaryColor,
        backgroundColor: 'white',
    },
    text: {
        fontSize: '20px',
        color: globalStyles.colorDarkGrey,
        textAlign: 'left'
    },
    button: {
        backgroundColor: globalStyles.primaryColor,
        borderRadius: '4px',
        padding: '4px 12px',
        color: 'black',
        fontSize: '20px',
        fontWeight: 'bold',
        textTransform: 'none'
    },
    email: {
        backgroundColor: 'white',
        borderRadius: '12px',
        color: 'black',
        fontSize: '20px',
        textTransform: 'none'
    }
}

export default FeedbackBox;
