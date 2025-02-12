import { useCallback, useEffect, useState } from "react";
import { useSelectedTopicsStore } from "../../../storage/zustand";
import { questionsStackStore } from "../../../storage/zustand";

const useTopicSelectionHandlers = (topicsData) => {
    const [selectedTopicsBoolean, setSelectedTopicsBoolean] = useState({});

    const selectedTopics = useSelectedTopicsStore((state) => state.selectedTopics);
    const addSelectedTopic = useSelectedTopicsStore((state) => state.addSelectedTopic);
    const removeSelectedTopic = useSelectedTopicsStore((state) => state.removeSelectedTopic);
    const setSelectedTopics = useSelectedTopicsStore((state) => state.setSelectedTopics);
    const resetQuestionsStack = questionsStackStore((state) => state.resetQuestionsStack);

    console.log("Selected topics: ", selectedTopics);

    useEffect(() => {
        if (!topicsData?.length) return;
        console.log("🔄 Syncing selectedTopicsBoolean with selectedTopics");

        const groupedTopics = topicsData.reduce((acc, topic) => {
            (acc[topic.category] = acc[topic.category] || []).push(topic);
            return acc;
        }, {});

        const newSelectedTopicsBoolean = {};
        Object.entries(groupedTopics).forEach(([category, topics]) => {
            newSelectedTopicsBoolean[category] = topics.map(topic =>
                selectedTopics.some(selected => selected.id === topic.id)
            );
        });

        setSelectedTopicsBoolean(newSelectedTopicsBoolean);
    }, [topicsData, selectedTopics]);

    const handleButtonClick = useCallback((topic, index, category) => {
        setSelectedTopicsBoolean((prev) => {
            const newCategoryState = [...prev[category]];
            newCategoryState[index] = !newCategoryState[index];

            return { ...prev, [category]: newCategoryState };
        });

        if (selectedTopics.some(selected => selected.id === topic.id)) {
            removeSelectedTopic(topic.id);
        } else {
            addSelectedTopic(topic);
        }

        resetQuestionsStack();
    }, [selectedTopics, addSelectedTopic, removeSelectedTopic, resetQuestionsStack]);

    const handleToggleSelectAll = useCallback((event, category) => {
        const isChecked = event.target.checked;
        const categoryTopics = topicsData.filter(topic => topic.category === category);
    
        console.log(`🔄 Toggle All - ${category}: ${isChecked ? "Selecting all" : "Deselecting all"}`);
    
        setSelectedTopicsBoolean((prev) => ({
            ...prev,
            [category]: new Array(categoryTopics.length).fill(isChecked),
        }));
    
        const newSelectedTopics = isChecked
            ? [...selectedTopics, ...categoryTopics.filter(
                (topic) => !selectedTopics.some(existing => existing.id === topic.id)
              )]
            : selectedTopics.filter(topic => topic.category !== category);

        setSelectedTopics(newSelectedTopics);
    }, [topicsData, setSelectedTopics, selectedTopics]);

    return {
        selectedTopicsBoolean,
        handleButtonClick,
        handleToggleSelectAll,
    };
};

export default useTopicSelectionHandlers;