import React from "react";
import {Typography} from "@mui/material";
import InfoScreen from "./components/InfoScreen";

const InfoScreenAccount = () => {
    return (
        <InfoScreen title="Full control over your data" imageUrl="privacy_1" backLink={'/info-privacy'}
                    forwardLink="/onboarding-choice">
            <Typography sx={styles.infoText}>
                Before leaving the website, you have three options:
            </Typography>
            <ul style={styles.list}>
                <li style={styles.listItem}>
                    <Typography sx={styles.itemText}>Come back anytime and continue filling in your profile.
                        Your information will still be there.</Typography>
                </li>
                <li style={styles.listItem}>
                    <Typography sx={styles.itemText}><strong>Export your data</strong> as an RDF
                        file.</Typography>
                </li>
                <li style={styles.listItem}>
                    <Typography sx={styles.itemText}><strong>Export your data and erase it</strong> from the
                        browser with one click.</Typography>
                </li>
            </ul>
        </InfoScreen>
    );
}

const styles = {
    infoText: {
        fontSize: 16,
        textAlign: 'left',
    },
    list: {
        paddingLeft: '20px',
        listStyleType: 'disc',
    },
    listItem: {
        marginBottom: '8px',
    },
    itemText: {
        fontSize: 16,
        textAlign: 'left',
    }
}


export default InfoScreenAccount;
