import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import { keyframes } from "@mui/system";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";
import useTranslation from "@/ui/language/useTranslation";
import { HBox, VBox } from "@/ui/shared-components/LayoutBoxes";
import RegularButton from "@/ui/shared-components/buttons/RegularButton";
import { useLanguageStore } from '@/ui/storage/useLanguageStore';

const flipIn = keyframes`
  from { transform: rotateX(-90deg); opacity: 0; }
  to   { transform: rotateX(0deg);  opacity: 1; }
`;

const minWidth = {
    de: "14.5ch",
    de_es: "14.5ch",
    en: "19ch",
};

const LandingPageFact = () => {
    const { t } = useTranslation();
    const language = useLanguageStore((state) => state.language);


    const rotatingWord = t("home.fact.rotatingWords");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setIndex((i) => (i + 1) % rotatingWord.length);
        }, 2000);
        return () => clearInterval(id);
    });

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
                        <VBox sx={{
                            gap: 1,
                            width: "100%",
                            alignItems: { xs: "flex-start", md: "center" }
                        }}>
                            <Typography variant="h1" color="pink.main">
                                {t("home.fact.header")}
                            </Typography>
                            <Typography
                                variant="h4"
                                sx={{
                                    minWidth: minWidth[language] || "14.5ch",
                                    textAlign: { xs: "left", md: "center" },
                                    fontWeight: 400,
                                    color: "black.main",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                    flexWrap: "wrap",
                                }}
                            >
                                {t("home.fact.headerText")}{" "}
                                <Box
                                    component="span"
                                    key={index}
                                    sx={{
                                        display: "inline-block",
                                        transformOrigin: "50% 80%",
                                        animation: `${flipIn} 600ms ease`,
                                    }}
                                >
                                    <Typography variant="h2" sx={{ fontWeight: "bold", color: "pink.main" }}>
                                        {rotatingWord[index]}
                                    </Typography>
                                </Box>
                            </Typography>
                        </VBox>
                        <HBox>
                            <Typography variant="body1" sx={{ textAlign: { xs: "left", md: "center" } }}>
                                {t("home.fact.text")}
                            </Typography>
                        </HBox>
                    </VBox>

                    <HBox>
                        <RegularButton variant={"blackContained"} link={"/user-routing"} />
                    </HBox>
                </VBox>
            </VBox>
        </LandingPageSectionWrapper>
    );
};

export default LandingPageFact;