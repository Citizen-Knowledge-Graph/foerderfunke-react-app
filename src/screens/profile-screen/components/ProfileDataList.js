import React from 'react';
import globalStyles from "../../../styles/styles";
import VStack from "../../../components/VStack";
import {IconButton, Typography} from "@mui/material";
import useUserProfileData from "../hooks/useUserProfileData";
import HStack from "../../../components/HStack";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import {Link} from "react-router-dom";
import Divider from "@mui/material/Divider";

const ProfileDataList = () => {
    const userProfileData = useUserProfileData();

    return (
        <VStack>
            <VStack sx={{
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'lightgrey',
                borderRadius: '12px',
                gap: 0,
            }}>
                {userProfileData.map(({label, value}, index) => (
                    <>
                        <VStack gap={0} key={index}
                                sx={styles.dataBox}
                                justifyContent={'center'}
                        >
                            <Typography sx={styles.labelText}>
                                {label}
                            </Typography>
                            <Typography sx={styles.valueText}>
                                {value}
                            </Typography>
                        </VStack>
                        {index < userProfileData.length - 1 && <Divider/>}
                    </>
                ))}
            </VStack>
            <VStack sx={styles.restartBox}>
                <HStack gap={3} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography>
                        You currently cannot edit your profile data. If you need to make changes, you
                        can restart the discovery journey.
                    </Typography>
                    <IconButton
                        component={Link}
                        to='/user-routing'
                        sx={{
                            width: 40,
                            height: 40,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: globalStyles.primaryColor,
                            '&:hover': {
                                backgroundColor: globalStyles.colorLightGrey,
                            },
                        }}
                    >
                        <RestartAltIcon sx={{fontSize: 24, color: 'black'}}/>
                    </IconButton>
                </HStack>
            </VStack>
        </VStack>
    );
};

const styles = {
    titleText: {
        fontWeight: 'bold',
    },
    restartBox: {
        padding: '16px',
        width: '100%',
        backgroundColor: 'white',
        borderRadius: '12px',
        borderWidth: '1px',
        borderColor: globalStyles.colorLightGrey,
    },
    dataBox: {
        padding: '12px',
        borderRadius: '12px'
    },
    labelText: {
        fontWeight: '300',
        fontSize: '14px',
        color: globalStyles.colorDarkGrey
    },
    valueText: {
        fontSize: '16px'
    }
};

export default ProfileDataList;

