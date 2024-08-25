import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout";
import ProfileSectionList from "./components/ProfileSectionList";
import ProfileSectionCompleted from "./components/ProfileSectionCompleted";
import AppScreenWrapper from "../../components/AppScreenWrapper";
import {useStore} from "../../components/ViewportUpdater";
import {useQuestionsStore} from "../../storage/zustand";
import ProfileSectionTopQuestion from "./components/ProfileSectionTopQuestion";

const ProfileSectionScreen = () => {
    const isDesktop = useStore((state) => state.isDesktop);
    const profileQuestions = useQuestionsStore((state) => state.questions);
    const retrieveTopQuestion = useQuestionsStore((state) => state.retrieveTopQuestion);

    const [topQuestion, setTopQuestion] = useState(retrieveTopQuestion());
    const [completed, setCompleted] = useState(false);

    const fixedSetOfQuestionsMode = true; // true means, the next top question is computed after each step
    useEffect(() => {
        if (fixedSetOfQuestionsMode) {
            setTopQuestion(retrieveTopQuestion())
        }
    }, [fixedSetOfQuestionsMode, profileQuestions, retrieveTopQuestion]);


    return (
        <Layout isApp={true} logo={false}>
            <AppScreenWrapper isDesktop={isDesktop}>
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
