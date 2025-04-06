import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import { HBox, VBox } from "../../../../../shared-components/LayoutBoxes";
import useTranslation from "../../../../../language/useTranslation";

const LandingPageTopSectionShared = () => {
    const { t } = useTranslation();
    const words = t("home.hero.headerBenefits");
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2500);
        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <VBox sx={{ gap: 4 }}>
            <VBox sx={{ alignItems: 'flex-start', gap: 1 }}>
                <HBox sx={{ alignItems: "flex-end", gap: 2, flexWrap: "wrap" }}>
                    <Typography variant="h1">{t("home.hero.headerShard1")}</Typography>
                    <Typography variant="h1" sx={{ color: 'blue.main', fontWeight: "bold", minWidth: '262px' }}>
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
            <Typography variant="body1" sx={{ textAlign: 'left' }}>{t("home.hero.subHeader")}</Typography>
        </VBox>
    );
};

export default LandingPageTopSectionShared;