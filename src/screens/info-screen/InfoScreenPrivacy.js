import React from "react";
import {Typography} from "@mui/material";
import InfoScreen from "./components/InfoScreen";

const InfoScreenPrivacy = () => {
    return (
        <InfoScreen title={'Your data is only stored locally'} imageUrl={'privacy_1'} forwardLink={'/info-account'}>
            <Typography sx={styles.infoText}>
                All information you enter is only <strong>stored locally on your browser</strong> and never
                leaves your
                device.
            </Typography>
            <Typography sx={styles.infoText}>
                We believe that only you should have access to your personal data. That is why <strong>we do
                not
                offer
                user accounts</strong> managed by us.
            </Typography>
        </InfoScreen>
    );
}

const styles = {
    infoText: {
        fontSize: 20,
        textAlign: 'left',
    },
}


export default InfoScreenPrivacy;
