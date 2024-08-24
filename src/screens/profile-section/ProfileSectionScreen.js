import React, {useState} from 'react';
import Layout from "../../components/Layout";
import ProfileSectionList from "./components/ProfileSectionList";
import ProfileSectionCompleted from "./components/ProfileSectionCompleted";
import AppScreenWrapper from "../../components/AppScreenWrapper";
import {useStore} from "../../components/ViewportUpdater";
import {useQuestionsStore, useTopQuestionStore} from "../../storage/zustand";
import ProfileSectionTopQuestion from "./components/ProfileSectionTopQuestion";

const ProfileSectionScreen = () => {
    const isDesktop = useStore((state) => state.isDesktop);
    const profileQuestions = useQuestionsStore((state) => state.questions);
    const topQuestion = useTopQuestionStore((state) => state.topQuestion);
    const [completed, setCompleted] = useState(false);

    const fixedSetOfQuestionsMode = true; // true means, the next top question is computed after each step

    // useEffect(() => {
    //     setCompleted(false);
    // }, [id]);

    console.log('profile questions', profileQuestions);

    return (
        <Layout isApp={true} logo={false} back={'Back to quick check'}>
            <AppScreenWrapper isDesktop={isDesktop} back={true}>
                {profileQuestions ? (
                    !completed ? (
                        fixedSetOfQuestionsMode ? (
                                <ProfileSectionList
                                    profileQuestions={profileQuestions}
                                    setCompleted={setCompleted}
                                />
                            ) : (
                                <ProfileSectionTopQuestion
                                    topQuestion={topQuestion}
                                    setCompleted={setCompleted}
                                 />
                            )
                    ) : (
                        <ProfileSectionCompleted/>
                    )
                ) : null}
            </AppScreenWrapper>
        </Layout>

    );
};

export default ProfileSectionScreen;
