import VStack from "../../../components/VStack";
import HStack from "../../../components/HStack";
import {Typography} from "@mui/material";
import {green} from "@mui/material/colors";

const LandingPageInfoCard = ({title, text}) => {
    return (
        <VStack gap={0} sx={{width: '100%'}}>
            <VStack gap={1} sx={styles.infoCard}>
                <HStack>
                    <Typography sx={styles.titleText}>
                        {title}
                    </Typography>
                </HStack>
                <HStack>
                    <Typography sx={styles.subTitleText}>
                        {text}
                    </Typography>
                </HStack>
            </VStack>
        </VStack>
    );
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

export default LandingPageInfoCard;
