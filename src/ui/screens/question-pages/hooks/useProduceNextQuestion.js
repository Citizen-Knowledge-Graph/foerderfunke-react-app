import { useEffect } from 'react';
import { useQuestionsStore } from "@/ui/storage/zustand";
import { useQuestionsUpdate } from "@/ui/storage/updates";
import useRunPrioritizedQuestions from '@/ui/shared-hooks/useRunPrioritizedQuestions';

const useProduceNextQuestion = () => {
    const profileQuestions = useQuestionsStore((s) => s.questions);
    const questionsAreLoading = useQuestionsUpdate((s) => s.questionsAreLoading);
    const updateCounter = useQuestionsUpdate((s) => s.updateCounter);
    const runPrioritizedQuestions = useRunPrioritizedQuestions();

    useEffect(() => {
        const produceNextQuestion = async () => {
            await runPrioritizedQuestions();
        }

        produceNextQuestion();

    }, [runPrioritizedQuestions, updateCounter]);

    return { profileQuestions, questionsAreLoading };
}

export default useProduceNextQuestion;
