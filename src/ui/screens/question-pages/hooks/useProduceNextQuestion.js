import { useEffect, useRef } from 'react';
import { useQuestionsStore } from "@/ui/storage/zustand";
import { useQuestionsUpdate } from "@/ui/storage/updates";
import userManager from "@/core/managers/userManager";
import { isEqual } from 'lodash';
import useRunPrioritizedQuestions from '@/ui/shared-hooks/useRunPrioritizedQuestions';

const useProduceNextQuestion = () => {
    const profileQuestions = useQuestionsStore((s) => s.questions);
    const questionsAreLoading = useQuestionsUpdate((s) => s.questionsAreLoading);
    const isRunningRef = useRef(false);
    const runPrioritizedQuestions = useRunPrioritizedQuestions();
    const updateCounter = useQuestionsUpdate((s) => s.updateCounter);

    useEffect(() => {
        const needsRun = () => {
            if (questionsAreLoading || isRunningRef.current) return false;
            if (!profileQuestions?.prioritizedMissingDataFields || !profileQuestions?.userProfile) return true;

            const questionsUserProfile = profileQuestions.userProfile;
            const currentUserProfile = userManager.retrieveUserData();
            return !isEqual(questionsUserProfile, currentUserProfile);
        };

        const produceNextQuestion = async () => {
            if (!needsRun()) {
                return;
            }

            isRunningRef.current = true;
            await runPrioritizedQuestions();
            isRunningRef.current = false;
        }

        produceNextQuestion();

    }, [profileQuestions, questionsAreLoading, runPrioritizedQuestions, updateCounter]);

    return profileQuestions
}

export default useProduceNextQuestion;
