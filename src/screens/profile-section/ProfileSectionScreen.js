import React, {useState, useEffect} from 'react';
import Layout from "../../components/Layout";
import {useParams} from "react-router-dom";
import readJson from "../../utilities/readJson";
import ProfileSectionContext from "./components/ProfileSectionContext";
import ProfileSectionList from "./components/ProfileSectionList";

const ProfileSectionScreen = () => {
    const {id} = useParams();
    const [profileSectionData, setProfileSectionData] = useState();

    useEffect(() => {
        console.log("we are trying this: ", `assets/data/profile-sections/${id}.json`);

        const fetchData = async () => {
            const filePath = `assets/data/profile-sections/${id}.json`;
            try {
                const newProfileSectionData = await readJson(filePath);
                setProfileSectionData(newProfileSectionData);
            } catch (error) {
                console.error('Failed to fetch profile input screen data:', error);
            }
        };

        fetchData();
    }, [id]);

    console.log('Profile', profileSectionData);

    return (
        <Layout>
            {profileSectionData ? (
                <>
                    <ProfileSectionContext title={profileSectionData.title} infoBox={id === 'about-you'}/>
                    <ProfileSectionList profileSectionData={profileSectionData}/>
                </>)
                :
                null
            }
        </Layout>
    )
        ;
};

export default ProfileSectionScreen;
