import React from "react";
import Layout from "@/ui/shared-components/Layout";
import LandingPageSectionWrapper from "@/ui/screens/landing-page/components/LandingPageSectionWrapper";
import { VBox, HBox } from "@/ui/shared-components/LayoutBoxes";
import { Typography, Box, Link } from "@mui/material";
import RegularButton from "@/ui/shared-components/buttons/RegularButton";
import EastIcon from '@mui/icons-material/East';
import theme from "@/theme";
import { useStore } from "@/ui/shared-components/ViewportUpdater";

const LodBarcamp = () => {
    const isDesktop = useStore((state) => state.isDesktop);

    const schedule = [
        { time: '09:00', desc: 'Ankommen und Kaffee' },
        { time: '09:30 – 10:00', desc: 'Willkommen und Öffnungssession FörderFunke x Bielefeld' },
        { time: '10:00 – 10:15', desc: 'Sessionplanung' },
        { time: '10:15 – 10:30', desc: 'Puffer/Pause' },
        { time: '10:30 – 11:45', desc: '1. Runde Sessions' },
        { time: '12:00 – 12:45', desc: '2. Runde Sessions' },
        { time: '12:45 – 13:45', desc: 'Mittagspause' },
        { time: '13:45 – 14:45', desc: '3. Runde Sessions' },
        { time: '15:00 – 16:00', desc: '4. Runde Sessions' },
        { time: '16:00 – 16:20', desc: 'Abschluss' },
    ];

    return (
        <Layout>
            <VBox sx={{ width: '100%' }}>
                <LandingPageSectionWrapper>
                    <VBox sx={{ mb: 4, gap: { xs: 4, md: 8 } }}>
                        <HBox sx={{ gap: 2, flexDirection: { xs: 'column', md: 'row' } }}>
                            <VBox sx={{ gap: { xs: 2, md: 4 }, flex: 1 }}>
                                <VBox sx={{ gap: 1 }}>
                                    <Typography variant="h1">Barcamp Bielefeld</Typography>
                                    <Typography variant="h1" sx={{ color: "blue.main" }}>Linked Open Data</Typography>
                                </VBox>
                                <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
                                    Am 27. November 2025
                                </Typography>
                                <Typography variant="body1">
                                    <Link
                                        href="https://codefor.de/bielefeld/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{ cursor: 'pointer', color: 'inherit' }}
                                    >
                                        Code for Bielefeld
                                    </Link>
                                    {" "}
                                    <Link
                                        href="https://okfn.de/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{ cursor: 'pointer', color: 'inherit' }}
                                    >
                                        Open Knowledge Foundation Deutschland
                                    </Link>
                                    ,{" "}
                                    <Link
                                        href="https://spark-up.de/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{ cursor: 'pointer', color: 'inherit' }}
                                    >
                                        sparkup
                                    </Link>
                                    {" "}und{" "}
                                    <Link
                                        href="https://foerderfunke.org/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{ cursor: 'pointer', color: 'inherit' }}
                                    >
                                        FörderFunke
                                    </Link>
                                    {" "}
                                    laden ein zum Barcamp rund um das Thema Linked Open Data (LOD) in Bielefeld.
                                </Typography>
                                <RegularButton
                                    text={"Hier zur Anmeldung"}
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
                            <Typography variant="h1" sx={{ fontWeight: '400' }}>Das Wichtigste in Kürze</Typography>
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
                                        Wir möchten gemeinsam darüber sprechen, wie wir in Bielefeld und darüber hinaus LOD so einsetzen können, dass daraus echte Mehrwerte für Verwaltung und Zivilgesellschaft entstehen.
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
                                        LOD lebt von Kollaboration, Vernetzung und Nachnutzung. Darum laden wir ein, gemeinsam darüber zu sprechen, wie wir diese Qualitäten fördern können und welche Mühen und Mehrwerte damit einhergehen.
                                    </Typography>
                                </VBox>
                                <VBox>
                                    <Typography variant="h2" sx={{ color: "pink.main" }}>Das ist Linked Open Data</Typography>
                                    <Typography variant="body1">
                                        <a href="https://odis-berlin.de/aktuelles/2024-03-28-linked-open-data/">Linked Open Data</a> bedeutet, Daten offen und standardisiert so bereitzustellen, dass sie sich miteinander verknüpfen lassen. Technisch geschieht das mit Hilfe von Web Standards wie <strong>RDF</strong> (Resource Description Framework), <strong>URIs</strong> zur eindeutigen Identifikation von Datenobjekten und <strong>SPARQL</strong> als Abfragesprache. Dadurch können Informationen aus unterschiedlichen Quellen <strong>automatisch kombiniert</strong> und <strong>weiterverwendet</strong> werden. So entsteht ein vernetztes Datennetz, das Wissen sichtbar macht und neue Anwendungen ermöglicht – von transparenten Verwaltungsdaten bis zu innovativen Civic-Tech-Projekten.
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
                                        <Typography variant="body1">

                                            <Link
                                                href="https://oic-bielefeld.de/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={{ cursor: 'pointer', color: 'inherit' }}
                                            >
                                                Open Innovation City Büro
                                            </Link>
                                            , Alter Markt 13, 33602 Bielefeld</Typography>
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
                                        <Typography variant="h2" sx={{ color: "pink.main" }}>Zeitplan</Typography>
                                        <Box
                                            sx={{
                                                border: `1px solid ${theme.palette.grey.light}`,
                                                borderRadius: theme.shape.borderRadius,
                                                overflow: 'hidden',
                                                backgroundColor: 'white.main'
                                            }}
                                        >
                                            {schedule.map((row, idx) => (
                                                <HBox
                                                    key={idx}
                                                    sx={{
                                                        gap: 1,
                                                        alignItems: 'flex-start',
                                                        padding: { xs: '6px 10px', md: '3px 0' },
                                                        borderTop: idx !== 0 ? `1px solid ${theme.palette.grey.light}` : 'none',
                                                        flexDirection: { xs: 'column', sm: 'row' }
                                                    }}
                                                >
                                                    <Typography
                                                        variant="body2"
                                                        sx={{
                                                            color: 'blue.main',
                                                            minWidth: { sm: 110, md: 120 },
                                                            flexShrink: 0
                                                        }}
                                                    >
                                                        {row.time}
                                                    </Typography>
                                                    <Typography variant="body1" sx={{ flex: 1 }}>
                                                        {row.desc}
                                                    </Typography>
                                                </HBox>
                                            ))}
                                        </Box>
                                    </VBox>
                                    <VBox>
                                        <Typography variant="h2" sx={{ color: "pink.main" }}>Dokumentation</Typography>
                                        <Typography variant="body1">
                                            <a href="https://pad.okfn.de/p/LOD-Barcamp-Bielefeld" target="_blank" rel="noreferrer">
                                                Etherpad bei der OKF
                                            </a> &rarr; für Sessionvorschläge, Ablaufplan und alle Art Informationen, die wir oder ihr vorab und währenddessen offen teilen wollt
                                        </Typography>
                                    </VBox>
                                </VBox>
                                <VBox sx={{ gap: 2 }}></VBox>
                                <RegularButton
                                    text={"Hier zur Anmeldung"}
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
