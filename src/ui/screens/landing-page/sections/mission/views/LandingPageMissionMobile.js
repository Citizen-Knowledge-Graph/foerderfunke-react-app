import React from "react";
import { Typography } from "@mui/material";
import useTranslation from "@/ui/language/useTranslation";
import { HBox, VBox } from "@/ui/shared-components/LayoutBoxes";
import theme from "@/theme";
import RegularButton from "@/ui/shared-components/buttons/RegularButton";

const LandingPageMissionMobile = () => {
    const { t } = useTranslation();
    const starWoman = `${process.env.PUBLIC_URL}/assets/images/landing-page/flying-kid.png`;

    return (
        <VBox sx={{
            backgroundColor: `${theme.palette.blue.dark}`,
            paddingTop: '64px',
            paddingBottom: '64px',
            paddingLeft: '32px',
            paddingRight: '32px',
            marginTop: '32px',
            marginBottom: '32px',
            alignItems: 'center',
        }}>
            <VBox sx={{ gap: theme.spacing(8), alignItems: 'center' }}>
                <img
                    src={starWoman}
                    alt="logo"
                    style={{ maxWidth: "330px" }}
                />
                <HBox sx={{ alignItems: 'center', gap: theme.spacing(8) }}>
                    <VBox sx={{ gap: theme.spacing(6) }}>
                        <Typography variant="h1" sx={{ color: theme.palette.white.main }}>
                            {t('home.mission.header')}
                        </Typography>
                        <VBox sx={{ gap: theme.spacing(4) }}>
                            <VBox>
                                <Typography variant="h4" sx={{ color: theme.palette.white.main }}>
                                    {t('home.mission.part1Header')}
                                </Typography>
                                <Typography variant="body1" sx={{ color: theme.palette.white.main }}>
                                    {t('home.mission.part1Text')}
                                </Typography>
                            </VBox>
                            <VBox>
                                <Typography variant="h4" sx={{ color: theme.palette.white.main }}>
                                    {t('home.mission.part2Header')}
                                </Typography>
                                <Typography variant="body1" sx={{ color: theme.palette.white.main }}>
                                    {t('home.mission.part2Text')}
                                </Typography>
                            </VBox>
                        </VBox>
                    </VBox>
                </HBox>
                <RegularButton variant="whiteOutlinedBlue" link={'/user-routing'} />
            </VBox>
        </VBox>
    )
}

export default LandingPageMissionMobile;
