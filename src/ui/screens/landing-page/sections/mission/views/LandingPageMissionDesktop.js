import React from "react";
import { Typography } from "@mui/material";
import useTranslation from "@/ui/language/useTranslation";
import { HBox, VBox } from "@/ui/shared-components/LayoutBoxes";
import theme from "@/theme";
import RegularButton from "@/ui/shared-components/RegularButton";

const LandingPageMissionDesktop = () => {
    const { t } = useTranslation();
    const starWoman = `${process.env.PUBLIC_URL}/assets/images/landing-page/flying-kid.png`;

    return (
        <VBox sx={{
            backgroundColor: `${theme.palette.blue.dark}`,
            paddingTop: '104px',
            paddingBottom: '104px',
            paddingLeft: '96px',
            paddingRight: '96px',
            marginTop: '96px',
            marginBottom: '96px',
            alignItems: 'center',
        }}>
            <HBox sx={{ alignItems: 'center', gap: theme.spacing(8) }}>
                <VBox sx={{
                    flex: 2,
                    gap: theme.spacing(6)
                }}>
                    <Typography variant="h1" sx={{ color: theme.palette.white.main }}>
                        {t('home.mission.header')}
                    </Typography>
                    <HBox sx={{ gap: theme.spacing(8) }}>
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
                    </HBox>
                    <RegularButton variant="whiteOutlinedBlue" link={'/user-routing'} />
                </VBox>
                <VBox
                    sx={{
                        flex: 1,
                        boxSizing: "border-box",
                        alignItems: "center"
                    }}
                >
                    <img
                        src={starWoman}
                        alt="logo"
                        style={{
                            width: "523px",
                            marginRight: "-300px"
                        }}
                    />
                </VBox>
            </HBox>
        </VBox>
    )
}

export default LandingPageMissionDesktop;
