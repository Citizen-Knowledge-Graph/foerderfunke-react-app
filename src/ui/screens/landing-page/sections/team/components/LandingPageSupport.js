import VStack from "../../../../../shared-components/VStack";
import HStack from "../../../../../shared-components/HStack";
import {Typography} from "@mui/material";
import {green} from "@mui/material/colors";
import useTranslation from "../../../../../language/useTranslation";

const Stacker = ({isDesktop, children}) => {
    return (
        isDesktop ? (
                <HStack gap={5} alignItems={'center'}>
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
    const { t } = useTranslation();

    const PFLogoUrl = `${process.env.PUBLIC_URL}/assets/images/logos/PF_logo.svg`;
    const BMBFUrl = `${process.env.PUBLIC_URL}/assets/images/logos/BMBF_logo.svg`;
    const NGISearchLogoUrl = `${process.env.PUBLIC_URL}/assets/images/logos/NGI-Search-Logo.png`;
    const EuLogoUrl = `${process.env.PUBLIC_URL}/assets/images/logos/EU-Logo.png`;

    return (
        <VStack sx={styles.infoCard}>
            <Stacker isDesktop={isDesktop}>
                <VStack gap={1} sx={{flex: 1}}>
                    <HStack>
                        <Typography sx={styles.titleText}>
                            {t('home.supportedBy.header')}
                        </Typography>
                    </HStack>
                    <HStack>
                        <Typography sx={styles.subTitleText}>
                            {t('home.supportedBy.textPF')}
                        </Typography>
                    </HStack>
                </VStack>
                <VStack>
                    <img src={PFLogoUrl} alt={'Prototype Fund Logo'} style={{height: '175px'}}/>
                </VStack>
                <VStack>
                    <img src={BMBFUrl} alt={'BMBF Logo'} style={{ height: '175px' }} />
                </VStack>
            </Stacker>
            <Stacker isDesktop={isDesktop}>
                <VStack gap={1} sx={{ flex: 1 }}>
                    <HStack>
                        <Typography sx={styles.subTitleText}>
                            {t('home.supportedBy.textNGI')}
                        </Typography>
                    </HStack>
                </VStack>
                <VStack>
                    <img src={NGISearchLogoUrl} alt={'NGI Search Logo'} style={{ height: '90px' }} />
                </VStack>
                <VStack>
                    <img src={EuLogoUrl} alt={'EU Logo'} style={{ height: '120px' }} />
                </VStack>
            </Stacker>
        </VStack>
    )
        ;
}

const styles = {
    infoCard: {
        borderRadius: '15px',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: green[500],
        padding: '16px',
        boxShadow: '2px 2px 4px 2px rgba(0, 0, 0, 0.2)',
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: '28px',
        color: green[500],
    },
    subTitleText: {
        fontSize: '20px',
    }
};

export default LandingPageSupportCard;
