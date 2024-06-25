import React, {useState, useEffect} from 'react';
import Layout from "../../components/Layout";
import readJson from "../../utilities/readJson";
import ProfileSectionContext from "./components/ProfileSectionContext";
import ProfileSectionList from "./components/ProfileSectionList";
import useInitializeEntityData from "./hooks/useInitializeEntityData";
import {useUserStore} from "../../storage/zustand";

const ProfileSectionScreen = () => {
    const userId = useUserStore((state) => state.activeUserId);
    const entityData = useInitializeEntityData(userId);
    const [profileSectionData, setProfileSectionData] = useState();
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const filePath = `assets/data/profile-sections/quick-check-profile.json`;
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
    }, [entityData]);


    useEffect(() => {
        setCompleted(false);
    }, []);

    console.log('entityData', entityData)

    return (
        <Layout>
            {profileSectionData ? (
                    <>
                        <ProfileSectionContext title={profileSectionData.title} infoBox={true}/>
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
