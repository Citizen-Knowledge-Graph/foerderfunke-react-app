import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import { VBox, HBox } from "../../../../../shared-components/LayoutBoxes";
import useTranslation from "../../../../../language/useTranslation";
import theme from "../../../../../../theme";

const LandingPageTopSectionMobile = () => {
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
        <VBox>
            <VBox alignItems={'center'}>
                <img src={starWoman} alt="logo" style={{ width: "328px" }} />
            </VBox>
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
        </VBox>
    );
}

export default LandingPageTopSectionMobile;
