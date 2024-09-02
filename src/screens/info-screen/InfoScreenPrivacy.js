import React from "react";
import {Typography} from "@mui/material";
import InfoScreen from "./components/InfoScreen";
import VStack from "../../components/VStack";
import HStack from "../../components/HStack";
import globalStyles from "../../styles/styles";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import DeleteIcon from "@mui/icons-material/Delete";

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
            <VStack sx={styles.optionsBox}>
                <Typography sx={styles.optionsText}>
                    You do have some <strong>options</strong> though:
                </Typography>
                <VStack gap={1}>
                    <HStack alignItems={'center'}>
                        <FileDownloadIcon sx={{color: globalStyles.colorDarkGrey, fontSize: '16px'}}/>
                        <Typography sx={styles.optionsText}>You can <strong>export your data</strong> as an RDF
                            file.
                        </Typography>
                    </HStack>
                    <HStack alignItems={'center'}>
                        <DeleteIcon sx={{color: globalStyles.colorDarkGrey, fontSize: '16px'}}/>
                        <Typography sx={styles.optionsText}>You can <strong>erase it</strong> from the
                            browser with one click.
                        </Typography>
                    </HStack>
                </VStack>
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
        width: '100%',
    },
    optionsBox: {
        backgroundColor: '#F5F5F5',
        borderRadius: '12px',
        padding: '16px',
        width: '100%',
    },
    optionsText: {
        fontSize: '20px',
        textAlign: 'left',
    }
}


export default InfoScreenPrivacy;
