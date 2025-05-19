import { useEffect } from 'react';
import { useQuestionsStore } from "@/ui/storage/zustand";
import { useQuestionsUpdate } from "@/ui/storage/updates";
import useRunPrioritizedQuestions from '@/ui/shared-hooks/useRunPrioritizedQuestions';
import { useLanguageStore } from '@/ui/storage/useLanguageStore';

const useProduceNextQuestion = () => {
    const profileQuestions = useQuestionsStore((s) => s.questions);
    const questionsAreLoading = useQuestionsUpdate((s) => s.questionsAreLoading);
    const updateCounter = useQuestionsUpdate((s) => s.updateCounter);
    const language = useLanguageStore((s) => s.language);
    const runPrioritizedQuestions = useRunPrioritizedQuestions();

    useEffect(() => {
        console.log("useProduceNextQuestion: ");
        const produceNextQuestion = async () => {
            await runPrioritizedQuestions();
        }

        produceNextQuestion();

    }, [runPrioritizedQuestions, updateCounter, language]);

    return { profileQuestions, questionsAreLoading };
}

export default useProduceNextQuestion;
