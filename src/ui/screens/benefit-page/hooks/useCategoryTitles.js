import {useMemo} from 'react';

const useCategoryTitles = (topicsData, rpMetaData, language) => {
    return useMemo(() => {
        if (!rpMetaData?.categories || !topicsData) return [];

        return rpMetaData.categories.map((categoryUri) => {
            const topicId = categoryUri.startsWith("https")
                ? `ff:${categoryUri.split("#")[1]}`
                : categoryUri;
            const topic = topicsData.find((topic) => topic.id === topicId);
            return topic ? topic.title[language] : '';
        });
    }, [rpMetaData?.categories, topicsData, language]);
};

export default useCategoryTitles;
