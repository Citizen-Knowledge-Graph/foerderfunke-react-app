import React, {useState, useEffect} from 'react';
import Layout from "../../components/Layout";
import {useParams, useLocation} from "react-router-dom";
import readJson from "../../utilities/readJson";
import ProfileSectionContext from "./components/ProfileSectionContext";
import ProfileSectionList from "./components/ProfileSectionList";

const ProfileSectionScreen = () => {
    const {id} = useParams();
    const location = useLocation();
    const {entityData} = location.state || {};
    const [profileSectionData, setProfileSectionData] = useState();
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const filePath = `assets/data/profile-sections/${id}.json`;
            try {
                const newProfileSectionData = await readJson(filePath);
                newProfileSectionData.entityData = entityData;
                newProfileSectionData.fields.map((field) => {
                    field.nestedEntityData = null;
                    return field;
                });
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

    console.log('entityData', entityData)

    return (
        <Layout>
            {profileSectionData ? (
                    <>
                        <ProfileSectionContext title={profileSectionData.title} infoBox={id === 'about-you'}/>
                        {!completed ?
                            (<ProfileSectionList profileSectionData={profileSectionData}
                                                 setProfileSectionData={setProfileSectionData}
                                                 setCompleted={setCompleted}/>)
                            : null
                        }
                    </>)
                :
                null
            }
        </Layout>

    );
};

export default ProfileSectionScreen;
