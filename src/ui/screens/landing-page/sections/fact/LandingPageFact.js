import React from "react";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";
import useTranslation from "../../../../language/useTranslation";
import { HBox, VBox } from "../../../../shared-components/LayoutBoxes";

const LandingPageFact = () => {
    const { t } = useTranslation();

    return (
        <LandingPageSectionWrapper>
            <VBox
                sx={(theme) => ({
                    px: { xs: "32px", md: "96px" },
                    py: { xs: "32px", md: "104px" },
                    backgroundColor: `${theme.palette.white.dark}40`,
                    borderRadius: theme.shape.borderRadius,
                })}
            >
                <VBox
                    sx={{
                        gap: 6,
                        alignItems: { xs: "flex-start", md: "center" },
                    }}
                >
                    <VBox
                        sx={{
                            maxWidth: "620px",
                            alignItems: "center",
                            gap: 4,
                        }}
                    >
                        <VBox sx={{ width: "100%",alignItems: { xs: "flex-start", md: "center" } }}>
                            <Typography variant="h1" color="pink.main">
                                15.000.000.000 €
                            </Typography>
                            <Typography
                                variant="h4"
                                sx={{
                                    textAlign: { xs: "left", md: "center" },
                                    fontWeight: 400,
                                    maxWidth: "400px",
                                    color: "black.main",
                                }}
                            >
                                {t("home.fact.subHeader")}
                            </Typography>
                        </VBox>
                        <HBox>
                            <Typography
                                variant="body1"
                                sx={{ textAlign: { xs: "left", md: "center" } }}
                            >
                                {t("home.fact.text")}
                            </Typography>
                        </HBox>
                    </VBox>
                    <HBox sx={{ gap: 2 }}>
                        <Button
                            variant="contained"
                            sx={{
                                "&:hover": {
                                    backgroundColor: "yellow.main",
                                    color: "black.main",
                                    borderColor: "yellow.main",
                                },
                            }}
                            component={Link}
                            to="/user-routing"
                        >
                            {t("home.global.actionButton")}
                        </Button>
                    </HBox>
                </VBox>
            </VBox>
        </LandingPageSectionWrapper>
    );
};

export default LandingPageFact;