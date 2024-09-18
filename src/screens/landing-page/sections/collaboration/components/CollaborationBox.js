import React from "react";
import {Link, Typography} from "@mui/material";
import VStack from "../../../../../components/VStack";
import globalStyles from "../../../../../styles/styles";
import HStack from "../../../../../components/HStack";
import EmailIcon from "@mui/icons-material/Email";

const CollaborationBox = () => {

    return (
        <VStack gap={5} sx={styles.collaborationBox}>
            <VStack gap={3} alignItems={'center'} sx={{width: "100%"}}>
                <Typography sx={styles.text}>
                    Send us a message. We will get back to you as quickly as we can!
                </Typography>
                <HStack>
                    <HStack alignItems={'center'} sx={styles.email}>
                        <EmailIcon/>
                        <Link href={`mailto:info@foerderfunke.org`}
                              sx={{textDecoration: 'underline'}}> info@foerderfunke.org</Link>
                    </HStack>
                </HStack>
            </VStack>
        </VStack>
    );
}

const styles = {
    collaborationBox: {
        width: '100%',
        padding: '24px',
        borderRadius: '12px',
        backgroundColor: globalStyles.primaryColor
    },
    text: {
        fontSize: '20px',
        color: globalStyles.colorDarkGrey,
        textAlign: 'left'
    },
    email: {
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '8px 12px',
        color: 'black',
        fontSize: '20px',
        textTransform: 'none'
    }
}

export default CollaborationBox;
