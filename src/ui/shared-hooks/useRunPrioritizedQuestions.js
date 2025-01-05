import {useContext, useEffect} from "react";
import {
    useQuestionsStore, useSelectedBenefitStore,
    useSelectedTopicsStore,
    useUserStore,
    useValidationReportStore
} from "../storage/zustand";
import {LanguageContext} from "../language/LanguageContext";
import questionsManager from "../../core/managers/questionsManager";
import {useQuestionsUpdate, useValidationUpdate} from "../storage/updates";

const useRunPrioritizedQuestions = () => {
    const userId = useUserStore((state) => state.activeUserId);
    const selectedTopics = useSelectedTopicsStore((state) => state.selectedTopics);
    const selectedBenefit = useSelectedBenefitStore((state) => state.selectedBenefit);
    const updateCounter = useQuestionsUpdate((state) => state.updateCounter);
    const setValidationIsLoading = useValidationUpdate((state) => state.setValidationIsLoading);
    const {language} = useContext(LanguageContext);

    useEffect(() => {
        if (!userId || (!selectedTopics && !selectedBenefit)) return;
        const fetchPrioritizedQuestions = async () => {
            setValidationIsLoading(true);
            const questionsResponse = await questionsManager.fetchPrioritizedQuestions(userId, selectedBenefit ? [] : selectedTopics.map((topic) => topic.id), selectedBenefit, language);
            useValidationReportStore.getState().updateValidationReport(questionsResponse.validationReport);
            useQuestionsStore.getState().updateQuestions(questionsResponse.prioritizedMissingDataFields);
            setValidationIsLoading(false);
        }
        fetchPrioritizedQuestions();
    }, [userId, selectedTopics, selectedBenefit, language, updateCounter, setValidationIsLoading]);
};

export default useRunPrioritizedQuestions;
