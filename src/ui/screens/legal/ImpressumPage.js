import React from "react";
import Layout from "@/ui/shared-components/Layout";
import LandingPageSectionWrapper from "@/ui/screens/landing-page/components/LandingPageSectionWrapper";
import { Typography } from "@mui/material";
import { VBox } from "@/ui/shared-components/LayoutBoxes";
import useTranslation from "@/ui/language/useTranslation";
import { useStore } from "@/ui/shared-components/ViewportUpdater";

const ImpressumPage = () => {
    const isDesktop = useStore((state) => state.isDesktop);
    const { t } = useTranslation();

    return (
        <Layout>
            <LandingPageSectionWrapper isDesktop={isDesktop}>
                <VBox sx={{
                    maxWidth: "1118px",
                    gap: isDesktop ? 6 : 4
                }}>
                    <Typography variant="h1">
                        Impressum
                    </Typography>
                    <VBox sx={{ gap: 1 }}>
                        <Typography variant="h6">
                            {t('home.legal.impressum.declaration5TMG')}
                        </Typography>
                        <VBox sx={{ gap: 0 }}>
                            <Typography variant="body1">
                                FörderFunke UG (haftungsbeschränkt)
                            </Typography>
                            <Typography variant="body1">
                                c/o Impact Hub Berlin, Rollbergstraße 28A
                            </Typography>
                            <Typography variant="body1">
                                12053 Berlin
                            </Typography>
                            <Typography variant="body1">
                                E-Mail: info@foerderfunke.org
                            </Typography>
                        </VBox>
                    </VBox>
                    <VBox sx={{ gap: 1 }}>
                        <Typography variant="h6">
                            {t('home.legal.impressum.representedBy')}
                        </Typography>
                        <VBox sx={{ gap: 0 }}>
                            <Typography variant="body1">
                                Benjamin Degenhart (Geschäftsführerin)
                            </Typography>
                            <Typography variant="body1">
                                Ben Gläser (Geschäftsführerin)
                            </Typography>
                        </VBox>
                    </VBox>
                    <VBox sx={{ gap: 1 }}>
                        <Typography variant="h6">
                            {t('home.legal.impressum.registered')}
                        </Typography>
                        <VBox sx={{ gap: 0 }}>
                            <Typography variant="body1">
                                {t('home.legal.impressum.court')}: Amtsgericht Berlin Charlottenburg
                            </Typography>
                            <Typography variant="body1">
                                {t('home.legal.impressum.number')}: HRB 267043 B
                            </Typography>
                            <Typography variant="body1">
                                {t('home.legal.impressum.vatID')}: DE369936723
                            </Typography>
                        </VBox>
                    </VBox>
                    <VBox sx={{ gap: 1 }}>
                        <Typography variant="h6">
                            {t('home.legal.impressum.responsible')}
                        </Typography>
                        <VBox sx={{ gap: 0 }}>
                            <Typography variant="body1">
                                Benjamin Degenhart
                            </Typography>
                            <Typography variant="body1">
                                Ben Gläser
                            </Typography>
                            <Typography variant="body1">
                                c/o Impact Hub Berlin, Rollbergstraße 28A
                            </Typography>
                            <Typography variant="body1">
                                12053 Berlin
                            </Typography>
                        </VBox>
                    </VBox>
                </VBox>
            </LandingPageSectionWrapper >
        </Layout>
    );
}
export default ImpressumPage;


// declation5TMG: "Information in accordance with § 5 TMG",
// representedBy: "Represented by",
// registered: "Registration",
// responsible: