import { useCallback, useEffect, useState } from 'react';
import { useSelectedTopicsStore } from "../../../storage/zustand";
import { questionsStackStore } from "../../../storage/zustand";

const useTopicSelectionHandlers = (topicsData, selectedTopics) => {
    const [selectedTopicsBoolean, setSelectedTopicsBoolean] = useState([]);

    const addSelectedTopic = useSelectedTopicsStore((state) => state.addSelectedTopic);
    const removeSelectedTopic = useSelectedTopicsStore((state) => state.removeSelectedTopic);
    const setSelectedTopics = useSelectedTopicsStore((state) => state.setSelectedTopics);
    const resetQuestionsStack = questionsStackStore((state) => state.resetQuestionsStack);

    useEffect(() => {
        if (topicsData?.length > 0) {
            const newSelectedTopicsBoolean = topicsData.map(topic =>
                selectedTopics.some(selectedTopic => selectedTopic.id === topic.id)
            );
            setSelectedTopicsBoolean(newSelectedTopicsBoolean);
        }
    }, [topicsData, selectedTopics]);

    const handleButtonClick = useCallback((topic, index) => {
        const newSelectedTopics = [...selectedTopicsBoolean];
        newSelectedTopics[index] = !newSelectedTopics[index];
        setSelectedTopicsBoolean(newSelectedTopics);

        if (newSelectedTopics[index]) {
            addSelectedTopic(topic);
        } else {
            removeSelectedTopic(topic.id);
        }

        resetQuestionsStack();
    }, [selectedTopicsBoolean, addSelectedTopic, removeSelectedTopic, resetQuestionsStack]);

    const handleToggleSelectAll = useCallback((event) => {
        const isChecked = event.target.checked;

        if (isChecked) {
            const newSelectedTopics = new Array(topicsData?.length).fill(true);
            setSelectedTopicsBoolean(newSelectedTopics);
            setSelectedTopics(topicsData);
        } else {
            const newSelectedTopics = new Array(topicsData?.length).fill(false);
            setSelectedTopicsBoolean(newSelectedTopics);
            setSelectedTopics([]);
        }
    }, [topicsData, setSelectedTopics]);

    return {
        selectedTopicsBoolean,
        handleButtonClick,
        handleToggleSelectAll,
    };
};

export default useTopicSelectionHandlers;