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

const ProfileSectionTopQuestion = ({setCompleted}) => {
    const [entityData, setEntityData] = useState({});
    const retrieveCurrentEntityData = useProfileSectionStore((state) => state.retrieveCurrentEntityData);
    const profileQuestions = useQuestionsStore((state) => state.questions);
    const [topQuestionsStack, setTopQuestionsStack] = useState([]);
    const [inStackNavMode, setInStackNavMode] = useState(false);
    const [stepsBackwardsFromStackFront, setStepsBackwardsFromStackFront] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const activeUser = useUserStore((state) => state.activeUserId);
    const selectedTopics = useSelectedTopicsStore((state) => state.selectedTopics);
    const [previousNumberOfOpenQuestions, setPreviousNumberOfOpenQuestions] = useState(0);
    const [previousEligibilityStats, setPreviousEligibilityStats] = useState(null);
    const validationReport = useValidationReportStore((state) => state.validationReport);

    useEffect(() => {
        setEntityData(retrieveCurrentEntityData());
    }, [currentQuestion, retrieveCurrentEntityData]);

    useEffect(() => {
        if (profileQuestions.fields.length === 0) {
            setCompleted(true);
            return;
        }
        if (inStackNavMode) {
            setCurrentQuestion(topQuestionsStack[topQuestionsStack.length - 1 - stepsBackwardsFromStackFront]);
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
    }, [retrieveCurrentEntityData, profileQuestions, currentQuestion, topQuestionsStack, setCompleted, validationReport, stepsBackwardsFromStackFront, inStackNavMode]);

    const handleConfirm = async () => {
        if (inStackNavMode) {
            let steps = stepsBackwardsFromStackFront - 1
            setStepsBackwardsFromStackFront(steps);
            if (steps === 0) setInStackNavMode(false);
            return;
        }
        try {
            await questionsService(activeUser, selectedTopics.map((topic) => topic.id));
            setPreviousNumberOfOpenQuestions(profileQuestions.fields.length);
            setPreviousEligibilityStats(computeEligibilityStats(validationReport));
        } catch (error) {
            console.error('Error fetching prioritized questions in ProfileSectionTopQuestions:', error);
        }
    };

    const buildQuestionsLeftString = () => {
        let str = `${topQuestionsStack.length} questions answered / ${profileQuestions.fields.length} more to go`;
        if (previousNumberOfOpenQuestions - profileQuestions.fields.length > 1) {
            str += ` (${previousNumberOfOpenQuestions - profileQuestions.fields.length} become obsolet after your previous answer)`;
        }
        // the number of remaining questions can also increase based on answers (e.g. if you add a child and then their details are required) in the future (not now)
        return str;
    };

    const buildEligibilityUpdateString = () => {
        const stats = computeEligibilityStats(validationReport);
        const calc = (type) => {
            let part = stats[type];
            if (!previousEligibilityStats) return part;
            let diff = stats[type] - previousEligibilityStats[type];
            if (diff !== 0) part += ` (${diff > 0 ? '+' : ''}${diff})`;
            return part;
        }
        return `Yes: ${calc(ValidationResult.ELIGIBLE)} / No: ${calc(ValidationResult.INELIGIBLE)} / Missing data: ${calc(ValidationResult.UNDETERMINABLE)}`;
    };

    const computeEligibilityStats = (validationReport) => {
        return {
            eligible: validationReport.reports.filter(report => report.result === ValidationResult.ELIGIBLE).length,
            ineligible: validationReport.reports.filter(report => report.result === ValidationResult.INELIGIBLE).length,
            undeterminable: validationReport.reports.filter(report => report.result === ValidationResult.UNDETERMINABLE).length,
        }
    };

    const handleBack = () => {
        setInStackNavMode(true);
        setStepsBackwardsFromStackFront(stepsBackwardsFromStackFront + 1);
    };

    return (
        <VStack sx={{width: '100%'}} gap={3}>
            {stepsBackwardsFromStackFront < topQuestionsStack.length - 1 &&
                <ProfileSectionHeader handleBack={handleBack}/>
            }
            <VStack gap={1}>
                {currentQuestion ? (
                    <>
                        <span>
                            {buildQuestionsLeftString()}
                        </span>
                        <span>
                            Eligibility status for {validationReport.reports.length} benefits: {buildEligibilityUpdateString()}
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