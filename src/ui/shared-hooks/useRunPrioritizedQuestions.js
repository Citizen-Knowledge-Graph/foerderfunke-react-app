import {useContext, useEffect} from "react";
import {
    useQuestionsStore, useSelectedBenefitStore,
    useSelectedTopicsStore,
    useUserStore,
} from "../storage/zustand";
import {LanguageContext} from "../language/LanguageContext";
import questionsManager from "../../core/managers/questionsManager";
import {useQuestionsUpdate} from "../storage/updates";

const useRunPrioritizedQuestions = () => {
    const userId = useUserStore((state) => state.activeUserId);
    const selectedTopics = useSelectedTopicsStore((state) => state.selectedTopics);
    const selectedBenefit = useSelectedBenefitStore((state) => state.selectedBenefit);
    const updateCounter = useQuestionsUpdate((state) => state.updateCounter);
    const setQuestionsAreLoading = useQuestionsUpdate((state) => state.setQuestionsAreLoading);
    const {language} = useContext(LanguageContext);

    useEffect(() => {
        if (!userId || (!selectedTopics && !selectedBenefit)) return;
        const fetchPrioritizedQuestions = async () => {
            setQuestionsAreLoading(true);
            const questionsResponse = await questionsManager.fetchPrioritizedQuestions(userId, selectedBenefit ? [] : selectedTopics.map((topic) => topic.id), selectedBenefit, language);
            useQuestionsStore.getState().updateQuestions(questionsResponse.prioritizedMissingDataFields);
            setQuestionsAreLoading(false);
        }
        fetchPrioritizedQuestions();
    }, [userId, selectedTopics, selectedBenefit, language, updateCounter, setQuestionsAreLoading]);
};

export default useRunPrioritizedQuestions;
