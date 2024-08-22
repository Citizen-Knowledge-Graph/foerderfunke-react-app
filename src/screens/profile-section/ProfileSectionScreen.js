import React, {useState} from 'react';
import Layout from "../../components/Layout";
import ProfileSectionList from "./components/ProfileSectionList";
import ProfileSectionCompleted from "./components/ProfileSectionCompleted";
import AppScreenWrapper from "../../components/AppScreenWrapper";
import {useStore} from "../../components/ViewportUpdater";
import {useQuestionsStore} from "../../storage/zustand";

const ProfileSectionScreen = () => {
    const isDesktop = useStore((state) => state.isDesktop);
    const profileQuestions = useQuestionsStore((state) => state.questions);
    const [completed, setCompleted] = useState(false);

    // useEffect(() => {
    //     setCompleted(false);
    // }, [id]);

    console.log('profile questions', profileQuestions);

    return (
        <Layout isApp={true} logo={false} back={'Back to quick check'}>
            <AppScreenWrapper isDesktop={isDesktop} back={true}>
                {profileQuestions ? (
                    !completed ? (
                        <ProfileSectionList
                            profileQuestions={profileQuestions}
                            setCompleted={setCompleted}
                        />
                    ) : (
                        <ProfileSectionCompleted/>
                    )
                ) : null}
            </AppScreenWrapper>
        </Layout>

    );
};

export default ProfileSectionScreen;
