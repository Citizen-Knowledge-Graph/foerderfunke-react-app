import React, {useState, useEffect} from 'react';
import Layout from "../../components/Layout";
import readJson from "../../utilities/readJson";
import ProfileSectionContext from "./components/ProfileSectionContext";
import ProfileSectionList from "./components/ProfileSectionList";
import ProfileSectionCompleted from "./components/ProfileSectionCompleted";
import {useParams} from "react-router-dom";

const ProfileSectionScreen = () => {
    const {id, mode} = useParams();
    const [profileSectionData, setProfileSectionData] = useState();
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const filePath = `assets/data/profile-sections/${id}.json`
            try {
                const newProfileSectionData = await readJson(filePath);
                setProfileSectionData(newProfileSectionData);
            } catch (error) {
                console.error('Failed to fetch profile input screen data:', error);
            }
        };

        fetchData();
    }, [id]);

    useEffect(() => {
        setCompleted(false);
    }, [id]);

    return (
        <Layout>
            {profileSectionData ? (
                !completed ? (
                    <ProfileSectionList
                        profileSectionData={profileSectionData}
                        mode={mode}
                        setCompleted={setCompleted}
                    />
                ) : (
                    <ProfileSectionCompleted/>
                )
            ) : null}
        </Layout>

    );
};

export default ProfileSectionScreen;
