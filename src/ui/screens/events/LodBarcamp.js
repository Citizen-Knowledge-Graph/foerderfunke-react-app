import React from "react";
import Layout from "@/ui/shared-components/Layout";
import LandingPageSectionWrapper from "@/ui/screens/landing-page/components/LandingPageSectionWrapper";
import { VBox, HBox } from "@/ui/shared-components/LayoutBoxes";
import { Typography, Box } from "@mui/material";
import RegularButton from "@/ui/shared-components/buttons/RegularButton";
import EastIcon from '@mui/icons-material/East';
import theme from "@/theme";
import { useStore } from "@/ui/shared-components/ViewportUpdater";

const LodBarcamp = () => {
    const isDesktop = useStore((state) => state.isDesktop);

    return (
        <Layout>
            <VBox sx={{ width: '100%' }}>
                <LandingPageSectionWrapper>
                    <VBox sx={{ mb: 4, gap: { xs: 4, md: 8 } }}>
                        <HBox sx={{ minHeight: { md: "70vh"}, gap: 2, flexDirection: { xs: 'column', md: 'row' } }}>
                            <VBox sx={{ gap: { xs: 2, md: 4 }, flex: 1 }}>
                                <VBox sx={{ gap: 1 }}>
                                    <Typography variant="h1">Barcamp Bielefeld</Typography>
                                    <Typography variant="h1" sx={{ color: "blue.main" }}>Linked Open Data</Typography>
                                </VBox>
                                <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
                                    Am 27. November 2025
                                </Typography>
                                <Typography variant="body1">
                                    <strong>Code for Bielefeld</strong>, <strong>Open Knowledge Foundation Deutschland</strong>, <strong>sparkup</strong> und <strong>FörderFunke</strong> laden ein zum Barcamp rund um das Thema Linked Open Data (LOD) in Bielefeld.
                                </Typography>
                                <RegularButton
                                    text={"Hier zur anmeldung"}
                                    variant={'blueContained'}
                                    link="https://forms.gle/FLwpCHZ9FgT7ANwt5"
                                    endIcon={<EastIcon sx={{ fontSize: '16px' }} />}
                                />
                            </VBox>
                            {isDesktop && (
                                <VBox sx={{ flex: 1, alignItems: 'center' }}>
                                    <Box
                                        component="img"
                                        src="/assets/images/events/lod-barcamp-bielefeld.png"
                                        alt="LOD Barcamp Bielefeld Logo"
                                        sx={{ width: { xs: '100%', md: 475 }, height: 'auto' }}
                                    />
                                </VBox>
                            )}
                        </HBox>
                        <VBox
                            sx={{
                                backgroundColor: 'greyTransparent.main',
                                borderTop: `1px solid ${theme.palette.grey.light}`,
                                borderRadius: theme.shape.borderRadius,
                                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
                                padding: { xs: '32px 20px', md: '32px' },
                                gap: { xs: 2, md: 4 },
                                flex: 1,
                            }}
                        >
                            <Typography variant="h1" sx={{ fontWeight: '400' }}>Das wichtigste in Kürze</Typography>
                            <VBox
                                sx={{
                                    backgroundColor: 'white.main',
                                    padding: { xs: '32px 20px', md: '32px' },
                                    borderRadius: theme.shape.borderRadius,
                                    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
                                    gap: 2,
                                }}
                            >
                                <VBox>
                                    <Typography variant="h2" sx={{ color: "pink.main" }}>Was ist das Ziel?</Typography>
                                    <Typography variant="body1">
                                        Wir möchten gemeinsam darüber sprechen, wie wir in Bielefeld und darüber hinaus Linked Open Data so einsetzen können, dass daraus echte Mehrwerte für Verwaltung und Zivilgesellschaft entstehen.
                                    </Typography>
                                </VBox>
                                <VBox>
                                    <Typography variant="h2" sx={{ color: "pink.main" }}>Ablauf</Typography>
                                    <Typography variant="body1">
                                        Nach einer kurzen Einführung in das Thema teilen wir uns, wie bei Barcamps üblich, selbstorganisiert in verschiedene Sessions auf. Dort kann dann präsentiert, diskutiert oder auch entwickelt werden.
                                    </Typography>
                                </VBox>
                                <VBox>
                                    <Typography variant="h2" sx={{ color: "pink.main" }}>Teilnahme</Typography>
                                    <Typography variant="body1">
                                        Kein technisches Vorwissen nötig - willkommen sind alle, die Daten nutzen, veröffentlichen oder an besseren Informationsflüssen interessiert sind.
                                    </Typography>
                                </VBox>
                                <VBox>
                                    <Typography variant="body1">
                                        LOD lebt von Kollaboration, Vernetzung und Nachnutzung. Darum laden wir ein, gemeinsam darüber zu sprechen, wie wir diese Qualitäten fördern können und welche Mühen und Mehrwerte damit einhergehen.
                                    </Typography>
                                </VBox>
                                <VBox>
                                    <Typography variant="h2" sx={{ color: "pink.main" }}>Das ist Linked Open Data</Typography>

                                    <Typography variant="body1">
                                        <a href="https://odis-berlin.de/aktuelles/2024-03-28-linked-open-data/">Linked Open Data (LOD)</a> bedeutet, Daten offen und standardisiert so bereitzustellen, dass sie sich miteinander verknüpfen lassen. Technisch geschieht das mit Hilfe von Web Standards wie <strong>RDF</strong> (Resource Description Framework), <strong>URIs</strong> zur eindeutigen Identifikation von Datenobjekten und <strong>SPARQL</strong> als Abfragesprache. Dadurch können Informationen aus unterschiedlichen Quellen <strong>automatisch kombiniert</strong> und <strong>weiterverwendet</strong> werden. So entsteht ein vernetztes Datennetz, das Wissen sichtbar macht und neue Anwendungen ermöglicht – von transparenten Verwaltungsdaten bis zu innovativen Civic-Tech-Projekten.
                                    </Typography>
                                </VBox>
                            </VBox>

                            <VBox
                                sx={{
                                    backgroundColor: 'white.main',
                                    padding: { xs: '32px 20px', md: '32px' },
                                    borderRadius: theme.shape.borderRadius,
                                    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
                                    gap: 4,
                                }}
                            >
                                <VBox sx={{ gap: 2 }}>
                                    <VBox>
                                        <Typography variant="h2" sx={{ color: "pink.main" }}>Datum</Typography>
                                        <Typography variant="body1">Donnerstag, 27. November 2025, 9:00 - 16:20</Typography>
                                    </VBox>
                                    <VBox>
                                        <Typography variant="h2" sx={{ color: "pink.main" }}>Ort</Typography>
                                        <Typography variant="body1"><strong>Open Innovation City Büro</strong>, Alter Markt 13, 33602 Bielefeld</Typography>
                                    </VBox>
                                    <VBox>
                                        <Typography variant="h2" sx={{ color: "pink.main" }}>Kosten</Typography>
                                        <Typography variant="body1">Keine</Typography>
                                    </VBox>
                                    <VBox>
                                        <Typography variant="h2" sx={{ color: "pink.main" }}>Struktur</Typography>
                                        <Typography variant="body1">Barcamp-Sessions werden vorab und/oder am Tag vorgestellt.</Typography>
                                        <Typography variant="body1">Teilnehmer teilen sich je nach Interesse auf parallele stattfindende Sessions auf.</Typography>
                                        <Typography variant="body1">Zusätzlich ein gemeinsamer Start und ein gemeinsames Ende.</Typography>
                                    </VBox>

                                    <VBox sx={{ gap: 1 }}>
                                        <Typography variant="h2" sx={{ color: "pink.main" }}>Zeitplan Barcamp</Typography>
                                        <VBox sx={{ gap: 0 }}>
                                            <Typography variant="body1">9:00 – Ankommen und Kaffee</Typography>
                                            <Typography variant="body1">9:30 – 10:00 Willkommen und Öffnungssession FörderFunke x Bielefeld</Typography>
                                            <Typography variant="body1">10:00 – 10:15 Sessionplanung</Typography>
                                            <Typography variant="body1">10:15 – 10:30 Puffer/Pause</Typography>
                                            <Typography variant="body1">10:30 – 11:45 erste Sessions</Typography>
                                            <Typography variant="body1">12:00 – 12:45 zweite Session</Typography>
                                            <Typography variant="body1">12:45 – 13:45 Mittagspause</Typography>
                                            <Typography variant="body1">13:45 – 14:45 dritte Sessions</Typography>
                                            <Typography variant="body1">15:00 – 16:00 vierte Sessions</Typography>
                                            <Typography variant="body1">16:00 – 16:20 Abschluss</Typography>
                                        </VBox>
                                    </VBox>
                                    <VBox>
                                        <Typography variant="h2" sx={{ color: "pink.main" }}>Bereits geplante Inhalte</Typography>
                                        <VBox sx={{ gap: 0 }}>
                                            <Typography variant="body1">• Einführung in LOD mit Praxisbeispielen.</Typography>
                                            <Typography variant="body1">• FörderFunke bringt als Thema die Daten mit, die gerade im
                                                Rahmen des "BieleFunke"-Pilotprojekts entstehen. Wir möchten gerne mit euch Ideen sammeln, wofür die sonst noch so alles genutzt werden könnten.</Typography>
                                            <Typography variant="body1">• Dénes bringt das Thema Haushaltsdaten als LOD
                                                mit.</Typography>
                                        </VBox>
                                    </VBox>
                                    <VBox>
                                        <Typography variant="h2" sx={{ color: "pink.main" }}>Dokumentation</Typography>
                                        <Typography variant="body1">
                                            <a href="https://pad.okfn.de/p/LOD-Barcamp-Bielefeld">Etherpad bei der OKF</a> - für Sessionvorschläge, Ablaufplan und alle Informationen, die wir vorab mit der Öffentlichkeit teilen wollen
                                        </Typography>
                                    </VBox>
                                </VBox>
                                <RegularButton
                                    text={"Hier zur anmeldung"}
                                    variant={'blueContained'}
                                    link="https://forms.gle/FLwpCHZ9FgT7ANwt5"
                                    endIcon={<EastIcon sx={{ fontSize: '16px' }} />}
                                />
                            </VBox>
                        </VBox>
                    </VBox>
                </LandingPageSectionWrapper>
            </VBox>
        </Layout >
    );
}

export default LodBarcamp;
