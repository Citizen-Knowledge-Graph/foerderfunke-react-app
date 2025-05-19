import { useMetadataStore } from "@/ui/storage/zustand";
import { useLanguageStore } from "./useLanguageStore";

const useAccessMetadata = () => {
    const language = useLanguageStore((state) => state.language);
    const metadata = useMetadataStore((state) => state.metadata);

    return metadata[language] || null;
};

export default useAccessMetadata;