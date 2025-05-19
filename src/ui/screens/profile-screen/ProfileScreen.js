import React from 'react';
import Layout from "../../shared-components/Layout";
import AppScreenWrapper from "../../shared-components/app-screen-wrapper/AppScreenWrapper";
import { useStore } from "../../shared-components/ViewportUpdater";
import { Typography } from "@mui/material";
import ProfileDataList from "./components/ProfileDataList";
import useTranslation from "../../language/useTranslation";
import { HBox, VBox } from "../../shared-components/LayoutBoxes";

const ProfileScreen = () => {
    const { t } = useTranslation();
    const isDesktop = useStore((state) => state.isDesktop);
    const fileIcon = `${process.env.PUBLIC_URL}/assets/images/application/locally-stored-profile.svg`;
    const gap = isDesktop ? 8 : 4;
    const wrap = isDesktop ? 'nowrap' : 'wrap';

    return (
        <Layout isApp={true} logo={true}>
            <AppScreenWrapper isDesktop={isDesktop} back={true}>
                <VBox sx={{ gap: gap }}>
                    <HBox gap={1} sx={{ flexWrap: wrap, justifyContent: 'space-between' }}>
                        {
                            !isDesktop && (
                                <img src={fileIcon}
                                    alt="logo"
                                    style={{ width: "140px"}}
                                />
                            )
                        }
                        <Typography variant="h1">
                            {t('app.profile.header')}
                        </Typography>
                        {
                            isDesktop && (
                                <img src={fileIcon} alt="logo" style={{ 
                                    width: "169px",
                                    marginTop: "-75px",
                                }} />
                            )
                        }
                    </HBox>
                    <ProfileDataList />
                </VBox>
            </AppScreenWrapper>
        </Layout>
    );
};

export default ProfileScreen;

