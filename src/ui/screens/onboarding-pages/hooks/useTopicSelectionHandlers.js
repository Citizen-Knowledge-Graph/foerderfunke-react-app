import { useCallback, useState } from "react";
import { useSelectedTopicsStore } from "@/ui/storage/zustand";
import useRunValidation from "@/ui/shared-hooks/useRunValidation";

const useTopicSelectionHandlers = (topicsData) => {
    const selectedTopics = useSelectedTopicsStore((state) => state.selectedTopics);
    const [selectedTopicsLocal, setSelectedTopicsLocal] = useState(selectedTopics);
    const setSelectedTopics = useSelectedTopicsStore((state) => state.setSelectedTopics);
    const triggerValidation = useRunValidation()

    const handleButtonClick = useCallback((topic) => {
        const newSelectedTopicsTemp = selectedTopicsLocal?.some(selected => selected.id === topic.id)
            ? selectedTopicsLocal.filter(selected => selected.id !== topic.id)
            : [...selectedTopicsLocal, topic];
        setSelectedTopicsLocal(newSelectedTopicsTemp);
    }, [selectedTopicsLocal]);

    const handleToggleSelectAll = useCallback((event, category) => {
        const isChecked = event.target.checked;
        const categoryTopics = topicsData.filter(topic => topic.category === category);
        const newSelectedTopicsLocal = isChecked
            ? [
                ...selectedTopicsLocal,
                ...categoryTopics.filter(
                    item => !selectedTopicsLocal.some(t => t.id === item.id)
                )
            ]
            : selectedTopicsLocal.filter(
                item => !categoryTopics.some(t => t.id === item.id)
            );
        setSelectedTopicsLocal(newSelectedTopicsLocal);
    }, [topicsData, selectedTopicsLocal]);

    const persistSelectedTopics = () => {
        setSelectedTopics(selectedTopicsLocal);
        triggerValidation();
    };

    return {
        selectedTopicsLocal,
        handleButtonClick,
        handleToggleSelectAll,
        persistSelectedTopics
    };
};

export default useTopicSelectionHandlers;
