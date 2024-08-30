import React, {useState} from 'react';
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
    const [completed, setCompleted] = useState(false);
    const fixedSetOfQuestionsMode = false; // true means, the next top question is computed after each step

    return (
        <Layout isApp={true} logo={false}>
            <AppScreenWrapper isDesktop={isDesktop} data-testid={"app wrapper"}>
                {profileQuestions ? (
                    !completed ? (
                        fixedSetOfQuestionsMode ? (
                                <ProfileSectionList
                                    profileQuestions={profileQuestions}
                                    setCompleted={setCompleted}
                                />
                            ) : (
                                <ProfileSectionTopQuestion
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
