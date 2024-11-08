import VStack from "../../../../../components/VStack";
import HStack from "../../../../../components/HStack";
import {Typography} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import globalStyles from "../../../../../styles/styles";
import useTranslation from "../../../../../language/useTranslation";

const LandingPageBasics = () => {
    const {t} = useTranslation();

    return (
        <HStack sx={{width: "100%", marginBottom: "32px", marginTop: "32px"}}>
            <VStack alignItems={'space-between'} sx={{flex: 1}}>
                <HStack>
                    <HStack alignItems={'center'} sx={styles.basicsBox}>
                        <CheckCircleIcon sx={styles.icon}/>
                        <Typography sx={styles.itemText}>
                            {t('home.theBasics.line1')}
                        </Typography>
                    </HStack>
                </HStack>
                <HStack>
                    <HStack alignItems={'center'} sx={styles.basicsBox}>
                        <CheckCircleIcon sx={styles.icon}/>
                        <Typography sx={styles.itemText}>
                            {t('home.theBasics.line2')}
                        </Typography>
                    </HStack>
                </HStack>
            </VStack>
            <VStack alignItems={'space-between'} sx={{flex: 1}}>
                <HStack>
                    <HStack alignItems={'center'} sx={styles.basicsBox}>
                        <CheckCircleIcon sx={styles.icon}/>
                        <Typography sx={styles.itemText}>
                            {t('home.theBasics.line3')}
                        </Typography>
                    </HStack>
                </HStack>
                <HStack>
                    <HStack alignItems={'center'} sx={styles.basicsBox}>
                        <CheckCircleIcon sx={styles.icon}/>
                        <Typography sx={styles.itemText}>
                            {t('home.theBasics.line4')}
                        </Typography>
                    </HStack>
                </HStack>
            </VStack>
        </HStack>
    );
}

const styles = {
    basicsBox: {
        width: "100%",
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: globalStyles.primaryColor,
        borderRadius: '4px',
        padding: '16px',
    },
    icon: {
        color: globalStyles.secondaryColor,
        fontSize: '24px',
    },
    itemText: {
        fontSize: '20px',
        maxWidth: '400px'
    }
}

export default LandingPageBasics;
