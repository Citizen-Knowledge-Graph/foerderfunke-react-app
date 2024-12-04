import React, {useState} from 'react';
import Layout from "../../shared-components/Layout";
import ProfileSectionCompleted from "./components/ProfileSectionCompleted";
import AppScreenWrapper from "../../shared-components/AppScreenWrapper";
import {useStore} from "../../shared-components/ViewportUpdater";
import {useQuestionsStore} from "../../storage/zustand";
import ProfileSectionTopQuestion from "./components/ProfileSectionTopQuestion";

const ProfileSectionScreen = () => {
    const isDesktop = useStore((state) => state.isDesktop);
    const profileQuestions = useQuestionsStore((state) => state.questions);
    const [completed, setCompleted] = useState(false);

    return (
        <Layout isApp={true} logo={false}>
            <AppScreenWrapper isDesktop={isDesktop} data-testid={"app wrapper"}>
                {profileQuestions ? (
                    !completed ? (
                        <ProfileSectionTopQuestion
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
