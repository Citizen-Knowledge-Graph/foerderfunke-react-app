import { useMetadataStore } from "@/ui/storage/zustand";
import validationManager from "@/core/managers/validationManager";
import { useValidationUpdate } from "@/ui/storage/updates";

const useFetchMetadata = () => {
    const setValidationIsLoading = useValidationUpdate.getState().setValidationIsLoading;

    const fetchMetadata = async () => {
        setValidationIsLoading(true);
        const metadadata = await validationManager.fetchMetadata();
        if (metadadata) {           
            useMetadataStore.getState().updateMetadata(metadadata);
        }
        setValidationIsLoading(false);
    };

    return fetchMetadata;
};

export default useFetchMetadata;
