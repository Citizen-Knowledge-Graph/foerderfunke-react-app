import VStack from "../../../../../components/VStack";
import HStack from "../../../../../components/HStack";
import {Typography} from "@mui/material";

const LandingPageInfoCard = ({title, text}) => {
    return (
        <VStack gap={0} sx={{maxWidth: '450px'}}>
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
        padding: '16px',
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: '24px',
    },
    subTitleText: {
        fontSize: '20px',
    }
};

export default LandingPageInfoCard;
