import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout";
import AppScreenWrapper from "../../components/AppScreenWrapper";
import {useStore} from "../../components/ViewportUpdater";
import {useLocation} from "react-router-dom";
import {fetchTurtleResource} from "../../services/githubService";
import readJson from "../../utilities/readJson";
import {getAllTriplesContainingUri} from "@foerderfunke/matching-engine/src/utils";

const ResolveUriScreen = () => {
    const isDesktop = useStore((state) => state.isDesktop);
    const location = useLocation();
    const localName = location.hash.substring(1)
    const [triples, setTriples] = useState({
        asSubject: [],
        asPredicate: [],
        asObject: [],
    });

    const buildUri = () => {
        return `https://foerderfunke.org/default#${localName}`;
    }

    useEffect(() => {
        const fetchTriples = async () => {
            if (!localName) return;
            const validationConfig = await readJson('assets/data/requirement-profiles/requirement-profiles.json');
            const datafieldsString = await fetchTurtleResource(validationConfig['datafields']);
            const materializationString = await fetchTurtleResource(validationConfig['materialization']);
            let rdfStrings = [datafieldsString, materializationString];
            for (const requirementProfile of validationConfig['queries']) {
                const {fileUrl, rpUri} = requirementProfile;
                rdfStrings.push(await fetchTurtleResource(fileUrl));
            }
            let triples = await getAllTriplesContainingUri(buildUri(), rdfStrings);
            setTriples(triples);
        };
        fetchTriples();
    }, [localName]);

    const format = (str) => {
        if (str.startsWith('https://foerderfunke.org/default#')) {
            return "ff:" + str.split('#')[1];
        }
        // TODO
        return str;
    }

    return (
        <Layout isApp={true} logo={false} back={'Back'}>
            <AppScreenWrapper isDesktop={isDesktop} back={false}>
                {localName ?
                    <>
                        <h3>{buildUri()}</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td colSpan="3"><strong>Appears as subject in these triples:</strong></td>
                                </tr>
                                {triples.asSubject.map((triple, idx) => (
                                    <tr key={idx}>
                                        <td>{format(buildUri())}</td>
                                        <td>{format(triple.p)}</td>
                                        <td>{format(triple.o)}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <td colSpan="3"><strong>Appears as predicate in these triples:</strong></td>
                                </tr>
                                {triples.asPredicate.map((triple, idx) => (
                                    <tr key={idx}>
                                        <td>{format(triple.s)}</td>
                                        <td>{format(buildUri())}</td>
                                        <td>{format(triple.o)}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <td colSpan="3"><strong>Appears as object in these triples:</strong></td>
                                </tr>
                                {triples.asObject.map((triple, idx) => (
                                    <tr key={idx}>
                                        <td>{format(triple.s)}</td>
                                        <td>{format(triple.p)}</td>
                                        <td>{format(buildUri())}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </>
                    :
                        'No local name in URI'
                }
            </AppScreenWrapper>
        </Layout>
    );
};

export default ResolveUriScreen;
