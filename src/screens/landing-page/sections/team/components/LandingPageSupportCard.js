import VStack from "../../../../../components/VStack";
import HStack from "../../../../../components/HStack";
import {Typography} from "@mui/material";
import {green} from "@mui/material/colors";

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
    const PFLogoUrl = `${process.env.PUBLIC_URL}/assets/images/logos/PF_logo.svg`;
    const BMBFUrl = `${process.env.PUBLIC_URL}/assets/images/logos/BMBF_logo.svg`;

    return (
        <VStack sx={styles.infoCard}>
            <Stacker isDesktop={isDesktop}>
                <VStack gap={1} sx={{flex: 1}}>
                    <HStack>
                        <Typography sx={styles.titleText}>
                            Supported by
                        </Typography>
                    </HStack>
                    <HStack>
                        <Typography sx={styles.subTitleText}>
                            We are part of the 15th round of the <strong>Prototype Fund</strong> until the end of
                            August 2024. Förderkennzeichen: 01IS24S19.
                        </Typography>
                    </HStack>
                </VStack>
                <VStack>
                    <img src={PFLogoUrl} alt={'Prototype Fund Logo'} style={{height: '175px'}}/>
                </VStack>
                <VStack>
                    <img src={BMBFUrl} alt={'Prototype Fund Logo'} style={{height: '175px'}}/>
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
