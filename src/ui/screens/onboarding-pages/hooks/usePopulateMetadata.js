import { useEffect, useRef } from "react";
import { useMetadataStore } from "@/ui/storage/zustand";
import useFetchMetadata from "@/ui/shared-hooks/useFetchMetadata";
import { useLanguageStore } from "@/ui/storage/useLanguageStore";

const usePopulateMetadata = () => {
    const language = useLanguageStore((state) => state.language);
    const fetchMetadata = useFetchMetadata();
    const metadata = useMetadataStore((state) => state.metadata);
    const isRunningRef = useRef(false);

    useEffect(() => {
        if (!metadata[language]?.rp && !isRunningRef.current) {
            const produceMetadata = async () => {
                isRunningRef.current = true;
                await fetchMetadata();
                isRunningRef.current = false;
            };

            produceMetadata();
        }
    }, [metadata, fetchMetadata, language]);

    return metadata[language] || null;
};

export default usePopulateMetadata;

