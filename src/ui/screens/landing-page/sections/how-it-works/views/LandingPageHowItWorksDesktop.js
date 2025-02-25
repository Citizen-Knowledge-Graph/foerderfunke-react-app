import React, { useState } from "react";
import theme from "../../../../../../theme";
import { HBox, VBox } from "../../../../../shared-components/LayoutBoxes";
import LandingPageInfoCard from "../components/LandingPageInfoCard";
import useTranslation from "../../../../../language/useTranslation";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const LandingPageHowItWorksDesktop = () => {
    const { t } = useTranslation();
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const appLaptop = `${process.env.PUBLIC_URL}/assets/images/landing-page/macbook-app-showcase.svg`;

    const handleMouseEnter = (index) => setHoveredIndex(index);
    const handleMouseLeave = () => setHoveredIndex(null);

    return (
        <VBox sx={{ width: "100%", alignItems: 'center' }}>
            <HBox gap={10} sx={{
                maxWidth: "1118px",
                justifyContent: 'center',
                alignItems: 'flex-end',
            }}>
                <VBox gap={9}>
                    <Typography variant="h1">{t('home.howItWorks.header')}</Typography>
                    <VBox gap={3}>
                        <LandingPageInfoCard
                            title={t('home.howItWorks.part1Header')}
                            text={t('home.howItWorks.part1Text')}
                            onMouseEnter={() => handleMouseEnter(0)}
                            onMouseLeave={handleMouseLeave}
                            hovered={hoveredIndex === 0}
                        />
                        <LandingPageInfoCard
                            title={t('home.howItWorks.part2Header')}
                            text={t('home.howItWorks.part2Text')}
                            onMouseEnter={() => handleMouseEnter(1)}
                            onMouseLeave={handleMouseLeave}
                            hovered={hoveredIndex === 1}
                        />
                        <LandingPageInfoCard
                            title={t('home.howItWorks.part3Header')}
                            text={t('home.howItWorks.part3Text')}
                            onMouseEnter={() => handleMouseEnter(2)}
                            onMouseLeave={handleMouseLeave}
                            hovered={hoveredIndex === 2}
                        />
                    </VBox>
                </VBox>
                <VBox sx={{ gap: theme.spacing(6), alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                    <img src={appLaptop} alt="logo" style={{ width: "506px" }} />
                    <HBox sx={{ gap: theme.spacing(2) }}>
                        <Button variant="contained"
                            sx={{
                                backgroundColor: theme.palette.blue.dark,
                                borderColor: theme.palette.blue.dark,
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
            </HBox>
        </VBox>
    )
}

export default LandingPageHowItWorksDesktop;
