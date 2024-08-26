import React, {useEffect, useState} from 'react';
import VStack from "../../../components/VStack";
import ProfileSectionField from "./ProfileSectionField";
import {
    useDynamicQuestionsStore,
    useSelectedTopicsStore,
    useUserStore,
} from "../../../storage/zustand";
import questionsService from "../../../services/questionsService";
import {Button, Typography} from "@mui/material";
import useUpdateDynamicQuestions from "../hooks/useUpdateDynamicQuestions";
import useRetrieveEntityData from "../hooks/useRetrieveEntityData";

const ProfileSectionTopQuestion = ({setCompleted}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentTopIndex, setCurrentTopIndex] = useState(0);
    const [currentField, setCurrentField] = useState(null);

    const activeUser = useUserStore((state) => state.activeUserId);
    const selectedTopics = useSelectedTopicsStore((state) => state.selectedTopics);
    const dynamicQuestions = useDynamicQuestionsStore((state) => state.dynamicQuestions);

    // retrieve current entity data
    const entityData = useRetrieveEntityData();

    // update dynamic questions
    useUpdateDynamicQuestions(currentIndex, currentTopIndex);

    useEffect(() => {
        if (dynamicQuestions.length > 0) {
            setCurrentField(dynamicQuestions[currentIndex]);
        }
    }, [currentIndex, dynamicQuestions]);

    const handleConfirm = async () => {
        try {
            await questionsService(activeUser, selectedTopics.map((topic) => topic.id));
            setCurrentIndex((prevIndex) => {
                const newIndex = prevIndex + 1;
                if (newIndex > currentTopIndex) {
                    setCurrentTopIndex(newIndex);
                }
                return newIndex;
            });
        } catch (error) {
            console.error('Error fetching prioritized questions in ProfileSectionTopQuestions:', error);
        }
    };

    if (!currentField) {
        return <Typography>Loading...</Typography>;
    }

    console.log('DEBUG dynamic questions', dynamicQuestions);
    console.log('DEBUG current index', currentIndex);

    return (
        <VStack sx={{width: '100%'}} gap={3}>
            <VStack gap={1}>
                <Button onClick={() => setCurrentIndex(currentIndex - 1)}>Back</Button>
                <ProfileSectionField
                    currentField={currentField}
                    currentIndex={currentIndex}
                    entityData={entityData}
                    handleConfirm={handleConfirm}
                />

            </VStack>
        </VStack>
    );
};

export default ProfileSectionTopQuestion;
