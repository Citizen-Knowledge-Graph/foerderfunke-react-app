import React from "react";
import { Typography } from "@mui/material";
import { VBox } from "@/ui/shared-components/LayoutBoxes";
import useTranslation from "@/ui/language/useTranslation";

const LandingPageTopSectionSharedVariant = ({ runway }) => {
    const { t } = useTranslation();

    return (
        <VBox sx={{ gap: 4 }}>
            <VBox sx={{ alignItems: 'flex-start', gap: 1 }}>
                <Typography variant="h2" sx={{ color: 'pink.main' }}>{t(`home.hero.${runway}.headerPilot`)}</Typography>
                <Typography variant="h1">{t(`home.hero.${runway}.headerShard1`)}</Typography>
            </VBox>
            <Typography variant="body1" sx={{ textAlign: 'left' }}>{t(`home.hero.${runway}.subHeader`)}</Typography>
        </VBox>
    );
};

export default LandingPageTopSectionSharedVariant;