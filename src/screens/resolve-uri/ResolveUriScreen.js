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
    const uri = `https://foerderfunke.org/default#${localName}`;
    const [triples, setTriples] = useState({
        asSubject: [],
        asPredicate: [],
        asObject: [],
    });

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
            let triples = await getAllTriplesContainingUri(uri, rdfStrings);
            setTriples(triples);
        };
        fetchTriples();
    }, [localName, uri]);

    const format = (str) => {
        if (str.startsWith('https://foerderfunke.org/default#')) {
            const thisLocalName = str.split('#')[1];
            return <a href={`#${thisLocalName}`}>{"ff:" + thisLocalName}</a>;
        }
        // TODO
        return str;
    };

    return (
        <Layout isApp={true} logo={false} back={'Back'}>
            <AppScreenWrapper isDesktop={isDesktop} back={false}>
                {localName ?
                    <>
                        <h3>{uri}</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td colSpan="3"><strong>Appears as subject in these triples:</strong></td>
                                </tr>
                                {triples.asSubject.map((triple, idx) => (
                                    <tr key={idx}>
                                        <td>{format(uri)}</td>
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
                                        <td>{format(uri)}</td>
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
                                        <td>{format(uri)}</td>
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
