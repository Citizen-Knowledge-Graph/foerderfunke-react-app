import VStack from "../../../components/VStack";
import HStack from "../../../components/HStack";
import {Typography} from "@mui/material";
import globalStyles from "../../../styles/styles";

const LandingPageFooter = () => {
    return (
        <VStack sx={styles.footerContainer}>
            <VStack alignItems={'center'} sx={{width: "100%"}}>
                <HStack>
                    <Typography sx={styles.footerHeaderTitle}>
                        FoerderFunke
                    </Typography>
                </HStack>
            </VStack>
            <VStack alignItems={'center'} sx={{width: "100%"}}>
                <HStack>
                    <Typography>
                        info@foerderfunke.org
                    </Typography>
                </HStack>
                <HStack>
                    <Typography>
                        LinkedIn FoerderFunke
                    </Typography>
                </HStack>
            </VStack>
            <VStack alignItems={'center'} sx={{width: "100%"}}>
                <HStack>
                    <Typography>
                        Impressum
                    </Typography>
                </HStack>
                <HStack>
                    <Typography>
                        Data Protection
                    </Typography>
                </HStack>
                <HStack>
                    <Typography>
                        How it works
                    </Typography>
                </HStack>
                <HStack>
                    <Typography>
                        About us
                    </Typography>
                </HStack>
                <HStack>
                    <Typography>
                        Copyright
                    </Typography>
                </HStack>
            </VStack>
        </VStack>
    )
}

const styles = {
    footerContainer: {
        width: "100%",
        padding: "16px",
        backgroundColor: globalStyles.primaryColor,
    },
    footerHeaderTitle: {
        fontWeight: "bold",
        fontSize: "28px"
    }
}

export default LandingPageFooter;
