import { useContext } from "react";
import { LanguageContext } from "@/ui/language/LanguageContext";
import { useMetadataStore } from "@/ui/storage/zustand";

const useAccessMetadata = () => {
    const { language } = useContext(LanguageContext);
    const metadata = useMetadataStore((state) => state.metadata);

    return metadata[language] || null;
};

export default useAccessMetadata;