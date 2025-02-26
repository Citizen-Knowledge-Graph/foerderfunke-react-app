import React from "react";
import { MemberCardBen, MemberCardBenjamin } from "../components/LandingPageMembers";
import theme from "../../../../../../theme";
import { VBox, HBox } from "../../../../../shared-components/LayoutBoxes";
import { Typography } from "@mui/material";
import useTranslation from "../../../../../language/useTranslation";

const LandingPageTeamDesktop = () => {
    const { t } = useTranslation();

    return (
        <VBox sx={{
            paddingTop: '104px',
            paddingBottom: '104px',
            paddingLeft: '96px',
            paddingRight: '96px',
            backgroundColor: `${theme.palette.white.dark}40`,
            borderRadius: theme.shape.borderRadius,
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
                <HBox sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <MemberCardBenjamin />
                    <MemberCardBen />
                </HBox>
            </VBox>
        </VBox>
    )
}

export default LandingPageTeamDesktop;
