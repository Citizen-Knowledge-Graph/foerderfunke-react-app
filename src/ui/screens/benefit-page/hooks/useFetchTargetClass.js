import { useMemo, } from 'react';
import { useMetadataStore } from '@/ui/storage/zustand';

const useFetchClassTag = (id) => {
    const metadata = useMetadataStore((state) => state.metadata);

    return useMemo(() => {
        if (!metadata || !id) return null;
        const rpMetaData = metadata['ff:hasRP']?.find(rp => rp['@id'] === id) || null;
        if (!rpMetaData) return null;
        return rpMetaData['ff:targetClass']?.["@id"]
    }, [metadata, id]);
};

export default useFetchClassTag;
