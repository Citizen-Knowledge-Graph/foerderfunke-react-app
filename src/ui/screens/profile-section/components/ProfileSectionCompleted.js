import React from 'react';
import { Typography, Button } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VStack from "../../../shared-components/VStack";
import HStack from "../../../shared-components/HStack";
import globalStyles from "../../../styles/styles";
import userManager from "../../../../core/managers/userManager";
import ProfileDataList from "../../profile-screen/components/ProfileDataList";
import useTranslation from "../../../language/useTranslation";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const ProfileSectionCompleted = () => {
    const { t } = useTranslation();
    const theme = useTheme();
    const userProfile = userManager.retrieveUserData("ff:quick-check-user");

    return (
        <VStack>
            <VStack />
            <VStack gap={5} justifyContent={'flex-start'}>
                <HStack justifyContent={'center'} sx={{ width: "100%" }}>
                    <VStack gap={1} alignItems={'center'} sx={styles.completeTextBox}>
                        <CheckCircleIcon sx={styles.icon} />
                    </VStack>
                </HStack>
                <HStack justifyContent={'center'} sx={{ width: "100%" }}>
                    <VStack gap={1} alignItems={'center'} sx={styles.completeTextBox}>
                        <Typography variant="h4" sx={styles.completeText}>
                            {t('app.qsComplete.header')}
                        </Typography>
                    </VStack>
                </HStack>
                {userProfile && (
                    <ProfileDataList />
                )}
                <Button
                    variant="contained"
                    sx={{
                        flex: 1,
                        padding: theme.spacing(1),
                        backgroundColor: theme.palette.secondary.main,
                        borderColor: theme.palette.secondary.main,
                        '&:hover': {
                            backgroundColor: theme.palette.secondary.main,
                        },
                    }}
                    component={Link}
                    to={`/eligibility-overview`}
                >
                    <Typography variant="h6" sx={{ color: 'white' }}>
                        {t('app.qsComplete.discoverBtn')}
                    </Typography>
                </Button>
            </VStack>
        </VStack>
    );
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
