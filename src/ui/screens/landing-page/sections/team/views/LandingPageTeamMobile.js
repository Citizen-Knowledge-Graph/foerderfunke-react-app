import React from "react";
import { MemberCardBen, MemberCardBenjamin } from "../components/LandingPageMembers";
import theme from "../../../../../../theme";
import { VBox, HBox } from "../../../../../shared-components/LayoutBoxes";
import { Typography } from "@mui/material";
import useTranslation from "../../../../../language/useTranslation";

const LandingPageTeamMobile = () => {
    const { t } = useTranslation();

    return (
        <VBox sx={{
            paddingTop: '64px',
            paddingBottom: '64px',
            backgroundColor: `${theme.palette.white.dark}40`,
            alignItems: 'center',
        }}>
            <VBox sx={{
                width: "100%",
                maxWidth: "1118px",
                gap: theme.spacing(10)
            }}>
                <HBox sx={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="h1" sx={{ color: theme.palette.black.main }}>
                        {t('home.connect.header')}
                    </Typography>
                </HBox>
                <VBox sx={{ gap: theme.spacing(10), alignItems: 'center' }}>
                    <MemberCardBenjamin />
                    <MemberCardBen />
                </VBox>
            </VBox>
        </VBox>
    )
}

export default LandingPageTeamMobile;
