import VStack from "../../../../../components/VStack";
import HStack from "../../../../../components/HStack";
import {Typography} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {green} from "@mui/material/colors";
import globalStyles from "../../../../../styles/styles";
import useTranslation from "../../../../../language/useTranslation";

const LandingPageBasics = () => {
    const {t} = useTranslation();

    return (
        <VStack alignItems={'center'} sx={{width: "100%"}}>
            <VStack gap={4} alignItems={'flex-start'} sx={styles.basicsBox}>
                <HStack alignItems={'center'}>
                    <CheckCircleIcon sx={styles.icon}/>
                    <Typography sx={styles.itemText}>
                        {t('home.theBasics.line1')}
                    </Typography>
                </HStack>
                <HStack alignItems={'center'}>
                    <CheckCircleIcon sx={styles.icon}/>
                    <Typography sx={styles.itemText}>
                        {t('home.theBasics.line2')}
                    </Typography>
                </HStack>
                <HStack alignItems={'center'}>
                    <CheckCircleIcon sx={styles.icon}/>
                    <Typography sx={styles.itemText}>
                        {t('home.theBasics.line3')}
                    </Typography>
                </HStack>
                <HStack alignItems={'center'}>
                    <CheckCircleIcon sx={styles.icon}/>
                    <Typography sx={styles.itemText}>
                        {t('home.theBasics.line4')}
                    </Typography>
                </HStack>
            </VStack>
        </VStack>
    );
}

const styles = {
    basicsBox: {
        borderRadius: '12px',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: globalStyles.primaryColor,
        padding: '32px',
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: '28px'
    },
    icon: {
        color: green[500],
        fontSize: '34px',
    },
    itemText: {
        fontSize: '20px',
        maxWidth: '400px'
    }
}

export default LandingPageBasics;
