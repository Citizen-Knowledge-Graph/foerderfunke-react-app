import { useEffect } from 'react';
import questionsService from "../../../services/questionsService";
import {useUserStore} from "../../../storage/zustand";

function usePrioritizedQuestions(selectedTopics) {
    const activeUser = useUserStore((state) => state.activeUserId);

    useEffect(() => {
        const fetchPrioritizedQuestions = async () => {
            try {
                await questionsService(activeUser, selectedTopics);
            } catch (error) {
                console.error('Error fetching prioritized questions:', error);
            }
        };

        if (activeUser && selectedTopics.length > 0) {
            fetchPrioritizedQuestions();
        }
    }, [activeUser, selectedTopics]);
}

export default usePrioritizedQuestions;
