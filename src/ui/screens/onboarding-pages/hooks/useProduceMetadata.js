import { useEffect, useRef } from "react";
import { useMetadataStore } from "@/ui/storage/zustand";
import useFetchMetadata from "@/ui/shared-hooks/useFetchMetadata";

const useProduceMetadata = (language) => {
    const fetchMetadata = useFetchMetadata();
    const metadata = useMetadataStore((state) => state.metadata);
    const isRunningRef = useRef(false);

    useEffect(() => {
        const produceMetadata = async () => {
            if (isRunningRef.current || metadata[language]?.rp) return;
            isRunningRef.current = true;

            await fetchMetadata();

            isRunningRef.current = false;
        };

        produceMetadata();
    }, [metadata, fetchMetadata, language]);

    return metadata[language] || null;
};

export default useProduceMetadata;