import { useMemo } from "react";

const useNumberOfBenefits = (selectedTopics, metadata) => {
    return useMemo(() => {
        if (!selectedTopics?.length || !metadata?.rp) return 0;

        const topicUris = selectedTopics.map(
            topic => "https://foerderfunke.org/default#" + topic.id.split(":")[1]
        );

        const uniqueRps = new Set();

        for (const rp of Object.values(metadata.rp)) {
            if (rp.categories.some(cat => topicUris.includes(cat))) {
                uniqueRps.add(rp.uri);
            }
        }

        return uniqueRps.size;
    }, [selectedTopics, metadata]);
};

export default useNumberOfBenefits;