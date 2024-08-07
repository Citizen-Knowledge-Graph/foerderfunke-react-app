import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout";
import readJson from "../../utilities/readJson";
import {useParams} from "react-router-dom";
import BenefitPageHeader from "./components/BenefitPageHeader";
import BenefitPageList from "./components/BenefitPageList";

const BenefitPageScreen = () => {
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
        <Layout logo={false} back={'Back'}>
            {benefitPageData ? (
                <>
                    <BenefitPageHeader benefit={benefitPageData}/>
                    <BenefitPageList benefit={benefitPageData}/>
                </>
            ) : null}
        </Layout>
    );
};

export default BenefitPageScreen;

