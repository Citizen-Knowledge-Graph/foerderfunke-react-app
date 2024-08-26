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

const ProfileSectionTopQuestion = ({setCompleted}) => {
    const [entityData, setEntityData] = useState({});
    const retrieveCurrentEntityData = useProfileSectionStore((state) => state.retrieveCurrentEntityData);
    const profileQuestions = useQuestionsStore((state) => state.questions);
    const [topQuestionsStack, setTopQuestionsStack] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const activeUser = useUserStore((state) => state.activeUserId);
    const selectedTopics = useSelectedTopicsStore((state) => state.selectedTopics);
    const [previousNumberOfOpenQuestions, setPreviousNumberOfOpenQuestions] = useState(0);
    const [previousEligibilityStats, setPreviousEligibilityStats] = useState(null);
    const validationReport = useValidationReportStore((state) => state.validationReport);

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
    }, [retrieveCurrentEntityData, profileQuestions, currentQuestion, topQuestionsStack, setCompleted, validationReport]);

    const handleConfirm = async (currentIndex) => {
        try {
            await questionsService(activeUser, selectedTopics.map((topic) => topic.id));
            setPreviousNumberOfOpenQuestions(profileQuestions.fields.length);
            setPreviousEligibilityStats(computeEligibilityStats(validationReport));
        } catch (error) {
            console.error('Error fetching prioritized questions in ProfileSectionTopQuestions:', error);
        }
    };

    const computeEligibilityStats = (validationReport) => {
        return {
            eligible: validationReport.reports.filter(report => report.result === ValidationResult.ELIGIBLE).length,
            ineligible: validationReport.reports.filter(report => report.result === ValidationResult.INELIGIBLE).length,
            undeterminable: validationReport.reports.filter(report => report.result === ValidationResult.UNDETERMINABLE).length,
        }
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
