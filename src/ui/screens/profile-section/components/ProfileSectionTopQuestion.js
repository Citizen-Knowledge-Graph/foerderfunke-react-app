import React, {useContext, useEffect, useState} from 'react';
import VStack from "../../../components/VStack";
import ProfileSectionField from "./ProfileSectionField";
import {
    questionsStackStore, useMetadataStore,
    useQuestionsStore,
    useSelectedTopicsStore,
    useUserStore,
    useValidationReportStore
} from "../../../../core/storage/zustand";
import questionsService from "../../../../core/services/questionsService";
import ProfileSectionHeader from "./ProfileSectionHeader";
import ProfileSectionTopHeader from "./ProfileSectionTopHeader";
import {useNavigate, useParams} from "react-router-dom";
import ProfileSectionQuestionsCount from "./ProfileSectionQuestionsCount";
import {LanguageContext} from "../../../language/LanguageContext";


const ProfileSectionTopQuestion = ({setCompleted}) => {
    const { language } = useContext(LanguageContext);
    const {benefitId} = useParams();
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const metadata = useMetadataStore((state) => state.metadata);
    const questionsStack = questionsStackStore((state) => state.questionsStack);
    const stackCounter = questionsStackStore((state) => state.stackCounter);
    const stackMode = questionsStackStore((state) => state.stackMode);
    const addQuestionToStack = questionsStackStore((state) => state.addQuestionToStack);
    const setStackCounter = questionsStackStore((state) => state.setStackCounter);
    const setStackMode = questionsStackStore((state) => state.setStackMode);
    const activeUser = useUserStore((state) => state.activeUserId);
    const selectedTopics = useSelectedTopicsStore((state) => state.selectedTopics);
    const profileQuestions = useQuestionsStore((state) => state.questions);
    const validationReport = useValidationReportStore((state) => state.validationReport);
    const navigate = useNavigate();

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
        setIsLoading(true);
        try {
            await questionsService(activeUser, selectedTopics.map((topic) => topic.id), null, language);
        } catch (error) {
            console.error('Error fetching prioritized questions in ProfileSectionTopQuestions:', error);
        } finally {
            setIsLoading(false);
        }
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
            <ProfileSectionHeader handleBack={handleBack}/>
            {benefitId ?
                <h2>Eligibility check
                    for: {metadata.rp["https://foerderfunke.org/default#" + benefitId.split(":")[1]].title}</h2>
                : ""
            }
            <VStack gap={1}>
                {currentQuestion ? (
                    <VStack gap={8}>
                        <VStack gap={2}>
                            <ProfileSectionTopHeader stack={questionsStack} profileQuestions={profileQuestions}
                                                     validationReport={validationReport}/>
                            <VStack gap={0}>
                                <ProfileSectionQuestionsCount stepsBackwardsFromStackFront={stackCounter}
                                                              stack={questionsStack}
                                                              profileQuestions={profileQuestions}/>
                                <ProfileSectionField
                                    currentField={currentQuestion}
                                    currentIndex={0}
                                    handleConfirm={handleConfirm}
                                    isLoading={isLoading}
                                />
                            </VStack>
                        </VStack>
                    </VStack>
                ) : null}
            </VStack>
        </VStack>
    );
};

export default ProfileSectionTopQuestion;
