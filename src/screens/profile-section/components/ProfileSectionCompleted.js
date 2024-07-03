import React from 'react';
import VStack from "../../../components/VStack";
import HStack from "../../../components/HStack";
import {Typography} from "@mui/material";
import {green, grey, yellow} from "@mui/material/colors";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ButtonCard from "../../../components/ButtonCard";
import LinearProgress from "@mui/material/LinearProgress";

const ProfileSectionCompleted = () => {
    return (
        <VStack sx={{height: "90vh"}}>
            <VStack sx={{height: "5vh"}}>
            <LinearProgress variant="determinate" value={100} sx={{
                ...styles.progressBar,
                "& .MuiLinearProgress-bar": {
                    backgroundColor: green[500],
                }
            }}/>
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
                            backgroundColor={green[500]}/>
            </VStack>
        </VStack>);
};

const styles = {
    buttonCard: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: yellow[600],
        borderRadius: '15px',
        boxShadow: 'none',
    },
    buttonCardComplete: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: green[600],
        borderRadius: '15px',
        boxShadow: 'none',
    },
    buttonCardContent: {
        padding: '16px',
        "&:last-child": {
            paddingBottom: '16px',
        }
    },
    buttonCardText: {
        color: 'white',
        fontWeight: '500',
        textAlign: 'center',
        margin: '0',
    },
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
        color: green[500],
    },
    buttonNext: {
        backgroundColor: green[500],
        fontWeight: 'bold',
        margin: '0px',
        '&:focus': {
            backgroundColor: green[500],
        },
    },
    progressBar: {
        width: '100%',
        height: '10px',
        backgroundColor: grey[300],
        borderRadius: '5px',

    }
};

export default ProfileSectionCompleted;
