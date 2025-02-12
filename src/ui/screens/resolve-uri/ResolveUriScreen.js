import React, {useEffect, useState} from 'react';
import Layout from "../../shared-components/Layout";
import AppScreenWrapper from "../../shared-components/AppScreenWrapper";
import {useStore} from "../../shared-components/ViewportUpdater";
import {useLocation} from "react-router-dom";
import resourceService from "../../../core/services/resourceService";
import { createStoreWithTempUrisForBlankNodes, getAllTriplesContainingUri } from "@foerderfunke/matching-engine/src/uri-resolving";
import { convertUserProfileToTurtle } from "@foerderfunke/matching-engine/src/profile-conversion";
import {Checkbox, CircularProgress, FormControlLabel} from "@mui/material";
import userManager from "../../../core/managers/userManager";

const ResolveUriScreen = () => {
    const isDesktop = useStore((state) => state.isDesktop);
    const location = useLocation();
    const localName = location.hash.substring(1)
    const [uri, setUri] = useState(null);
    const [store, setStore] = useState(null);
    const [triples, setTriples] = useState({});

    const [includeProfile, setIncludeProfile] = useState(() => {
        return localStorage.getItem('uriResolver_includeProfile') === 'true';
    });

    const prefixMap = {
        'https://foerderfunke.org/default#': 'ff',
        'https://foerderfunke.org/temp#': 'tmp',
        'http://www.w3.org/1999/02/22-rdf-syntax-ns#': 'rdf',
        'http://www.w3.org/2000/01/rdf-schema#': 'rdfs',
        'http://www.w3.org/2001/XMLSchema#': 'xsd',
        'http://www.w3.org/ns/shacl#': 'sh',
        'http://schema.org/': 'schema'
    };

    const allTriplesMode = () => {
        return uri === "https://foerderfunke.org/default#";
    }

    // update uri when localName changes
    useEffect(() => {
        if (localName.startsWith("http")) {
            setUri(localName);
        } else {
            setUri(`https://foerderfunke.org/default#${localName}`);
        }
    }, [localName]);

    // runs once initially and when includeProfile changes
    useEffect(() => {
        const buildStore = async () => {
            const validationConfig = await resourceService.fetchResource('assets/data/requirement-profiles/requirement-profiles.json');
            const datafieldsString = await resourceService.fetchResource(validationConfig['datafields']);
            const materializationString = await resourceService.fetchResource(validationConfig['materialization']);
            let rdfStrings = [datafieldsString, materializationString];
            for (const requirementProfile of validationConfig['queries']) {
                const {fileUrl} = requirementProfile;
                rdfStrings.push(await resourceService.fetchResource(fileUrl));
            }
            if (includeProfile) {
                const userProfile = userManager.retrieveUserData("ff:quick-check-user");
                const userProfileTurtleString = await convertUserProfileToTurtle(userProfile);
                rdfStrings.push(userProfileTurtleString);
            }
            let newStore = await createStoreWithTempUrisForBlankNodes(rdfStrings);
            setStore(newStore);
        };
        buildStore();
    }, [includeProfile]);

    // fetch triples from existing store whenever uri changes
    useEffect(() => {
        const fetchTriples = async () => {
            if (!uri || !store) return;
            let fetchedTriples = await getAllTriplesContainingUri(uri === "https://foerderfunke.org/default#" ? null : uri, store);
            setTriples(fetchedTriples);
        };
        fetchTriples();
    }, [uri, store]);

    const format = (str) => {
        for (let key of Object.keys(prefixMap)) {
            if (!str.startsWith(key)) continue
            let prefix = prefixMap[key];
            let thisLocalName = str.includes('#') ? str.split('#')[1] : str.split('/').pop();
            if (prefix === 'ff') {
                return <a href={`#${thisLocalName}`}>{prefix + ":" + thisLocalName}</a>;
            } if (prefix === 'tmp') {
                return <a href={`#${str}`}>{thisLocalName}</a>;
            } else {
                return <a href={`#${str}`}>{prefix + ":" + thisLocalName}</a>;
            }
        }
        if (str.startsWith('bc_')) {
            return <span style={{color: "gray"}}>{str}</span>
        }
        return <span style={{color: "green"}}>{str}</span>
    };

    const handleIncludeProfileChange = () => {
        const newValue = !includeProfile;
        setIncludeProfile(newValue);
        localStorage.setItem('uriResolver_includeProfile', newValue + '');
    };

    const buildUriDisplay = () => {
        if (allTriplesMode()) {
            return <span>Showing <strong>all triples</strong></span>;
        }
        if (uri.includes("temp#bc_")) {
            return <span><strong>blank node</strong> <small>{uri.split("temp#bc_")[1]}</small></span>;
        }
        let thisLocalName = uri.includes('#') ? uri.split('#')[1] : uri.split('/').pop();
        return <span>{uri.substring(0, uri.length - thisLocalName.length)}<strong>{thisLocalName}</strong></span>;
    }

    return (
        <Layout isApp={true} logo={false} back={'Back'}>
            <AppScreenWrapper isDesktop={isDesktop} back={false}>
                {uri &&
                    <>
                        <div style={{fontSize: "x-large"}}>{buildUriDisplay()}</div>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={includeProfile}
                                    onChange={handleIncludeProfileChange}
                                    size="x-small"
                                    disabled={uri.includes("temp#bc_")}
                                />
                            }
                            label={
                                <span style={{fontSize: "small"}}>Include your profile data</span>
                            }
                        />
                        <div style={{fontSize: "small", color: "gray"}}>Prefixes:{" "}
                            {Object.keys(prefixMap).map((key, idx, arr) => (
                                <span key={idx}><strong>{prefixMap[key]}</strong>: {key}
                                    {idx < arr.length - 1 && ", "}
                                </span>
                            ))}
                        </div>
                        {
                            Object.keys(triples).length === 0 ?
                                <CircularProgress/>
                                :
                                <table>
                                    <tbody>
                                        {allTriplesMode() ?
                                            <>
                                                {triples.allTriples && triples.allTriples.filter(triple => !(triple.s.startsWith('bc_') || triple.o.startsWith('bc_'))).map((triple, idx) => (
                                                    <tr key={idx}>
                                                        <td><small style={{ color: "gray" }}>{idx}</small></td>
                                                        <td>{format(triple.s)}</td>
                                                        <td>{format(triple.p)}</td>
                                                        <td>{format(triple.o)}</td>
                                                    </tr>
                                                ))}
                                            </>
                                            :
                                            <>
                                                <tr>
                                                    <td style={{padding: "10px 0 10px 0", fontSize: "large"}} colSpan="3">--> Used as <strong>subject</strong> in these triples:</td>
                                                </tr>
                                                {triples.asSubject && triples.asSubject.filter(triple => !triple.o.startsWith('bc_')).map((triple, idx) => (
                                                    <tr key={idx}>
                                                        <td>{format(uri)}</td>
                                                        <td>{format(triple.p)}</td>
                                                        <td>{format(triple.o)}</td>
                                                    </tr>
                                                ))}
                                                <tr>
                                                    <td style={{padding: "10px 0 10px 0", fontSize: "large"}} colSpan="3">--> Used as <strong>predicate</strong> in these triples:</td>
                                                </tr>
                                                {triples.asPredicate && triples.asPredicate.filter(triple => !(triple.s.startsWith('bc_') || triple.o.startsWith('bc_'))).map((triple, idx) => (
                                                    <tr key={idx}>
                                                        <td>{format(triple.s)}</td>
                                                        <td>{format(uri)}</td>
                                                        <td>{format(triple.o)}</td>
                                                    </tr>
                                                ))}
                                                <tr>
                                                    <td style={{padding: "10px 0 10px 0", fontSize: "large"}} colSpan="3">--> Used as <strong>object</strong> in these triples:</td>
                                                </tr>
                                                {triples.asObject && triples.asObject.filter(triple => !triple.s.startsWith('bc_')).map((triple, idx) => (
                                                    <tr key={idx}>
                                                        <td>{format(triple.s)}</td>
                                                        <td>{format(triple.p)}</td>
                                                        <td>{format(uri)}</td>
                                                    </tr>
                                                ))}
                                            </>
                                        }
                                    </tbody>
                                </table>
                        }
                    </>
                }
            </AppScreenWrapper>
        </Layout>
    );
};

export default ResolveUriScreen;
