import React, {useEffect, useState} from 'react';
import VStack from "../../../shared-components/VStack";
import ProfileSectionField from "./ProfileSectionField";
import {
    questionsStackStore, useMetadataStore,
    useQuestionsStore,
    useSelectedTopicsStore,
    useValidationReportStore
} from "../../../storage/zustand";
import ProfileSectionHeader from "./ProfileSectionHeader";
import ProfileSectionTopHeader from "./ProfileSectionTopHeader";
import {useNavigate, useParams} from "react-router-dom";
import ProfileSectionQuestionsCount from "./ProfileSectionQuestionsCount";
import {useQuestionsUpdate} from "../../../storage/updates";

const ProfileSectionTopQuestion = ({setCompleted}) => {
    const {benefitMode} = useParams();
    const [currentQuestion, setCurrentQuestion] = useState(null);

    const metadata = useMetadataStore((state) => state.metadata);
    const questionsStack = questionsStackStore((state) => state.questionsStack);
    const stackCounter = questionsStackStore((state) => state.stackCounter);
    const stackMode = questionsStackStore((state) => state.stackMode);
    const addQuestionToStack = questionsStackStore((state) => state.addQuestionToStack);
    const setStackCounter = questionsStackStore((state) => state.setStackCounter);
    const setStackMode = questionsStackStore((state) => state.setStackMode);
    const triggerQuestionsUpdate = useQuestionsUpdate((state) => state.triggerQuestionsUpdate);
    const selectedBenefit = useSelectedTopicsStore((state) => state.selectedBenefit);
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
        triggerQuestionsUpdate()
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
            {benefitMode ?
                <h2>Eligibility check
                    for: {metadata.rp["https://foerderfunke.org/default#" + selectedBenefit.split(":")[1]].title}</h2>
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
                                    isLoading={false}
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
