import React from 'react';
import VStack from "../../../components/VStack";
import HStack from "../../../components/HStack";
import {Typography} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ButtonCard from "../../../components/ButtonCard";
import globalStyles from "../../../styles/styles";

const ProfileSectionCompleted = () => {
    return (
        <VStack sx={{height: "90vh"}}>
            <VStack sx={{height: "5vh"}}>
            </VStack >
            <VStack gap={5} justifyContent={'flex-start'} sx={{height: "85vh"}}>
                <HStack justifyContent={'center'} sx={{width: "100%"}}>
                    <VStack gap={1} alignItems={'center'} sx={styles.completeTextBox}>
                        <CheckCircleIcon sx={styles.icon}/>
                    </VStack>
                </HStack>
                <HStack justifyContent={'center'} sx={{width: "100%"}}>
                    <VStack gap={1} alignItems={'center'} sx={styles.completeTextBox}>
                        <Typography variant="h4" sx={styles.completeText}>Your quick check is complete</Typography>
                    </VStack>
                </HStack>
                <ButtonCard link={`/eligibility-overview`} text="Discover your benefits"
                            backgroundColor={globalStyles.secondaryColor}/>
            </VStack>
        </VStack>);
};

const styles = {
    completeTextBox: {
        paddingLeft: '45px',
        paddingRight: '45px',
    },
    completeText: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    icon: {
        width: '80px',
        height: '80px',
        color: globalStyles.secondaryColor,
    },
};

export default ProfileSectionCompleted;
