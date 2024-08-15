import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout";
import readJson from "../../utilities/readJson";
import {useParams} from "react-router-dom";
import BenefitPageHeader from "./components/BenefitPageHeader";
import BenefitPageList from "./components/BenefitPageList";
import AppScreenWrapper from "../../components/AppScreenWrapper";
import {useStore} from "../../components/ViewportUpdater";

const BenefitPageScreen = () => {
    const isDesktop = useStore((state) => state.isDesktop);
    const {id} = useParams();
    const [benefitPageData, setBenefitPageData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const filePath = `assets/data/benefit-pages/${id}.json`
            try {
                const newBenefitPageData = await readJson(filePath);
                setBenefitPageData(newBenefitPageData);
            } catch (error) {
                console.error('Failed to fetch benefit page screen data:', error);
            }
        };

        fetchData();
    }, [id]);


    return (
        <Layout isApp={true} logo={false} back={'Back'}>
            <AppScreenWrapper isDesktop={isDesktop}>
                {benefitPageData ? (
                    <>
                        <BenefitPageHeader benefit={benefitPageData}/>
                        <BenefitPageList benefit={benefitPageData}/>
                    </>
                ) : null}
            </AppScreenWrapper>
        </Layout>
    );
};

export default BenefitPageScreen;

