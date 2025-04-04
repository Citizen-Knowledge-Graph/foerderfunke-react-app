import React, { useState } from 'react';
import { Button, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { HBox, VBox } from "../../../shared-components/LayoutBoxes";
import theme from '../../../../theme';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import featureFlags from "../../../../featureFlags";
import { runSparqlSelectQueryOnRdfString } from "@foerderfunke/matching-engine/src/utils";
import resourceService from "@/core/services/resourceService";

const BenefitPageLinksList = ({ listTitle, data }) => {
    const [showAdditionalSupport, setShowAdditionalSupport] = useState(false);
    const [userCoordinates, setUserCoordinates] = useState(null);
    const [counselingCenters, setCounselingCenters] = useState([]);

    const convertAddressToCoordinates = async () => {
        const address = prompt("Enter your address:");
        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${address}&limit=1`;
        const response = await fetch(url);
        const data = await response.json();
        setUserCoordinates({ address: address, lat: data[0].lat, lon: data[0].lon });
    }

    const findNearestCounselingCentres = async () => {
        let query = `
            PREFIX ff: <https://foerderfunke.org/default#>
            SELECT * WHERE {
                ?cc a ff:CounselingCentre ;
                    ff:hasTitle ?title ;
                    ff:hasCoordinates ?coordinates ;
                    ff:hasAddress ?address .
            }`
        const turtle = await resourceService.fetchResource("https://raw.githubusercontent.com/Citizen-Knowledge-Graph/knowledge-base/main/resources/sozialberatungsstellen_caritas.ttl");
        let results = await runSparqlSelectQueryOnRdfString(query, turtle);
        setCounselingCenters(results);

        // TODO
    }

    return (
        <VBox
            sx={{
                gap: theme.spacing(2),
                backgroundColor: theme.palette.white.main,
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
                    <Collapse in={showAdditionalSupport} sx={{ marginTop: theme.spacing(1) }}>
                        <VBox sx={{ gap: 4, maxWidth: '800px' }}>
                            <Typography variant="body1">{data.title}</Typography>
                            {
                                data.links.length > 0 && (
                                    <VBox gap={1}>
                                        {
                                            data.links.map((link, index) => (
                                                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                                    <Button variant="text" sx={{
                                                        padding: 0, color: 'pink.main', textDecoration: 'underline',
                                                        '&:hover': {
                                                            backgroundColor: 'transparent',
                                                            color: 'black.main',
                                                            textDecoration: 'underline',
                                                        }
                                                    }}>
                                                        <HBox sx={{ alignItems: 'center' }} >
                                                            <OpenInNewIcon sx={{ fontSize: '20px' }} />
                                                            <Typography sx={{ color: "inherit" }} variant="body1">{link.title}</Typography>
                                                        </HBox>
                                                    </Button>
                                                </a>
                                            ))
                                        }
                                    </VBox>
                                )
                            }
                        </VBox>
                        {featureFlags.showNearestCounselingCentre &&
                            <VBox sx={{ gap: 4, maxWidth: '800px' }}>
                                <Typography variant="h3" sx={{ fontWeight: '600', wordBreak: "break-word", paddingTop: '32px' }}>
                                    Finde die nächste Sozialberatungsstelle
                                </Typography>
                                {userCoordinates ?
                                    <>
                                        <span>
                                            Your location: {userCoordinates.address} ({userCoordinates.lat} / {userCoordinates.lon})
                                        </span>
                                        {/* eslint-disable jsx-a11y/anchor-is-valid */}
                                        <a href="#" onClick={(e) => {
                                            e.preventDefault()
                                            findNearestCounselingCentres()
                                        }}
                                        >Find nearest counseling centres</a>
                                    </>
                                    :
                                    <span>
                                      {/* eslint-disable jsx-a11y/anchor-is-valid */}
                                      <a href="#" onClick={(e) => {
                                              e.preventDefault()
                                              convertAddressToCoordinates()
                                          }}
                                      >Click here</a> to convert your address to coordinates using nominatim.org
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