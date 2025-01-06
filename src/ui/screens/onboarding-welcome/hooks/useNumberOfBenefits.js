import { useEffect, useState } from "react";

const useNumberOfBenefits = (selectedTopics, metadata) => {
    const [numberOfBenefits, setNumberOfBenefits] = useState(0);

    useEffect(() => {
        if (selectedTopics.length > 0 && metadata?.rp) {
            let distinctRPs = {};
            for (let topic of selectedTopics) {
                const topicUri = "https://foerderfunke.org/default#" + topic.id.split(":")[1];
                const rps = Object.values(metadata.rp).filter(rp => rp.categories.includes(topicUri));
                for (let rp of rps) {
                    distinctRPs[rp.uri] = true;
                }
            }
            setNumberOfBenefits(Object.keys(distinctRPs).length);
        } else {
            setNumberOfBenefits(0); // Reset if no topics or metadata
        }
    }, [selectedTopics, metadata]);

    return numberOfBenefits;
};

export default useNumberOfBenefits;
