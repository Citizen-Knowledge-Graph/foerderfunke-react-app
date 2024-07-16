import VStack from "../../../components/VStack";
import HStack from "../../../components/HStack";
import {Typography} from "@mui/material";
import globalStyles from "../../../styles/styles";
import SecurityIcon from '@mui/icons-material/Security';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import FaceIcon from '@mui/icons-material/Face';
import {green} from "@mui/material/colors";

const LandingPageOurPrinciples = () => {
    return (
        <VStack sx={styles.principlesContainer}>
            <HStack justifyContent={'center'} sx={{padding: "16px"}}>
                <Typography sx={styles.headerSectionTitle}>Our Principles</Typography>
            </HStack>
            <VStack gap={5} sx={{width: '100%'}}>
                <VStack gap={2}>
                    <HStack justifyContent={'center'}>
                        <Typography sx={styles.itemHeaderText}>
                            Privacy By Design
                        </Typography>
                    </HStack>
                    <HStack justifyContent={'center'}>
                        <Typography sx={styles.itemText}>
                            It is important to us that you maintain control over your data. That's why your data always
                            remains encrypted on your end device.
                        </Typography>
                    </HStack>
                    <HStack justifyContent={'center'}>
                        <SecurityIcon sx={{fontSize: 120, color: green[500]}}/>
                    </HStack>
                </VStack>
                <VStack gap={1}>
                    <HStack justifyContent={'center'}>
                        <Typography sx={styles.itemHeaderText}>
                            Open Data
                        </Typography>
                    </HStack>
                    <HStack justifyContent={'center'}>
                        <Typography sx={styles.itemText}>
                            Important information for citizens about their benefits is all too often difficult to find.
                            We make our catalogue of conditions for social benefits publicly available.
                        </Typography>
                    </HStack>
                    <HStack justifyContent={'center'}>
                        <OpenWithIcon sx={{fontSize: 120, color: green[500]}}/>
                    </HStack>
                </VStack>
                <VStack gap={1}>
                    <HStack justifyContent={'center'}>
                        <Typography sx={styles.itemHeaderText}>
                            User Centric Design
                        </Typography>
                    </HStack>
                    <HStack justifyContent={'center'}>
                        <Typography sx={styles.itemText}>
                            We work in a user-centered and iterative way. We talk with users and constantly improve our
                            product so that it is easy to use, understandable and accessible.
                        </Typography>
                    </HStack>
                    <HStack justifyContent={'center'}>
                        <FaceIcon sx={{fontSize: 120, color: green[500]}}/>
                    </HStack>
                </VStack>
            </VStack>
        </VStack>
    );
}

const styles = {
    principlesContainer: {
        width: "100%",
        padding: "16px",
        backgroundColor: globalStyles.primaryColor,
    },
    headerSectionTitle: {
        fontWeight: 'bold',
        fontSize: '32px',
        textAlign: 'center',
    },
    itemHeaderText: {
        fontWeight: 'bold',
        fontSize: '24px',
        textAlign: 'center',
    },
    itemText: {
        fontSize: '20px',
        textAlign: 'center',
    }
}

export default LandingPageOurPrinciples;
