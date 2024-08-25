import { useEffect, useState } from 'react';
import questionsService from "../../../services/questionsService";
import {useSelectedTopicsStore, useUserStore} from "../../../storage/zustand";

function useInitializeQuestionsArray() {
    const [loading, setLoading] = useState(true);
    const activeUser = useUserStore((state) => state.activeUserId);
    const selectedTopics = useSelectedTopicsStore((state) => state.selectedTopics);

    useEffect(() => {
        const fetchPrioritizedQuestions = async () => {
            try {
                await questionsService(activeUser, selectedTopics.map((topic) => topic.id));
            } catch (error) {
                console.error('Error fetching prioritized questions:', error);
            } finally {
                setLoading(false);
            }
        };

        if (activeUser && selectedTopics.length > 0) {
            fetchPrioritizedQuestions();
        } else {
            setLoading(false);
        }
    }, [activeUser, selectedTopics]);

    return loading; // Return the loading state
}

export default useInitializeQuestionsArray;
