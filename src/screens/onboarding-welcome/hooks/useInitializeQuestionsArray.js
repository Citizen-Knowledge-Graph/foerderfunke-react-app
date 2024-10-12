import {useState, useEffect} from 'react';
import questionsService from "../../../services/questionsService";
import {useSelectedTopicsStore, useUserStore} from "../../../storage/zustand";

// UNUSED

function useInitializeQuestionsArray() {
    const activeUser = useUserStore((state) => state.activeUserId);
    const selectedTopics = useSelectedTopicsStore((state) => state.selectedTopics);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchPrioritizedQuestions = async () => {
            setIsLoading(true);
            try {
                await questionsService(activeUser, selectedTopics.map((topic) => topic.id), null);
            } catch (error) {
                console.error('Error fetching prioritized questions:', error);
            } finally {
                setIsLoading(false);
            }
        }

        if (activeUser && selectedTopics.length > 0) {
            fetchPrioritizedQuestions();
        }
    }, [activeUser, selectedTopics]);

    return isLoading;
}

export default useInitializeQuestionsArray;
