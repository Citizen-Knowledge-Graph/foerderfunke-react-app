import { useMemo, } from 'react';
import useFetchData from "@/ui/shared-hooks/utility/useFetchResource";
import { useMetadataStore } from '@/ui/storage/zustand';

const useBuildCategoryTitles = (id, language) => {
    const metadata = useMetadataStore((state) => state.metadata);
    const topicsData = useFetchData('assets/data/topics/topics-list.json');

    const rpMetaData = useMemo(() => {
        const metadataByLanguage = metadata[language];

        if (!metadataByLanguage || !id) return null;

        const rpUri = id?.includes(":") ? `https://foerderfunke.org/default#${id.split(":")[1]}` : null;

        return metadataByLanguage.rp?.[rpUri] || null;
    }, [id, metadata, language]);

    return useMemo(() => {
        if (!rpMetaData?.categories || !topicsData) return null;

        return rpMetaData.categories.map((categoryUri) => {
            const topicId = categoryUri.startsWith("https")
                ? `ff:${categoryUri.split("#")[1]}`
                : categoryUri;
            const topic = topicsData.find((topic) => topic.id === topicId);
            return topic ? topic.title[language] : '';
        });
    }, [rpMetaData?.categories, topicsData, language]);
};

export default useBuildCategoryTitles;
