import React from "react";
import {Typography} from "@mui/material";
import InfoScreen from "./components/InfoScreen";
import VStack from "../../components/VStack";

const InfoScreenPrivacy = () => {
    return (
        <InfoScreen title={'Your data is only stored locally'} imageUrl={'privacy_1'} forwardLink="/onboarding-choice">
            <VStack sx={styles.infoBox}>
                <Typography sx={styles.infoText}>
                    Only you should have access to your personal data. That is why <strong>we do
                    not offer user accounts</strong> managed by us.
                </Typography>
                <Typography sx={styles.infoText}>
                    All of your information is only <strong>stored locally in your browser</strong>.
                </Typography>
            </VStack>
            <VStack gap={1} sx={styles.optionsBox}>
                <Typography sx={styles.infoText}>
                    You do have some <strong>options</strong> though:
                </Typography>
                <ul style={styles.list}>
                    <li>
                        <Typography sx={styles.infoText}>You can <strong>export your data</strong> as an RDF
                            file.</Typography>
                    </li>
                    <li>
                        <Typography sx={styles.infoText}>You can <strong>erase it</strong> from the
                            browser with one click.</Typography>
                    </li>
                </ul>
            </VStack>
        </InfoScreen>
    );
}

const styles = {
    infoText: {
        fontSize: '20px',
        textAlign: 'left',
    },
    infoBox: {
        padding: '16px',
        width: '100%',
    },
    optionsBox: {
        backgroundColor: '#F5F5F5',
        borderRadius: '12px',
        padding: '16px',
        width: '100%',
    },
    list: {
        listStyleType: 'disc',
    }
}


export default InfoScreenPrivacy;
