import VStack from "../../../components/VStack";
import {Typography} from "@mui/material";
import HStack from "../../../components/HStack";
import {blue} from "@mui/material/colors";

const BenefitPageHeader = ({benefit}) => {
    return (
        <VStack sx={styles.benefitPageCard}>
            <VStack gap={1} sx={{padding: "16px"}}>
                <HStack justifyContent={'flex-start'}>
                    <Typography variant="h6" sx={styles.titleText}>
                        {benefit.title}
                    </Typography>
                </HStack>
                <Typography variant="body1" sx={styles.subtitleText}>
                    LeiKa-Id: {benefit.leikaId}
                </Typography>
            </VStack>
        </VStack>
    );
}

const styles = {
    benefitPageCard: {
        width: '100%',
        backgroundColor: blue[100],
    },
    titleText: {
        fontWeight: 'bold',
    },
    subtitleText: {
        fontWeight: '400',
    }
};

export default BenefitPageHeader;
