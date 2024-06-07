import React, {useEffect, useState} from 'react';
import Layout from '../../components/Layout';
import OnboardingSectionsContext from "./components/OnboardingSectionsContext";
import OnboardingSectionsList from "./components/OnboardingSectionsList";
import readJson from "../../utilities/readJson";
import useInitializeProfileSections from "./hooks/useInitializeProfileSections";

const OnboardingSectionsScreen = () => {
    const [onboardingSectionsData, setOnboardingSectionsData] = useState();
    const [sectionStatusInitialized, setSectionStatusInitialized] = useState(false);
    const initializeProfileSections = useInitializeProfileSections(onboardingSectionsData);

    useEffect(() => {
        const fetchData = async () => {
            const filePath = `assets/data/profile-sections/registry.json`;
            try {
                const newOnboardingSectionsData = await readJson(filePath);
                setOnboardingSectionsData(newOnboardingSectionsData);
            } catch (error) {
                console.error('Failed to fetch onboarding data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (onboardingSectionsData && !sectionStatusInitialized) {
            initializeProfileSections(onboardingSectionsData);
            setSectionStatusInitialized(true);
        }
    }, [initializeProfileSections, onboardingSectionsData, sectionStatusInitialized]);

    return (
        <Layout>
            <OnboardingSectionsContext/>
            {onboardingSectionsData && sectionStatusInitialized? (
                    <OnboardingSectionsList onboardingSectionsData={onboardingSectionsData}/>)
                :
                null
            }
        </Layout>
    )
        ;
};

export default OnboardingSectionsScreen;
