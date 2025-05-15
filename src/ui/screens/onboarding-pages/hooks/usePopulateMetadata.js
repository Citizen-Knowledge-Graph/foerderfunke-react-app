import { useContext, useEffect, useRef } from "react";
import { LanguageContext } from "@/ui/language/LanguageContext";
import { useMetadataStore } from "@/ui/storage/zustand";
import useFetchMetadata from "@/ui/shared-hooks/useFetchMetadata";

const usePopulateMetadata = () => {
    const { language } = useContext(LanguageContext);
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

