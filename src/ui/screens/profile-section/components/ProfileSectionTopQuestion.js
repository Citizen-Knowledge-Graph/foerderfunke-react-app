import React, {useEffect, useState} from 'react';
import VStack from "../../../shared-components/VStack";
import ProfileSectionField from "./ProfileSectionField";
import {
    questionsStackStore,
    useQuestionsStore,
    useValidationReportStore
} from "../../../storage/zustand";
import ProfileSectionTopHeader from "./ProfileSectionTopHeader";
import {useNavigate} from "react-router-dom";
import ProfileSectionQuestionsCount from "./ProfileSectionQuestionsCount";
import {useQuestionsUpdate, useValidationUpdate} from "../../../storage/updates";
import {CircularProgress} from "@mui/material";

const ProfileSectionTopQuestion = ({setCompleted}) => {
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const navigate = useNavigate();

    const questionsStack = questionsStackStore((state) => state.questionsStack);
    const stackCounter = questionsStackStore((state) => state.stackCounter);
    const stackMode = questionsStackStore((state) => state.stackMode);
    const addQuestionToStack = questionsStackStore((state) => state.addQuestionToStack);
    const setStackCounter = questionsStackStore((state) => state.setStackCounter);
    const setStackMode = questionsStackStore((state) => state.setStackMode);
    const triggerQuestionsUpdate = useQuestionsUpdate((state) => state.triggerQuestionsUpdate);
    const triggerValidationUpdate = useValidationUpdate((state) => state.triggerValidationUpdate);
    const profileQuestions = useQuestionsStore((state) => state.questions);
    const validationReport = useValidationReportStore((state) => state.validationReport);
    const validationIsLoading = useValidationUpdate((state) => state.validationIsLoading);

    useEffect(() => {
        if (profileQuestions.fields.length === 0) {
            setCompleted(true);
            return;
        }
        if (stackMode) {
            setCurrentQuestion(questionsStack[questionsStack.length - 1 - stackCounter]);
            return;
        }
        const firstQuestion = profileQuestions.fields[0];
        if (!currentQuestion) {
            setCurrentQuestion(firstQuestion);
            addQuestionToStack(firstQuestion);
            return;
        }
        if (firstQuestion !== currentQuestion) {
            setCurrentQuestion(firstQuestion);
            addQuestionToStack(firstQuestion);
        }
    }, [profileQuestions, currentQuestion, setCompleted, setStackCounter, stackMode, questionsStack, addQuestionToStack, stackCounter]);

    const handleConfirm = async () => {
        if (stackMode) {
            let steps = stackCounter - 1
            setStackCounter(steps);
            if (steps === 0) setStackMode(false);
            return;
        }
        triggerQuestionsUpdate()
        triggerValidationUpdate()
    };

    const handleBack = () => {
        setStackMode(true);
        if (stackCounter === questionsStack.length - 1) {
            navigate(-1)
        } else {
            setStackCounter(stackCounter + 1);
        }
    };

    return (
        <VStack sx={{width: '100%'}} gap={3}>
            <VStack gap={1}>
                {currentQuestion ? (
                    <VStack gap={8}>
                        <VStack gap={2}>
                            <ProfileSectionTopHeader stack={questionsStack} profileQuestions={profileQuestions}
                                                     validationReport={validationReport}/>
                            {
                                validationIsLoading ? <CircularProgress/> : (

                                    <VStack gap={2}>
                                        <ProfileSectionQuestionsCount 
                                            handleBack={handleBack}
                                            stepsBackwardsFromStackFront={stackCounter}
                                            stack={questionsStack}
                                            profileQuestions={profileQuestions}/>
                                        <ProfileSectionField
                                            currentField={currentQuestion}
                                            currentIndex={0}
                                            handleConfirm={handleConfirm}
                                            isLoading={false}
                                        />
                                    </VStack>)}
                        </VStack>
                    </VStack>
                ) : null}
            </VStack>
        </VStack>
    );
};

export default ProfileSectionTopQuestion;
