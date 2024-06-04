import React, {useEffect, useState} from 'react';
import Layout from '../../components/Layout';
import OnboardingSectionsContext from "./components/OnboardingSectionsContext";
import {useUserStore} from "../../storage/zustand";
import {fetchOnboardingSectionsData} from "./OnboardingSectionsController";
import OnboardingSectionsList from "./components/OnboardingSectionsList";

const OnboardingSectionsScreen = () => {
    const [onboardingSectionsData, setOnboardingSectionsData] = useState();
    const userId = useUserStore((state) => state.userId);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const newOnboardingSectionsData = await fetchOnboardingSectionsData(userId);
                setOnboardingSectionsData(newOnboardingSectionsData);
            } catch (error) {
                console.error('Failed to fetch profile input screen data:', error);
            }
        };

        fetchData();
    }, [userId]);

    console.log('Onboarding', onboardingSectionsData);


    return (
        <Layout>
            <OnboardingSectionsContext/>
            {onboardingSectionsData ? (
                    <OnboardingSectionsList onboardingSectionsData={onboardingSectionsData}/>)
                :
                null
            }
        </Layout>
    )
        ;
};

export default OnboardingSectionsScreen;
