import React from "react";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";
import useTranslation from "../../../../language/useTranslation";
import { HBox, VBox } from "../../../../shared-components/LayoutBoxes";
import theme from "../../../../../theme";

const LandingPageMission = ({ isDesktop }) => {
    const { t } = useTranslation();
    const starWoman = `${process.env.PUBLIC_URL}/assets/images/landing-page/flying-kid.svg`;

    return (
        <LandingPageSectionWrapper isDesktop={isDesktop} fullWidth={true}>
            <VBox sx={{
                backgroundColor: `${theme.palette.blue.dark}`,
                paddingTop: '104px',
                paddingBottom: '104px',
                paddingLeft: '96px',
                paddingRight: '96px',
                alignItems: 'center',
            }}>
                <HBox sx={{ alignItems: 'center', gap: theme.spacing(8) }}>
                    <VBox sx={{ gap: theme.spacing(6), maxWidth: '760px' }}>
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
                        <HBox sx={{ gap: theme.spacing(2) }}>
                            <Button variant="contained"
                                sx={{
                                    backgroundColor: theme.palette.blue.dark,
                                    color: theme.palette.white.main,
                                    borderColor: theme.palette.white.main,
                                    '&:hover': {
                                        backgroundColor: theme.palette.yellow.main,
                                        color: theme.palette.black.main,
                                        borderColor: theme.palette.yellow.main
                                    }
                                }}
                                component={Link}
                                to="/user-routing">{t('home.global.actionButton')}
                            </Button>
                        </HBox>
                    </VBox>
                    <VBox
                        sx={{
                            width: "50%",
                            boxSizing: "border-box",
                            alignItems: "flex-end"
                        }}
                    >
                        <img
                            src={starWoman}
                            alt="logo"
                            style={{
                                width: "523px",
                                marginRight: "-300px" // Moves the image partially off the screen while keeping the text-image gap
                            }}
                        />
                    </VBox>
                </HBox>
            </VBox>
        </LandingPageSectionWrapper>
    )
}

export default LandingPageMission;
