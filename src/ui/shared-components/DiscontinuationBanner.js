import React from "react";
import { Link, Typography } from "@mui/material";
import { VBox } from "./LayoutBoxes";
import useTranslation, { pickLang } from "@/ui/language/useTranslation";

const GITHUB_URL = "https://github.com/Citizen-Knowledge-Graph";
const CONTACT_EMAIL = "benjamin.degenhart@foerderfunke.org";

// Kept out of translations.js: that file has no de_es section (de_es falls back
// to de wholesale), while pickLang supports a dedicated Einfache-Sprache variant.
const texts = {
    en: {
        part1: "FörderFunke has been discontinued and there will be no further updates — thanks for your interest! The code is ",
        codeLink: "open source",
        part2: ", and ",
        nameLink: "Benjamin",
        part3: " is happy to walk you through the code or the concept. Just get in touch."
    },
    de: {
        part1: "FörderFunke wurde eingestellt und es wird keine weiteren Updates geben – danke für euer Interesse! Der Code ist ",
        codeLink: "Open Source",
        part2: " und ",
        nameLink: "Benjamin",
        part3: " führt gerne durch Code oder Konzept. Meldet euch einfach."
    },
    de_es: {
        part1: "FörderFunke gibt es nicht mehr. Es gibt keine neuen Updates. Danke für Ihr Interesse! Der Code ist ",
        codeLink: "offen für alle",
        part2: ". ",
        nameLink: "Benjamin",
        part3: " zeigt Ihnen gerne den Code oder die Idee. Schreiben Sie ihm einfach."
    },
};

const linkStyle = { color: 'inherit', textDecoration: 'underline', fontWeight: 500 };

const DiscontinuationBanner = () => {
    const { language } = useTranslation();
    const text = pickLang(texts, language, texts.en);

    return (
        <VBox sx={{ backgroundColor: 'primary.main', padding: '8px 16px', alignItems: 'center' }}>
            <Typography variant="body2" sx={{ textAlign: 'center' }}>
                {text.part1}
                <Link href={GITHUB_URL} target="_blank" rel="noopener noreferrer" sx={linkStyle}>
                    {text.codeLink}
                </Link>
                {text.part2}
                <Link href={`mailto:${CONTACT_EMAIL}`} sx={linkStyle}>
                    {text.nameLink}
                </Link>
                {text.part3}
            </Typography>
        </VBox>
    );
};

export default DiscontinuationBanner;
