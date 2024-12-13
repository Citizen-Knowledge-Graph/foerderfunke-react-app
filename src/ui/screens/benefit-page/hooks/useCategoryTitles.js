import {useMemo} from 'react';

const useCategoryTitles = (topicsData, benefitPageData, language) => {
    return useMemo(() => {
        if (!benefitPageData?.categories || !topicsData) return [];

        return benefitPageData.categories.map((categoryUri) => {
            const topicId = categoryUri.startsWith("https")
                ? `ff:${categoryUri.split("#")[1]}`
                : categoryUri;
            const topic = topicsData.find((topic) => topic.id === topicId);
            return topic ? topic.title[language] : '';
        });
    }, [benefitPageData?.categories, topicsData, language]);
};

export default useCategoryTitles;
