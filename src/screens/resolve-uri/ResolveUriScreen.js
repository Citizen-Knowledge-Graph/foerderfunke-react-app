import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout";
import AppScreenWrapper from "../../components/AppScreenWrapper";
import {useStore} from "../../components/ViewportUpdater";
import {useLocation} from "react-router-dom";
import {fetchTurtleResource} from "../../services/githubService";
import readJson from "../../utilities/readJson";
import {convertUserProfileToTurtle, getAllTriplesContainingUri} from "@foerderfunke/matching-engine/src/utils";
import {Checkbox, CircularProgress, FormControlLabel} from "@mui/material";
import {UserModel} from "../../models/UserModel";

const ResolveUriScreen = () => {
    const isDesktop = useStore((state) => state.isDesktop);
    const location = useLocation();
    const localName = location.hash.substring(1)
    const uri = `https://foerderfunke.org/default#${localName}`;
    const [triples, setTriples] = useState({});

    const [includeProfile, setIncludeProfile] = useState(() => {
        return localStorage.getItem('uriResolver_includeProfile') === 'true';
    });

    const prefixMap = {
        'https://foerderfunke.org/default#': 'ff',
        'http://www.w3.org/1999/02/22-rdf-syntax-ns#': 'rdf',
        'http://www.w3.org/2000/01/rdf-schema#': 'rdfs',
        'http://www.w3.org/2001/XMLSchema#': 'xsd',
        'http://www.w3.org/ns/shacl#': 'sh',
        'http://schema.org/': 'schema'
    };

    useEffect(() => {
        const fetchTriples = async () => {
            if (!localName) return;
            const validationConfig = await readJson('assets/data/requirement-profiles/requirement-profiles.json');
            const datafieldsString = await fetchTurtleResource(validationConfig['datafields']);
            const materializationString = await fetchTurtleResource(validationConfig['materialization']);
            let rdfStrings = [datafieldsString, materializationString];
            for (const requirementProfile of validationConfig['queries']) {
                const {fileUrl} = requirementProfile;
                rdfStrings.push(await fetchTurtleResource(fileUrl));
            }
            if (includeProfile) {
                const userProfile = UserModel.retrieveUserData("ff:quick-check-user");
                const userProfileTurtleString = await convertUserProfileToTurtle(userProfile);
                rdfStrings.push(userProfileTurtleString);
            }
            let triples = await getAllTriplesContainingUri(uri, rdfStrings);
            setTriples(triples);
        };
        fetchTriples();
    }, [localName, uri, includeProfile]);

    const format = (str) => {
        for (let key of Object.keys(prefixMap)) {
            if (!str.startsWith(key)) continue
            let prefix = prefixMap[key];
            let thisLocalName = str.includes('#') ? str.split('#')[1] : str.split('/').pop();
            if (prefix === 'ff') {
                return <a href={`#${thisLocalName}`}>{prefix + ":" + thisLocalName}</a>;
            } else {
                return prefix + ":" + thisLocalName;
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

    return (
        <Layout isApp={true} logo={false} back={'Back'}>
            <AppScreenWrapper isDesktop={isDesktop} back={false}>
                {localName ?
                    <>
                        <div style={{fontSize: "x-large"}}>https://foerderfunke.org/default#<strong>{localName}</strong></div>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={includeProfile}
                                    onChange={handleIncludeProfileChange}
                                    size="x-small"
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
                                        <tr>
                                            <td style={{padding: "10px 0 10px 0", fontSize: "large"}} colSpan="3">--> Used as <strong>subject</strong> in these triples:</td>
                                        </tr>
                                        {triples.asSubject.map((triple, idx) => (
                                            <tr key={idx}>
                                                <td>{format(uri)}</td>
                                                <td>{format(triple.p)}</td>
                                                <td>{format(triple.o)}</td>
                                            </tr>
                                        ))}
                                        <tr>
                                            <td style={{padding: "10px 0 10px 0", fontSize: "large"}} colSpan="3">--> Used as <strong>predicate</strong> in these triples:</td>
                                        </tr>
                                        {triples.asPredicate.map((triple, idx) => (
                                            <tr key={idx}>
                                                <td>{format(triple.s)}</td>
                                                <td>{format(uri)}</td>
                                                <td>{format(triple.o)}</td>
                                            </tr>
                                        ))}
                                        <tr>
                                            <td style={{padding: "10px 0 10px 0", fontSize: "large"}} colSpan="3">--> Used as <strong>object</strong> in these triples:</td>
                                        </tr>
                                        {triples.asObject.map((triple, idx) => (
                                            <tr key={idx}>
                                                <td>{format(triple.s)}</td>
                                                <td>{format(triple.p)}</td>
                                                <td>{format(uri)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                        }
                    </>
                    :
                        'No local name in URI'
                }
            </AppScreenWrapper>
        </Layout>
    );
};

export default ResolveUriScreen;
