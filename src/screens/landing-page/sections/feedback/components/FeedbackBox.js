import React from "react";
import {Button, TextField, Typography} from "@mui/material";
import VStack from "../../../../../components/VStack";
import FeedbackButtonArray from "./FeedbackButtonArray";
import {Link} from "react-router-dom";
import HStack from "../../../../../components/HStack";
import globalStyles from "../../../../../styles/styles";

const FeedbackBox = ({isDesktop}) => {

    return (
        <VStack gap={5} sx={styles.feedbackBox}>
            <VStack gap={3} alignItems={'flex-start'} sx={{width: "100%"}}>
                <Typography sx={styles.text}>
                    How do you rate your overall experience with FörderFunke?
                </Typography>
                <FeedbackButtonArray isDesktop={isDesktop}/>
            </VStack>
            <VStack gap={1}>
                <Typography sx={styles.text}>
                    If you like you can also write us a few lines.
                </Typography>
                <TextField
                    label="Enter your text"
                    multiline
                    variant="filled"
                    fullWidth
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
                <Button variant="text" sx={styles.button}
                        component={Link}
                        to="/user-routing">Submit</Button>
            </HStack>
        </VStack>
    );
}

const styles = {
    feedbackBox: {
        maxWidth: '780px',
        padding: '24px',
        borderRadius: '12px',
        backgroundColor: 'white'
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
