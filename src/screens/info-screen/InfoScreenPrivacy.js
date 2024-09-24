import React from "react";
import {Typography} from "@mui/material";
import InfoScreen from "./components/InfoScreen";
import VStack from "../../components/VStack";
import HStack from "../../components/HStack";
import globalStyles from "../../styles/styles";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import DeleteIcon from "@mui/icons-material/Delete";
import useTranslation from "../../language/useTranslation";

const InfoScreenPrivacy = () => {
    const { t } = useTranslation();

    return (
        <InfoScreen title={t('app.privacySite.header')} imageUrl={'privacy_1'} forwardLink="/onboarding-choice">
            <VStack sx={styles.infoBox}>
                <Typography sx={styles.infoText}>
                    {t('app.privacySite.text1')}
                </Typography>
                <Typography sx={styles.infoText}>
                    {t('app.privacySite.text2')}
                </Typography>
            </VStack>
            <VStack sx={styles.optionsBox}>
                <Typography sx={styles.optionsText}>
                    {t('app.privacySite.optionHeader')}
                </Typography>
                <VStack gap={1}>
                    <HStack alignItems={'center'}>
                        <FileDownloadIcon sx={{color: globalStyles.colorDarkGrey, fontSize: '16px'}}/>
                        <Typography sx={styles.optionsText}>
                            {t('app.privacySite.option1')}
                        </Typography>
                    </HStack>
                    <HStack alignItems={'center'}>
                        <DeleteIcon sx={{color: globalStyles.colorDarkGrey, fontSize: '16px'}}/>
                        <Typography sx={styles.optionsText}>
                            {t('app.privacySite.option2')}
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
