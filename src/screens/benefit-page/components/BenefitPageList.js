import VStack from "../../../components/VStack";
import {Typography} from "@mui/material";
import HStack from "../../../components/HStack";
import Divider from '@mui/material/Divider';

const BenefitPageHeader = ({benefit}) => {
    return (
        <VStack sx={styles.benefitPageList}>
            <VStack gap={1} sx={{padding: "16px"}}>
                <HStack justifyContent={'flex-start'}>
                    <Typography variant="body2" sx={styles.listHeader}>
                        What is it?
                    </Typography>
                </HStack>
                <Divider/>
                <HStack justifyContent={'flex-start'}>
                    <Typography variant="body2" sx={styles.listHeader}>
                        Who can apply?
                    </Typography>
                </HStack>
                <Divider/>
                <HStack justifyContent={'flex-start'}>
                    <Typography variant="body2" sx={styles.listHeader}>
                        What do you need?
                    </Typography>
                </HStack>
                <Divider/>
                <HStack justifyContent={'flex-start'}>
                    <Typography variant="body2" sx={styles.listHeader}>
                        Contact
                    </Typography>
                </HStack>
            </VStack>
        </VStack>
    );
}

const styles = {
    benefitPageList: {
        width: '100%',
    },
    listHeader: {
        fontWeight: 'bold',
    },
    subtitleText: {
        fontWeight: '400',
    }
};

export default BenefitPageHeader;
