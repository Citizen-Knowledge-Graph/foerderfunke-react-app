import { useCallback } from "react";
import {
    useQuestionsStore,
    useSelectedBenefitStore,
    useSelectedTopicsStore,
    useUserStore,
} from "@/ui/storage/zustand";
import questionsManager from "@/core/managers/questionsManager";
import { useQuestionsUpdate } from "@/ui/storage/updates";
import { useLanguageStore } from "@/ui/storage/useLanguageStore";

const useRunPrioritizedQuestions = () => {
    const userId = useUserStore((state) => state.activeUserId);
    const selectedTopics = useSelectedTopicsStore((state) => state.selectedTopics);
    const selectedBenefit = useSelectedBenefitStore((state) => state.selectedBenefit);
    const setQuestionsAreLoading = useQuestionsUpdate((state) => state.setQuestionsAreLoading);
    const language = useLanguageStore((state) => state.language);

    const runPrioritizedQuestions = useCallback(async () => {
        if (!userId || (!selectedTopics && !selectedBenefit)) return;

        setQuestionsAreLoading(true);
        const questionsResponse = await questionsManager.fetchPrioritizedQuestions(
            userId,
            selectedTopics.map((topic) => topic.id),
            selectedBenefit,
            language
        );

        useQuestionsStore.getState().updateQuestions(questionsResponse);
        setQuestionsAreLoading(false);
    }, [userId, selectedTopics, selectedBenefit, language, setQuestionsAreLoading]);

    return runPrioritizedQuestions;
};

export default useRunPrioritizedQuestions;