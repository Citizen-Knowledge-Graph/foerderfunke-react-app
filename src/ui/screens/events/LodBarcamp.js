import React from "react";
import Layout from "@/ui/shared-components/Layout";
import LandingPageSectionWrapper from "@/ui/screens/landing-page/components/LandingPageSectionWrapper";
import { VBox } from "@/ui/shared-components/LayoutBoxes";
import { Typography, Box } from "@mui/material";

const LodBarcamp = () => {
    return (
        <Layout>
            <LandingPageSectionWrapper>
                <VBox sx={{ maxWidth: '1118px', gap: { xs: 4, md: 6 } }}>
                    <Box
                        component="img"
                        src="/assets/images/events/lod-barcamp-bielefeld.png"
                        alt="LOD Barcamp Bielefeld Logo"
                        sx={{ width: { xs: 280 , md: 512 }, height: 'auto', alignSelf: 'center' }}
                    />
                    <VBox sx={{ gap: 2 }}>
                        <Typography variant="h2">Wer lädt ein und worum geht’s</Typography>
                        <Typography variant="body1">
                            Wir sind <strong>Helen Bielawa</strong> (Code for Bielefeld), <strong>Dénes Jäger</strong> (Open Knowledge Foundation Deutschland), <strong>Luis Moßburger</strong> (sparkup) sowie <strong>Ben Gläser</strong> &amp; <strong>Benjamin Degenhart</strong> (FörderFunke) und arbeiten mit Linked Open Data (LOD) - offen publizierten, standardisierten und verknüpfbaren Daten. Das ist wichtig, weil Informationen so leichter gefunden, kombiniert und wiederverwendet werden können - beispielsweise für transparentere Haushaltsdaten, wiederverwendbare Verwaltungsinformationen oder als Grundlage für KI-Anwendungen.
                        </Typography>
                    </VBox>

                    <VBox sx={{ gap: 1 }}>
                        <Typography variant="h2">Ziel</Typography>
                        <Typography variant="body1">
                            Wir möchten gemeinsam darüber sprechen, wie wir in Bielefeld und darüber hinaus Linked Open Data so einsetzen können, dass daraus echte Mehrwerte für Verwaltung und Zivilgesellschaft entstehen.
                        </Typography>
                    </VBox>

                    <VBox sx={{ gap: 1 }}>
                        <Typography variant="h2">Ablauf</Typography>
                        <Typography variant="body1">
                            Nach einer kurzen Einführung in das Thema teilen wir uns, wie bei Barcamps üblich, selbstorganisiert in verschiedene Sessions auf. Dort kann dann präsentiert, diskutiert oder auch entwickelt werden.
                        </Typography>
                    </VBox>

                    <VBox sx={{ gap: 1 }}>
                        <Typography variant="h2">Teilnahme</Typography>
                        <Typography variant="body1">
                            Kein technisches Vorwissen nötig - willkommen sind alle, die Daten nutzen, veröffentlichen oder an besseren Informationsflüssen interessiert sind.
                        </Typography>
                    </VBox>

                    <VBox sx={{ gap: 1 }}>
                        <Typography variant="body1">
                            LOD lebt von Kollaboration, Vernetzung und Nachnutzung. Darum laden wir ein, gemeinsam darüber zu sprechen, wie wir diese Qualitäten fördern können und welche Mühen und Mehrwerte damit einhergehen.
                        </Typography>
                    </VBox>

                    <VBox sx={{ gap: 1 }}>
                        <Typography variant="h2">Das ist Linked Open Data</Typography>
                        <Typography variant="body1">
                            <a href="https://odis-berlin.de/aktuelles/2024-03-28-linked-open-data/">Linked Open Data (LOD)</a> bedeutet, Daten offen und standardisiert so bereitzustellen, dass sie sich miteinander verknüpfen lassen. Technisch geschieht das mit Hilfe von Web Standards wie <strong>RDF</strong> (Resource Description Framework), <strong>URIs</strong> zur eindeutigen Identifikation von Datenobjekten und <strong>SPARQL</strong> als Abfragesprache. Dadurch können Informationen aus unterschiedlichen Quellen <strong>automatisch kombiniert</strong> und <strong>weiterverwendet</strong> werden. So entsteht ein vernetztes Datennetz, das Wissen sichtbar macht und neue Anwendungen ermöglicht – von transparenten Verwaltungsdaten bis zu innovativen Civic-Tech-Projekten.
                        </Typography>
                    </VBox>

                    <VBox sx={{ gap: 0.5 }}>
                        <Typography variant="h2">Datum</Typography>
                        <Typography variant="body1">Donnerstag, 27. November 2025, 9:00 - 16:20</Typography>
                    </VBox>

                    <VBox sx={{ gap: 0.5 }}>
                        <Typography variant="h2">Ort</Typography>
                        <Typography variant="body1"><strong>Open Innovation City Büro</strong>, Alter Markt 13, 33602 Bielefeld</Typography>
                    </VBox>

                    <VBox sx={{ gap: 0.5 }}>
                        <Typography variant="h2">Kosten</Typography>
                        <Typography variant="body1">Keine</Typography>
                    </VBox>

                    <VBox sx={{ gap: 1 }}>
                        <Typography variant="h2">Struktur</Typography>
                        <Typography variant="body1">Barcamp-Sessions werden vorab und/oder am Tag vorgestellt.</Typography>
                        <Typography variant="body1">Teilnehmer teilen sich je nach Interesse auf parallele stattfindende Sessions auf.</Typography>
                        <Typography variant="body1">Zusätzlich ein gemeinsamer Start und ein gemeinsames Ende.</Typography>
                    </VBox>

                    <VBox sx={{ gap: 1 }}>
                        <Typography variant="h2">Zeitplan Barcamp</Typography>
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

                    <VBox sx={{ gap: 1 }}>
                        <Typography variant="h2">Anmeldung</Typography>
                        <Typography variant="body1">Anmeldeformular <a href="https://forms.gle/FLwpCHZ9FgT7ANwt5">hier</a></Typography>
                    </VBox>

                    <VBox sx={{ gap: 1 }}>
                        <Typography variant="h2">Bereits geplante Inhalte</Typography>
                        <VBox sx={{ gap: 0 }}>
                            <Typography variant="body1">• Einführung in LOD mit Praxisbeispielen.</Typography>
                            <Typography variant="body1">• FörderFunke bringt als Thema die Daten mit, die gerade im
                                Rahmen des "BieleFunke"-Pilotprojekts entstehen. Wir möchten gerne mit euch Ideen sammeln, wofür die sonst noch so alles genutzt werden könnten.</Typography>
                            <Typography variant="body1">• Dénes bringt das Thema Haushaltsdaten als LOD
                                mit.</Typography>
                        </VBox>
                    </VBox>

                    <VBox sx={{ gap: 1 }}>
                        <Typography variant="h2">Dokumentation</Typography>
                        <Typography variant="body1">
                            <a href="https://pad.okfn.de/p/LOD-Barcamp-Bielefeld">Etherpad bei der OKF</a> - für Sessionvorschläge, Ablaufplan und alle Informationen, die wir vorab mit der Öffentlichkeit teilen wollen
                        </Typography>
                    </VBox>
                </VBox>
            </LandingPageSectionWrapper>
        </Layout>
    );
}

export default LodBarcamp;
