import React, {useEffect, useState} from 'react';
import VStack from "../../../components/VStack";
import ProfileSectionField from "./ProfileSectionField";
import {useProfileSectionStore} from "../../../storage/useProfileSectionStore";
import {useQuestionsStore, useSelectedTopicsStore, useUserStore} from "../../../storage/zustand";
import questionsService from "../../../services/questionsService";

const ProfileSectionTopQuestion = ({setCompleted}) => {
    const [entityData, setEntityData] = useState({});
    const retrieveCurrentEntityData = useProfileSectionStore((state) => state.retrieveCurrentEntityData);
    const profileQuestions = useQuestionsStore((state) => state.questions);
    const [topQuestionsStack, setTopQuestionsStack] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const activeUser = useUserStore((state) => state.activeUserId);
    const selectedTopics = useSelectedTopicsStore((state) => state.selectedTopics);

    // TODO use stack to support back button

    useEffect(() => {
        setEntityData(retrieveCurrentEntityData());
        if (profileQuestions.fields.length === 0) {
            setCompleted(true);
            return;
        }
        const firstQuestion = profileQuestions.fields[0];
        if (!currentQuestion) {
            setCurrentQuestion(firstQuestion);
            setTopQuestionsStack([firstQuestion]);
            return;
        }
        if (firstQuestion !== currentQuestion) {
            setCurrentQuestion(firstQuestion);
            setTopQuestionsStack([...topQuestionsStack, firstQuestion]);
        }
    }, [retrieveCurrentEntityData, profileQuestions, currentQuestion, topQuestionsStack]);

    const handleConfirm = async (currentIndex) => {
        try {
            await questionsService(activeUser, selectedTopics.map((topic) => topic.id));
        } catch (error) {
            console.error('Error fetching prioritized questions in ProfileSectionTopQuestions:', error);
        }
    }

    return (
        <VStack sx={{width: '100%'}} gap={3}>
            <VStack gap={1}>
                {currentQuestion ? (
                    <ProfileSectionField
                        currentField={currentQuestion}
                        currentIndex={0}
                        entityData={entityData}
                        handleConfirm={handleConfirm}
                    />
                ) : null}
            </VStack>
        </VStack>
    );
};

export default ProfileSectionTopQuestion;
