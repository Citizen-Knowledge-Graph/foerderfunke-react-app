import React, { useState } from 'react';
import { Button, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { HBox, VBox } from "@/ui/shared-components/LayoutBoxes";
import theme from '@/theme';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import haversine from "haversine-distance"

const BenefitPageLinksList = ({ listTitle, data }) => {
    const [showAdditionalSupport, setShowAdditionalSupport] = useState(false);
    const [userCoordinates, setUserCoordinates] = useState(null);
    const [nearestCounselingCenters, setNearestCounselingCenters] = useState([]);
    const showNearestCounselingCentre = false;

    const convertAddressToCoordinates = async () => {
        const address = prompt("Enter your address:");
        // e.g. Pariser Platz 1, 10117 Berlin
        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${address}&limit=1`;
        const response = await fetch(url);
        const data = await response.json();
        setUserCoordinates({ address: address, lat: data[0].lat, lon: data[0].lon });
    }

    const findNearestCounselingCentres = async () => {
        const RADIUS = 10; // km
        /*let query = `
            PREFIX ff: <https://foerderfunke.org/default#>
            SELECT * WHERE {
                ?cc a ff:CounselingCentre ;
                    ff:hasTitle ?title ;
                    ff:hasCoordinates ?coordinates ;
                    ff:hasAddress ?address .
            }`
        const turtle = await resourceService.fetchResource("https://raw.githubusercontent.com/Citizen-Knowledge-Graph/knowledge-base/main/resources/sozialberatungsstellen_caritas.ttl");
        */
        let rows = [] // await runSparqlSelectQueryOnRdfString(query, turtle); TODO
        let nearby = [];
        for (let row of rows) {
            let coords = row.coordinates.split("/").map(Number);
            let distKm = Math.round(haversine({ lat: userCoordinates.lat, lon: userCoordinates.lon }, { lat: coords[0], lon: coords[1] }) / 100) / 10;
            if (distKm <= RADIUS) {
                nearby.push({
                    title: row.title,
                    address: row.address,
                    lat: coords[0],
                    lon: coords[1],
                    distance: distKm,
                });
            }
        }
        nearby.sort((a, b) => a.distance - b.distance);
        setNearestCounselingCenters(nearby);
    }

    const buildOsmUrl = (cc) => {
        const routeParam = `${userCoordinates.lat},${userCoordinates.lon};${cc.lat},${cc.lon}`;
        return `https://www.openstreetmap.org/directions?engine=fossgis_osrm_bicycle&route=${encodeURIComponent(routeParam)}`;
    }

    return (
        <VBox
            sx={{
                gap: 2,
                backgroundColor: "white.main",
                padding: '32px',
                borderRadius: theme.shape.borderRadius,
            }}>
            <HBox sx={{ justifyContent: 'space-between', alignItems: "center", cursor: "pointer" }} onClick={() => setShowAdditionalSupport(!showAdditionalSupport)}>
                <Typography variant="h2" sx={{ fontWeight: '400', wordBreak: "break-word" }}>
                    {listTitle}</Typography>
                <IconButton
                    sx={{
                        transition: "transform 0.3s",
                        transform: showAdditionalSupport ? "rotate(180deg)" : "rotate(0deg)",
                        marginLeft: "8px",
                    }}
                >
                    <ExpandMoreIcon />
                </IconButton>
            </HBox>
            {
                showAdditionalSupport && (
                    <Collapse in={showAdditionalSupport} sx={{ marginTop: 1 }}>
                        <VBox sx={{ gap: 4, maxWidth: '800px' }}>
                            <Typography variant="body1">{data.title}</Typography>
                            {
                                data.links.length > 0 && (
                                    <VBox gap={1}>
                                        {
                                            data.links.map((link, index) => (
                                                <Button
                                                    key={index}
                                                    component="a"
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    variant="text"
                                                    disableRipple
                                                    disableFocusRipple
                                                    onMouseUp={e => e.currentTarget.blur()}
                                                    sx={{
                                                        padding: 1,
                                                        color: 'pink.main',
                                                        textDecoration: 'underline',
                                                        '&:hover': {
                                                            backgroundColor: 'transparent',
                                                            color: 'black.main',
                                                            textDecoration: 'underline',
                                                        },
                                                    }}
                                                >
                                                    <HBox sx={{ alignItems: 'center' }} >
                                                        <OpenInNewIcon sx={{ fontSize: '20px' }} />
                                                        <Typography sx={{ color: "inherit" }} variant="body1">{link.title}</Typography>
                                                    </HBox>
                                                </Button>
                                            ))
                                        }
                                    </VBox>
                                )
                            }
                        </VBox>
                        {showNearestCounselingCentre &&
                            <VBox sx={{ gap: 4, maxWidth: '800px' }}>
                                <Typography variant="h3" sx={{ fontWeight: '600', wordBreak: "break-word", paddingTop: '32px' }}>
                                    Finde die nächste Caritas-Sozialberatungsstelle
                                </Typography>
                                {userCoordinates ?
                                    <>
                                        <span>
                                            Your location: {userCoordinates.address} <small>({userCoordinates.lat} / {userCoordinates.lon})</small>
                                        </span>
                                        {nearestCounselingCenters.length === 0 ?
                                            /* eslint-disable jsx-a11y/anchor-is-valid */
                                            <a href="#" onClick={(e) => {
                                                e.preventDefault()
                                                findNearestCounselingCentres()
                                            }}
                                            >Find nearest counseling centres</a>
                                            :
                                            <div>
                                                <ul>
                                                    {nearestCounselingCenters.map((cc, index) => (
                                                        <li key={index} style={{ marginBottom: '1rem' }}>
                                                            <small style={{ color: "gray" }}>{cc.distance} km</small> <strong>{cc.title}</strong>
                                                            <br />
                                                            <small><a href={buildOsmUrl(cc)} target="_blank" rel="noopener noreferrer">{cc.address}</a></small>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        }

                                    </>
                                    :
                                    <span>
                                        {/* eslint-disable jsx-a11y/anchor-is-valid */}
                                        <a href="#" onClick={(e) => {
                                            e.preventDefault()
                                            convertAddressToCoordinates()
                                        }}>Click here</a> to convert your address to coordinates using nominatim.org
                                    </span>
                                }
                            </VBox>
                        }
                    </Collapse>
                )
            }
        </VBox>
    );
}

export default BenefitPageLinksList;