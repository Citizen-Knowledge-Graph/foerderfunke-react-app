import {useEffect} from 'react';
import questionsService from "../../../services/questionsService";
import {useSelectedTopicsStore, useUserStore} from "../../../storage/zustand";

function useInitializeQuestionsArray() {
    const activeUser = useUserStore((state) => state.activeUserId);
    const selectedTopics = useSelectedTopicsStore((state) => state.selectedTopics);

    useEffect(() => {
        const fetchPrioritizedQuestions = async () => {
            try {
                await questionsService(activeUser, selectedTopics.map((topic) => topic.id));
            } catch (error) {
                console.error('Error fetching prioritized questions:', error);
            }
        }

        if (activeUser && selectedTopics.length > 0) {
            fetchPrioritizedQuestions();
        }
    }, [activeUser, selectedTopics]);
}

export default useInitializeQuestionsArray;
