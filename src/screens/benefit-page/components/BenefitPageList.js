import VStack from "../../../components/VStack";
import {Typography} from "@mui/material";
import HStack from "../../../components/HStack";
import Divider from '@mui/material/Divider';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const BenefitPageList = ({benefit}) => {
    return (
        <VStack sx={styles.benefitPageList}>
            <VStack gap={2} sx={{padding: "16px"}}>
                <HStack justifyContent={'flex-start'}>
                    <VStack>
                        <Typography sx={styles.sectionHeader}>
                            What is it?
                        </Typography>
                        <Typography sx={styles.sectionText}>
                            {benefit.what}
                        </Typography>
                    </VStack>
                </HStack>
                <Divider/>
                <HStack justifyContent={'flex-start'}>
                    <VStack>
                        <Typography sx={styles.sectionHeader}>
                            Who can apply?
                        </Typography>
                        <Typography sx={styles.sectionText}>
                            {benefit.who}
                        </Typography>
                    </VStack>
                </HStack>
                <Divider/>
                <HStack justifyContent={'flex-start'}>
                    <VStack>
                        <Typography sx={styles.sectionHeader}>
                            What do you need?
                        </Typography>
                        <VStack gap={1}>
                            {benefit.requirements.map((requirement, index) => (
                                <HStack gap={1} alignItems={'center'}>
                                    <CheckCircleOutlineIcon sx={styles.checkIcon} />
                                    <Typography key={index} sx={styles.sectionText}>
                                        {requirement}
                                    </Typography>
                                </HStack>
                            ))
                            }
                        </VStack>
                    </VStack>
                </HStack>
                <Divider/>
                <HStack justifyContent={'flex-start'}>
                    <VStack>
                        <Typography sx={styles.sectionHeader}>
                            Contact
                        </Typography>
                        <Typography sx={styles.sectionText}>
                            What is it?
                        </Typography>
                    </VStack>
                </HStack>
            </VStack>
        </VStack>
    );
}

const styles = {
    benefitPageList: {
        width: '100%',
    },
    sectionHeader: {
        fontWeight: 'bold',
        fontFamily: 'Roboto Slab',
    },
    sectionText: {
        fontWeight: '400',
    },
    checkIcon: {
        color: 'green',
        height: '20px'
    }
};

export default BenefitPageList;
