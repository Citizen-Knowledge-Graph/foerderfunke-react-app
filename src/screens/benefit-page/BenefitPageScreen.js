import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout";
import {useParams} from "react-router-dom";
import BenefitPageHeader from "./components/BenefitPageHeader";
import AppScreenWrapper from "../../components/AppScreenWrapper";
import {useStore} from "../../components/ViewportUpdater";
import {useMetadataStore} from "../../storage/zustand";
import useFetchData from "../../services/fetchResourceService";
import BenefitPageRules from "./components/BenefitPageRules";

const BenefitPageScreen = () => {
    const isDesktop = useStore((state) => state.isDesktop);
    const {id} = useParams();
    const [benefitPageData, setBenefitPageData] = useState();
    const metadata = useMetadataStore((state) => state.metadata);
    const [topicsData, setTopicsData] = useState([]);

    useFetchData('assets/data/topics/topics-list.json', setTopicsData);

    useEffect(() => {
        let rpUri = id.startsWith("ff:") ? "https://foerderfunke.org/default#" + id.split(":")[1] : id;
        setBenefitPageData(metadata.rp[rpUri]);
    }, [id, topicsData, metadata]);

    const getTopicTitle = (topicUri) => {
        let topicId = topicUri.startsWith("https") ? "ff:" + topicUri.split("#")[1] : topicUri;
        return topicsData.find(topic => topic.id === topicId).title;
    }

    const getCategoryTitles = () => {
        return benefitPageData.categories.map(categoryUri => getTopicTitle(categoryUri)).join(', ');
    }

    return (
        <Layout isApp={true} logo={false} back={'Back'}>
            <AppScreenWrapper isDesktop={isDesktop}>
                {benefitPageData && topicsData.length > 0 ? (
                    <>
                        <BenefitPageHeader benefit={benefitPageData}/>
                        {/*<BenefitPageList benefit={benefitPageData}/>*/}
                        <small>Topics: {getCategoryTitles()}</small>
                        <div>{benefitPageData.benefitInfo}</div>
                        <div>More info: <a target="_blank" rel="noreferrer" href={benefitPageData.seeAlso}>{benefitPageData.seeAlso}</a></div>
                        <BenefitPageRules benefitId={id}/>
                    </>
                ) : null}
            </AppScreenWrapper>
        </Layout>
    );
};

export default BenefitPageScreen;

