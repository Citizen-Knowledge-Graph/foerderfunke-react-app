import React from "react";
import VStack from "../../../../../shared-components/VStack";
import HStack from "../../../../../shared-components/HStack";
import {IconButton, Typography} from "@mui/material";
import useTranslation from "../../../../../language/useTranslation";
import globalStyles from "../../../../../styles/styles";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import LandingPageSupportCardStacker from "./LandingPageSupportCardStacker";

const LandingPageSupportCard = ({isDesktop}) => {
    const [showDisclaimer, setShowDisclaimer] = React.useState(false);
    const {t} = useTranslation();


    const NGISearchLogoUrl = `${process.env.PUBLIC_URL}/assets/images/logos/NGI-Search-Logo.png`;
    const EuLogoUrl = `${process.env.PUBLIC_URL}/assets/images/logos/EU-Logo.png`;

    return (
        <VStack sx={styles.infoCard}>
            <LandingPageSupportCardStacker isDesktop={isDesktop}>
                <VStack gap={1} sx={{flex: 1}}>
                    <Typography sx={styles.titleText}>
                        {t('home.supportedBy.headerNGI')}
                    </Typography>
                    <Typography sx={styles.subTitleText}>
                        {t('home.supportedBy.textNGI')}
                    </Typography>
                </VStack>
                <HStack justifyContent={'center'}>
                    <VStack justifyContent={'flex-end'} alignItems={'center'} sx={{width: "125px", height: "125px"}}>
                        <img src={NGISearchLogoUrl} alt={'Prototype Fund Logo'}
                             style={{maxWidth: "125px", maxHeight: "125px"}}/>
                    </VStack>
                    <VStack justifyContent={'flex-end'} alignItems={'center'} sx={{width: "125px", height: "125px"}}>
                        <img src={EuLogoUrl} alt={'BMBF Logo'} style={{maxWidth: "125px", maxHeight: "125px"}}/>
                    </VStack>
                </HStack>
            </LandingPageSupportCardStacker>
            <VStack gap={1}>
                <HStack gap={1} alignItems={'center'}>
                    <Typography sx={styles.disclaimerText}>
                        {t('home.supportedBy.disclaimerTitleNGI')}
                    </Typography>
                    <IconButton
                        onClick={() => setShowDisclaimer(!showDisclaimer)}
                        sx={{
                            width: 25,
                            height: 25,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'white',
                            '&:hover': {
                                backgroundColor: globalStyles.colorLightGrey,
                            },
                        }}
                    >
                        {
                            showDisclaimer ?
                                <ExpandLessIcon sx={{fontSize: 20, color: globalStyles.colorDarkGrey}}/> :
                                <ExpandMoreIcon sx={{fontSize: 20, color: globalStyles.colorDarkGrey}}/>
                        }
                    </IconButton>
                </HStack>
                {
                    showDisclaimer &&
                    <Typography sx={styles.disclaimerText}>
                        {t('home.supportedBy.disclaimerNGI')}
                    </Typography>
                }
            </VStack>
        </VStack>
    )
        ;
}

const styles = {
    infoCard: {
        width: '100%',
        padding: '24px',
        backgroundColor: 'white',
        borderRadius: '4px',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: globalStyles.primaryColor
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: '28px',
    },
    subTitleText: {
        fontSize: '20px',
    },
    disclaimerText: {
        fontSize: '12px',
        color: globalStyles.colorDarkGrey,
    }
};

export default LandingPageSupportCard;
