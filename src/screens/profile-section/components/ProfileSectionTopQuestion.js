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
    const [previousNumberOfOpenQuestions, setPreviousNumberOfOpenQuestions] = useState(0);

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
    }, [retrieveCurrentEntityData, profileQuestions, currentQuestion, topQuestionsStack, setCompleted]);

    const handleConfirm = async (currentIndex) => {
        try {
            await questionsService(activeUser, selectedTopics.map((topic) => topic.id));
            setPreviousNumberOfOpenQuestions(profileQuestions.fields.length);
        } catch (error) {
            console.error('Error fetching prioritized questions in ProfileSectionTopQuestions:', error);
        }
    }

    return (
        <VStack sx={{width: '100%'}} gap={3}>
            <VStack gap={1}>
                {currentQuestion ? (
                    <>
                        <span>
                            {topQuestionsStack.length} questions answered / {profileQuestions.fields.length} more to go
                            {previousNumberOfOpenQuestions - profileQuestions.fields.length > 1 ? (
                                <span>
                                    {" "}({previousNumberOfOpenQuestions - profileQuestions.fields.length} become obsolet after your previous answer)
                                </span>
                            ) : null}
                        </span>
                        <ProfileSectionField
                            currentField={currentQuestion}
                            currentIndex={0}
                            entityData={entityData}
                            handleConfirm={handleConfirm}
                        />
                    </>
                ) : null}
            </VStack>
        </VStack>
    );
};

export default ProfileSectionTopQuestion;
