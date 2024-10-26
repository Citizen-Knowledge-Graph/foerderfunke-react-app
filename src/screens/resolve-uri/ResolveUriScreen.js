import React from 'react';
import Layout from "../../components/Layout";
import AppScreenWrapper from "../../components/AppScreenWrapper";
import {useStore} from "../../components/ViewportUpdater";
import {useLocation} from "react-router-dom";

const ResolveUriScreen = () => {
    const isDesktop = useStore((state) => state.isDesktop);
    const location = useLocation();
    const localName = location.hash.substring(1)

    return (
        <Layout isApp={true} logo={false} back={'Back'}>
            <AppScreenWrapper isDesktop={isDesktop} back={false}>
                {localName ?
                        <>
                            {`https://foerderfunke.org/default#${localName}`}
                        </>
                    :
                        'No local name in URI'
                }
            </AppScreenWrapper>
        </Layout>
    );
};

export default ResolveUriScreen;
