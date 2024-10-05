import React from 'react';
import Layout from "../../components/Layout";
import AppScreenWrapper from "../../components/AppScreenWrapper";
import {useStore} from "../../components/ViewportUpdater";
import globalStyles from "../../styles/styles";
import VStack from "../../components/VStack";
import {Typography} from "@mui/material";
import ProfileDataList from "./components/ProfileDataList";
import useTranslation from "../../language/useTranslation";

const ProfileScreen = () => {
    const { t } = useTranslation();
    const isDesktop = useStore((state) => state.isDesktop);
    const titleFontSize = isDesktop ? '32px' : '28px';

    return (
        <Layout isApp={true} logo={true}>
            <AppScreenWrapper isDesktop={isDesktop} back={true}>
                <VStack gap={0} alignItems={'flex-start'} sx={{
                    width: '100%',
                    backgroundColor: globalStyles.primaryColorTransparent,
                    padding: '16px',
                    borderRadius: '12px'
                }}>
                    <VStack gap={1}>
                        <Typography sx={{...styles.titleText, fontSize: titleFontSize}}>
                            {t('app.profile.header')}
                        </Typography>
                    </VStack>
                </VStack>
                <ProfileDataList />
            </AppScreenWrapper>
        </Layout>
    );
};

const styles = {
    titleText: {
        fontWeight: 'bold',
    }
};

export default ProfileScreen;

