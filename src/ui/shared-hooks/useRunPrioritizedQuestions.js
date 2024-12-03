import {useContext, useEffect} from "react";
import {
    useQuestionsStore,
    useSelectedTopicsStore,
    useUserStore,
    useValidationReportStore
} from "../storage/zustand";
import {LanguageContext} from "../language/LanguageContext";
import questionsManager from "../../core/managers/questionsManager";
import {useQuestionsUpdate} from "../storage/updates";

const useRunPrioritizedQuestions = (benefitId = null) => {
    const userId = useUserStore((state) => state.activeUserId);
    const selectedTopics = useSelectedTopicsStore((state) => state.selectedTopics);
    const updateCounter = useQuestionsUpdate((state) => state.updateCounter);
    const {language} = useContext(LanguageContext);

    useEffect(() => {
        if (!userId || (!selectedTopics && !benefitId)) return;
        const fetchPrioritizedQuestions = async (benefitId) => {
            const questionsResponse = await questionsManager.fetchPrioritizedQuestions(userId, benefitId ? [] : selectedTopics.map((topic) => topic.id), benefitId, language);
            useValidationReportStore.getState().updateValidationReport(questionsResponse.validationReport);
            useQuestionsStore.getState().updateQuestions(questionsResponse.prioritizedMissingDataFields);
        }
        fetchPrioritizedQuestions(benefitId);
    }, [userId, selectedTopics, benefitId, language, updateCounter]);

};

export default useRunPrioritizedQuestions;
