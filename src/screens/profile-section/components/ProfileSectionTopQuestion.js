import React, {useEffect, useState} from 'react';
import VStack from "../../../components/VStack";
import ProfileSectionField from "./ProfileSectionField";
import {useProfileSectionStore} from "../../../storage/useProfileSectionStore";
import {
    useQuestionsStore,
    useSelectedTopicsStore,
    useUserStore,
    useValidationReportStore
} from "../../../storage/zustand";
import questionsService from "../../../services/questionsService";
import {ValidationResult} from "@foerderfunke/matching-engine";
import ProfileSectionHeader from "./ProfileSectionHeader";
import isEqual from 'lodash/isEqual';

const ProfileSectionTopQuestion = ({setCompleted}) => {
    const [entityData, setEntityData] = useState({});
    const [stack, setStack] = useState([]);
    const [inStackNavMode, setInStackNavMode] = useState(false);
    const [stepsBackwardsFromStackFront, setStepsBackwardsFromStackFront] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const retrieveCurrentEntityData = useProfileSectionStore((state) => state.retrieveCurrentEntityData);
    const activeUser = useUserStore((state) => state.activeUserId);
    const selectedTopics = useSelectedTopicsStore((state) => state.selectedTopics);
    const profileQuestions = useQuestionsStore((state) => state.questions);
    const validationReport = useValidationReportStore((state) => state.validationReport);
    const [isLoading, setIsLoading] = useState(false); // passed as props to ProfileSectionField

    useEffect(() => {
        const newEntityData = retrieveCurrentEntityData();
        if (!isEqual(newEntityData, entityData)) {
            setEntityData(newEntityData);
        }
    }, [currentQuestion, entityData, retrieveCurrentEntityData]);

    useEffect(() => {
        if (profileQuestions.fields.length === 0) {
            setCompleted(true);
            return;
        }
        if (inStackNavMode) {
            setCurrentQuestion(stack[stack.length - 1 - stepsBackwardsFromStackFront]);
            return;
        }
        const firstQuestion = profileQuestions.fields[0];
        if (!currentQuestion) {
            setCurrentQuestion(firstQuestion);
            setStack([firstQuestion]);
            return;
        }
        if (firstQuestion !== currentQuestion) {
            setCurrentQuestion(firstQuestion);
            setStack([...stack, firstQuestion]);
        }
    }, [profileQuestions, currentQuestion, stack, setCompleted, stepsBackwardsFromStackFront, inStackNavMode]);

    const handleConfirm = async () => {
        if (inStackNavMode) {
            let steps = stepsBackwardsFromStackFront - 1
            setStepsBackwardsFromStackFront(steps);
            if (steps === 0) setInStackNavMode(false);
            return;
        }
        setIsLoading(true);
        try {
            await questionsService(activeUser, selectedTopics.map((topic) => topic.id));
        } catch (error) {
            console.error('Error fetching prioritized questions in ProfileSectionTopQuestions:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const buildQuestionsLeftString = () => {
        return `Question: ${stack.length} / ${stack.length + profileQuestions.fields.length}`;
    };

    const buildEligibilityUpdateString = () => {
        const eligible = validationReport.reports.filter(report => report.result === ValidationResult.ELIGIBLE).length;
        return eligible > 0 ? `You unlocked ${eligible} potential benefit based on your answers until now.` : "";
    };

    const handleBack = () => {
        setInStackNavMode(true);
        setStepsBackwardsFromStackFront(stepsBackwardsFromStackFront + 1);
    };

    return (
        <VStack sx={{width: '100%'}} gap={3}>
            {stepsBackwardsFromStackFront < stack.length - 1 &&
                <ProfileSectionHeader handleBack={handleBack}/>
            }
            <VStack gap={1}>
                {currentQuestion ? (
                    <>
                        <span>
                            We update the number of questions and potential benefits depending on your answers.
                        </span>
                        <span>
                            {buildQuestionsLeftString()}
                        </span>
                        <span>
                            {buildEligibilityUpdateString()}
                        </span>
                        <ProfileSectionField
                            currentField={currentQuestion}
                            currentIndex={0}
                            entityData={entityData}
                            handleConfirm={handleConfirm}
                            isLoading={isLoading}
                        />
                    </>
                ) : null}
            </VStack>
        </VStack>
    );
};

export default ProfileSectionTopQuestion;
