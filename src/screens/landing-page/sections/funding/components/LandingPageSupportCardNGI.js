import VStack from "../../../../../components/VStack";
import HStack from "../../../../../components/HStack";
import {Typography} from "@mui/material";
import useTranslation from "../../../../../language/useTranslation";

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

    const NGISearchLogoUrl = `${process.env.PUBLIC_URL}/assets/images/logos/NGI-Search-Logo.png`;
    const EuLogoUrl = `${process.env.PUBLIC_URL}/assets/images/logos/EU-Logo.png`;

    return (
        <VStack sx={styles.infoCard}>
            <Stacker isDesktop={isDesktop}>
                <VStack gap={1} sx={{flex: 1}}>
                    <Typography sx={styles.titleText}>
                        {t('home.supportedBy.headerNGI')}
                    </Typography>
                    <Typography sx={styles.subTitleText}>
                        {t('home.supportedBy.textNGI')}
                    </Typography>
                </VStack>
                <VStack justifyContent={'flex-end'} alignItems={'center'} sx={{width: "125px", height: "125px"}}>
                    <img src={NGISearchLogoUrl} alt={'Prototype Fund Logo'} style={{maxWidth: "125px", maxHeight: "125px"}}/>
                </VStack>
                <VStack justifyContent={'flex-end'} alignItems={'center'} sx={{width: "125px", height: "125px"}}>
                    <img src={EuLogoUrl} alt={'BMBF Logo'} style={{maxWidth: "125px", maxHeight: "125px"}}/>
                </VStack>
            </Stacker>
            <VStack>
                <Typography sx={styles.disclaimerText}>
                    {t('home.supportedBy.disclaimerNGI')}
                </Typography>
            </VStack>
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
    },
    disclaimerText: {
        fontSize: '12px',
        color: 'rgba(0, 0, 0, 0.5)',
    }
};

export default LandingPageSupportCard;
