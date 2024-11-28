import VStack from "../../../shared-components/VStack";
import {Typography} from "@mui/material";
import HStack from "../../../shared-components/HStack";
import Divider from '@mui/material/Divider';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LanguageIcon from '@mui/icons-material/Language';
import {grey} from "@mui/material/colors";

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
                                    <CheckCircleOutlineIcon sx={styles.checkIcon}/>
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
                        <VStack gap={1}>
                            <HStack gap={1} alignItems={'center'}>
                                <ApartmentIcon sx={styles.checkIcon}/>
                                <Typography sx={styles.sectionText}>
                                    {benefit.contact.name}
                                </Typography>
                            </HStack>
                            <HStack gap={1} alignItems={'center'}>
                                <LocalPhoneIcon sx={styles.checkIcon}/>
                                <Typography sx={styles.sectionText}>
                                    {benefit.contact.phone}
                                </Typography>
                            </HStack>
                            <HStack gap={1} alignItems={'center'}>
                                <AlternateEmailIcon sx={styles.checkIcon}/>
                                <Typography sx={styles.sectionText}>
                                    {benefit.contact.email}
                                </Typography>
                            </HStack>
                            <HStack gap={1} alignItems={'center'}>
                                <LanguageIcon sx={styles.checkIcon}/>
                                <Typography sx={styles.sectionText}>
                                    {benefit.contact.website}
                                </Typography>
                            </HStack>
                        </VStack>
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
        color: grey[800],
        height: '20px'
    }
};

export default BenefitPageList;
