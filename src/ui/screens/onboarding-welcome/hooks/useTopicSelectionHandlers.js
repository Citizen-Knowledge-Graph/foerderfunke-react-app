import { useCallback, useEffect, useState } from 'react';
import { useSelectedTopicsStore } from "../../../storage/zustand";
import { questionsStackStore } from "../../../storage/zustand";

const useTopicSelectionHandlers = (topicsData, selectedTopics) => {
    const [selectedTopicsBoolean, setSelectedTopicsBoolean] = useState({});

    const addSelectedTopic = useSelectedTopicsStore((state) => state.addSelectedTopic);
    const removeSelectedTopic = useSelectedTopicsStore((state) => state.removeSelectedTopic);
    const setSelectedTopics = useSelectedTopicsStore((state) => state.setSelectedTopics);
    const resetQuestionsStack = questionsStackStore((state) => state.resetQuestionsStack);

    useEffect(() => {
        if (topicsData?.length > 0) {
            const groupedTopics = topicsData.reduce((acc, topic) => {
                (acc[topic.category] = acc[topic.category] || []).push(topic);
                return acc;
            }, {});

            Object.entries(groupedTopics).forEach(([category, topics]) => {
                const newCategorySelectedTopicsBoolean = topics.map(topic =>
                    selectedTopics.some(selectedTopic => selectedTopic.id === topic.id)
                );
                setSelectedTopicsBoolean((prevSelectedTopicsBoolean) => ({
                    ...prevSelectedTopicsBoolean,
                    [category]: newCategorySelectedTopicsBoolean,
                }));
            });
        }
    }, [topicsData, selectedTopics]);

    const handleButtonClick = useCallback((topic, index, category) => {
        let categorySelectedTopicsBoolean = selectedTopicsBoolean[category];
        categorySelectedTopicsBoolean[index] = !categorySelectedTopicsBoolean[index];
        setSelectedTopicsBoolean((prevSelectedTopicsBoolean) => ({
            ...prevSelectedTopicsBoolean,
            [category]: categorySelectedTopicsBoolean,
        }));

        if (categorySelectedTopicsBoolean[index]) {
            addSelectedTopic(topic);
        } else {
            removeSelectedTopic(topic.id);
        }

        resetQuestionsStack();
    }, [selectedTopicsBoolean, addSelectedTopic, removeSelectedTopic, resetQuestionsStack]);

    const handleToggleSelectAll = useCallback((event, category) => {
        const isChecked = event.target.checked;

        if (isChecked) {
            const newCategorySelectedTopicsBoolean = new Array(topicsData[category].length).fill(true);
            setSelectedTopicsBoolean((prevSelectedTopicsBoolean) => ({
                ...prevSelectedTopicsBoolean,
                [category]: newCategorySelectedTopicsBoolean,
            }));
            setSelectedTopics((prevSelectedTopics) => {
                const newTopics = topicsData[category].filter(
                    (topic) => !prevSelectedTopics.some(existing => existing.id === topic.id)
                );
                return [
                    ...prevSelectedTopics,
                    ...newTopics,
                ];
            });
        } else {
            const newCategorySelectedTopicsBoolean = new Array(topicsData[category].length).fill(false);
            setSelectedTopicsBoolean((prevSelectedTopicsBoolean) => ({
                ...prevSelectedTopicsBoolean,
                [category]: newCategorySelectedTopicsBoolean,
            }));
            setSelectedTopics((prevSelectedTopics) => {
                return prevSelectedTopics.filter(
                    (topic) => !topicsData[category].some(existing => existing.id === topic.id)
                );
            });
        }
    }, [topicsData, setSelectedTopics]);

    return {
        selectedTopicsBoolean,
        handleButtonClick,
        handleToggleSelectAll,
    };
};

export default useTopicSelectionHandlers;