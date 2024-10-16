import {useProfileSectionStore} from "../../../../core/storage/useProfileSectionStore";
import {useEffect} from "react";

// UNUSED

const useInitializeProfileSectionStore = (entityData) => {
    const initializeSectionStore = useProfileSectionStore((state) => state.initializeSectionStore);

    useEffect(() => {
        const newSectionStore = {
            entityData: entityData,
            nestedSection: null,
        }
        initializeSectionStore(newSectionStore);
    }, [entityData, initializeSectionStore]);
}

export default useInitializeProfileSectionStore;
