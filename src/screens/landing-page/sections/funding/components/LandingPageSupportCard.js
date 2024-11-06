import VStack from "../../../../../components/VStack";
import HStack from "../../../../../components/HStack";
import {Typography} from "@mui/material";
import {green} from "@mui/material/colors";
import useTranslation from "../../../../../language/useTranslation";
import globalStyles from "../../../../../styles/styles";

const Stacker = ({isDesktop, children}) => {
    return (
        isDesktop ? (
                <HStack sx={{width: '100%'}} gap={5} justifyContent={'flex-end'} alignItems={'flex-end'}>
                    {children}
                </HStack>
            )
            : (
                <VStack gap={3} sx={{flex: 1}}>
                    {children}
                </VStack>
            )
    );
}

const LandingPageSupportCard = ({isDesktop}) => {
    const {t} = useTranslation();

    const PFLogoUrl = `${process.env.PUBLIC_URL}/assets/images/logos/PF_logo.svg`;
    const BMBFUrl = `${process.env.PUBLIC_URL}/assets/images/logos/BMBF_logo.svg`;


    return (
        <VStack sx={styles.infoCard}>
            <Stacker isDesktop={isDesktop}>
                <VStack gap={1} sx={{flex: 1}}>
                    <Typography sx={styles.titleText}>
                        {t('home.supportedBy.headerPF')}
                    </Typography>
                    <Typography sx={styles.subTitleText}>
                        {t('home.supportedBy.textPF')}
                    </Typography>
                </VStack>
                <VStack justifyContent={'flex-end'} alignItems={'center'} sx={{width: "125px", height: "125px"}}>
                    <img src={PFLogoUrl} alt={'Prototype Fund Logo'} style={{maxWidth: "125px", maxHeight: "125px"}}/>
                </VStack>
                <VStack justifyContent={'flex-end'} alignItems={'center'} sx={{width: "125px", height: "125px"}}>
                    <img src={BMBFUrl} alt={'BMBF Logo'} style={{maxWidth: "125px", maxHeight: "125px"}}/>
                </VStack>
            </Stacker>
        </VStack>
    )
        ;
}

const styles = {
    infoCard: {
        width: '100%',
        paddingBottom: '24px',
        borderBottom: '1px solid rgba(189, 189, 189)',
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: '28px',
    },
    subTitleText: {
        fontSize: '20px',
    }
};

export default LandingPageSupportCard;
