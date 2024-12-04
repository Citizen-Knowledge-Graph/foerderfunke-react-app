import {useContext, useEffect} from "react";
import {
    useQuestionsStore,
    useSelectedTopicsStore,
    useUserStore,
    useValidationReportStore
} from "../storage/zustand";
import {LanguageContext} from "../language/LanguageContext";
import questionsManager from "../../core/managers/questionsManager";
import {useQuestionsUpdate, useValidationUpdate} from "../storage/updates";

const useRunPrioritizedQuestions = (benefitId = null) => {
    const userId = useUserStore((state) => state.activeUserId);
    const selectedTopics = useSelectedTopicsStore((state) => state.selectedTopics);
    const updateCounter = useQuestionsUpdate((state) => state.updateCounter);
    const setValidationIsLoading = useValidationUpdate((state) => state.setValidationIsLoading);
    const {language} = useContext(LanguageContext);

    useEffect(() => {
        if (!userId || (!selectedTopics && !benefitId)) return;
        const fetchPrioritizedQuestions = async (benefitId) => {
            setValidationIsLoading(true);
            const questionsResponse = await questionsManager.fetchPrioritizedQuestions(userId, benefitId ? [] : selectedTopics.map((topic) => topic.id), benefitId, language);
            useValidationReportStore.getState().updateValidationReport(questionsResponse.validationReport);
            useQuestionsStore.getState().updateQuestions(questionsResponse.prioritizedMissingDataFields);
            setValidationIsLoading(false);
        }
        fetchPrioritizedQuestions(benefitId);
    }, [userId, selectedTopics, benefitId, language, updateCounter, setValidationIsLoading]);

};

export default useRunPrioritizedQuestions;
