import { useCallback } from 'react';
import { useSelectedTopicsStore } from "../../../storage/zustand";

const useTopicSelectionHandlers = (topicsData, selectedTopicsBoolean, setSelectedTopicsBoolean) => {
    const addSelectedTopic = useSelectedTopicsStore((state) => state.addSelectedTopic);
    const removeSelectedTopic = useSelectedTopicsStore((state) => state.removeSelectedTopic);
    const setSelectedTopics = useSelectedTopicsStore((state) => state.setSelectedTopics);

    const handleButtonClick = useCallback((topic, index) => {
        // Update the selected topics boolean array
        const newSelectedTopics = [...selectedTopicsBoolean];
        newSelectedTopics[index] = !newSelectedTopics[index];
        setSelectedTopicsBoolean(newSelectedTopics);

        // Update the selected topics store
        if (newSelectedTopics[index]) {
            addSelectedTopic(topic);
        } else {
            removeSelectedTopic(topic.id);
        }
    }, [selectedTopicsBoolean, addSelectedTopic, removeSelectedTopic, setSelectedTopicsBoolean]);

    const handleToggleSelectAll = useCallback((event) => {
        const isChecked = event.target.checked;

        if (isChecked) {
            const newSelectedTopics = new Array(topicsData.length).fill(true);
            setSelectedTopicsBoolean(newSelectedTopics);
            setSelectedTopics(topicsData);
        } else {
            setSelectedTopicsBoolean(Array(topicsData.length).fill(false));
            setSelectedTopics([]);
        }
    }, [topicsData, setSelectedTopicsBoolean, setSelectedTopics]);

    return {
        handleButtonClick,
        handleToggleSelectAll
    };
};

export default useTopicSelectionHandlers;