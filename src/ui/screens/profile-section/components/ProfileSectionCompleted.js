import React from 'react';
import { Typography } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VStack from "../../../components/VStack";
import HStack from "../../../components/HStack";
import ButtonCard from "../../../components/ButtonCard";
import globalStyles from "../../../styles/styles";
import { UserModel } from "../../../../core/models/UserModel";
import ProfileDataList from "../../profile-screen/components/ProfileDataList";
import useTranslation from "../../../language/useTranslation";

const ProfileSectionCompleted = () => {
    const { t } = useTranslation();
    const userProfile = UserModel.retrieveUserData("ff:quick-check-user");

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
                <ButtonCard
                    link={`/eligibility-overview`}
                    text={t('app.qsComplete.discoverBtn')}
                    backgroundColor={globalStyles.secondaryColor}
                />
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
