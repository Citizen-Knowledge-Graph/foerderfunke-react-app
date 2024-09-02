import React from 'react';
import Layout from "../../components/Layout";
import AppScreenWrapper from "../../components/AppScreenWrapper";
import {useStore} from "../../components/ViewportUpdater";
import globalStyles from "../../styles/styles";
import VStack from "../../components/VStack";
import {Typography} from "@mui/material";
import HStack from "../../components/HStack";
import CircleIcon from "@mui/icons-material/Circle";

const ProfileScreen = () => {
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
                    <VStack alignItems={'flex-start'} gap={3}>
                        <VStack gap={1}>
                            <Typography sx={{...styles.titleText, fontSize: titleFontSize}}>
                                Your profile
                            </Typography>
                        </VStack>
                       <VStack gap={1}>
                            <Typography sx={styles.subTitleCardText}>
                                Here you can see and edit your profile information.
                            </Typography>
                        </VStack>
                    </VStack>
                </VStack>
            </AppScreenWrapper>
        </Layout>
    );
};

const styles = {
    titleText: {
        fontWeight: 'bold',
    },
    subTitleCardText: {
        fontSize: '16px',
        fontWeight: '400'
    },
    circleText: {
        fontSize: '12px'
    },
    enterInfoBox: {
        padding: '12px',
        borderRadius: '12px',
        backgroundColor:
        globalStyles.primaryColorTransparent,
    },
    enterInfoText: {
        fontSize: '12px'
    },
    liableInfoBox: {
        padding: '12px',
        borderRadius: '12px',
        backgroundColor:
        globalStyles.colorSteelBlueTransparent,
    },
    liableInfoText: {
        fontSize: '14px'
    }
};

export default ProfileScreen;

