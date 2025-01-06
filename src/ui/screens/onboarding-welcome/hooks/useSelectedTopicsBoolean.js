import { useEffect, useState } from "react";

const useSelectedTopicsBoolean = (topicsData, selectedTopics) => {
    const [selectedTopicsBoolean, setSelectedTopicsBoolean] = useState([]);

    useEffect(() => {
        if (topicsData?.length > 0) {
            const newSelectedTopicsBoolean = topicsData.map(topic =>
                selectedTopics.some(selectedTopic => selectedTopic.id === topic.id)
            );
            setSelectedTopicsBoolean(newSelectedTopicsBoolean);
        }
    }, [topicsData, selectedTopics]);

    return selectedTopicsBoolean;
};

export default useSelectedTopicsBoolean;