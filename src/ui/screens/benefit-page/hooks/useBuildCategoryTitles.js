import { useMemo, } from 'react';
import useFetchData from "@/ui/shared-hooks/utility/useFetchResource";
import { useMetadataStore } from '@/ui/storage/zustand';

const useBuildCategoryTitles = (id, language) => {
    const metadata = useMetadataStore((state) => state.metadata);
    const topicsData = useFetchData('assets/data/topics/topics-list.json');

    const rpMetaData = useMemo(() => {
        if (!metadata || !id) return null;
        return metadata['ff:hasRP']?.find(rp => rp['@id'] === id) || null;
    }, [metadata, id]);

    const categories = useMemo(() => {
        const raw = rpMetaData?.["ff:category"];
        const normalized = Array.isArray(raw) ? raw : raw ? [raw] : [];
        return normalized.map(category => category?.["@id"]);
      }, [rpMetaData]);

    return useMemo(() => {
        if (categories.length === 0 || !topicsData) return null;
        return categories.map((categoryUri) => {
            const topic = topicsData.find((topic) => topic.id === categoryUri);
            return topic ? topic.title[language] : '';
        });
    }, [categories, topicsData, language]);
};

export default useBuildCategoryTitles;
