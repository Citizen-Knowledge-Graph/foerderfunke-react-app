import React, { useState, useEffect } from "react";
import { Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import useTranslation from "../../../../../language/useTranslation";
import { HBox, VBox } from "../../../../../shared-components/LayoutBoxes";
import theme from "../../../../../../theme";
import { Link } from "react-router-dom";

const LandingPageTopSectionDesktop = () => {
    const { t } = useTranslation();
    const starWoman = `${process.env.PUBLIC_URL}/assets/images/landing-page/star_woman.svg`;

    const words = t("home.hero.headerBenefits");
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2500);
        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <HBox justifyContent="space-between" alignItems="center">
            <VBox sx={{ width: "50%", boxSizing: "border-box", alignItems: "flex-end" }}>
                <VBox sx={{ maxWidth: "600px", gap: theme.spacing(8) }}>
                    <VBox sx={{ gap: theme.spacing(1) }}>
                        <VBox sx={{ gap: theme.spacing(0) }}>
                            <HBox>
                                <Typography variant="h1">{t("home.hero.headerShard1")}</Typography>
                                <Typography variant="h1" sx={{ color: theme.palette.blue.main, fontWeight: "bold", whiteSpace: "nowrap" }}>
                                    <motion.span
                                        key={words[currentWordIndex]}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 1.0 }}
                                    >
                                        {words[currentWordIndex]}
                                    </motion.span>
                                </Typography>
                            </HBox>
                            <Typography variant="h1">{t("home.hero.headerShard2")}</Typography>
                        </VBox>
                        <Typography variant="body1">{t("home.hero.subHeader")}</Typography>
                    </VBox>
                    <HBox sx={{ gap: theme.spacing(2) }}>
                        <Button variant="contained"
                            sx={{ 
                                backgroundColor: theme.palette.yellow.main,
                                color: theme.palette.black.main,
                                borderColor: theme.palette.yellow.main,
                                '&:hover': {
                                    backgroundColor: theme.palette.black.main,
                                    color: theme.palette.white.main,
                                    borderColor: theme.palette.black.main
                                }
                            }}
                            component={Link}
                            to="/user-routing">{t('home.global.actionButton')}
                        </Button>
                    </HBox>
                </VBox>
            </VBox>
            <VBox sx={{ width: "50%", boxSizing: "border-box", alignItems: "flex-end" }}>
                <img src={starWoman} alt="logo" style={{ width: "506px" }} />
            </VBox>
        </HBox>
    );
}

export default LandingPageTopSectionDesktop;