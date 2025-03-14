import React from 'react';
import { Typography, Button } from "@mui/material";
import userManager from "../../../../core/managers/userManager";
import ProfileDataList from "../../profile-screen/components/ProfileDataList";
import useTranslation from "../../../language/useTranslation";
import { VBox, HBox } from "../../../shared-components/LayoutBoxes";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useStore } from "../../../shared-components/ViewportUpdater";


const ProfileSectionCompleted = () => {
    const { t } = useTranslation();
    const isDesktop = useStore((state) => state.isDesktop);
    const theme = useTheme();
    const userProfile = userManager.retrieveUserData("ff:quick-check-user");
    const privacyBox = `${process.env.PUBLIC_URL}/assets/images/application/quick-check-completed.svg`;
    const gap = isDesktop ? theme.spacing(8) : theme.spacing(4);

    return (
        <VBox sx={{ gap: gap }}>
            {
                !isDesktop && (
                    <HBox sx={{ justifyContent: 'center' }}>
                        <img src={privacyBox} alt="logo" style={{ width: "232px" }} />
                    </HBox>
                )
            }
            <HBox sx={{ alignItems: 'center', flexWrap: 'wrap' }}>
                <HBox sx={{ flex: 5 }}>
                    <Typography variant="h1">
                        {t('app.qsComplete.header')}
                    </Typography>
                </HBox>
                {
                    isDesktop && (
                        <HBox sx={{ flex: 1 }}>
                            <img src={privacyBox} alt="logo" style={{ width: "232px" }} />
                        </HBox>
                    )
                }
            </HBox>
            {userProfile && (
                <ProfileDataList />
            )}
            <HBox>
                <Button
                    sx={{
                        padding: '16px 28px',
                        backgroundColor: theme.palette.blue.dark,
                        color: theme.palette.white.main,
                    }}
                    variant='contained'
                    component={Link}
                    to={`/eligibility-overview`}
                >
                    <Typography variant="body1" sx={{ color: 'inherit' }}>
                        {t('app.qsComplete.discoverBtn')}
                    </Typography>
                </Button>
            </HBox>
        </VBox>
    );
};

export default ProfileSectionCompleted;
