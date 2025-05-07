import { useEffect, useRef } from 'react';
import { useQuestionsStore } from "@/ui/storage/zustand";
import { useQuestionsUpdate } from "@/ui/storage/updates";
import useRunPrioritizedQuestions from '@/ui/shared-hooks/useRunPrioritizedQuestions';

const useProduceNextQuestion = () => {
    const profileQuestions = useQuestionsStore((s) => s.questions);
    const questionsAreLoading = useQuestionsUpdate((s) => s.questionsAreLoading);
    const updateCounter = useQuestionsUpdate((s) => s.updateCounter);
    const isRunningRef = useRef(false);
    const runPrioritizedQuestions = useRunPrioritizedQuestions();

    useEffect(() => {
        const produceNextQuestion = async () => {
            if (questionsAreLoading || isRunningRef.current) return;

            isRunningRef.current = true;
            console.log("Running prioritized questions");
            await runPrioritizedQuestions();
            isRunningRef.current = false;
        }

        produceNextQuestion();

    }, [profileQuestions, questionsAreLoading, runPrioritizedQuestions, updateCounter]);

    return { profileQuestions, questionsAreLoading };
}

export default useProduceNextQuestion;
