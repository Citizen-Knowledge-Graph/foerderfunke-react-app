import {useProfileSectionStore} from "../../../storage/useProfileSectionStore";
import {useEffect} from "react";

const useInitializeProfileSectionStore = (profileSection, entityData) => {
    const initializeSectionStore = useProfileSectionStore((state) => state.initializeSectionStore);

    useEffect(() => {
        const newSectionStore = {
            profileSection: profileSection,
            entityData: entityData,
            nestedSection: null,
        }
        initializeSectionStore(newSectionStore);
    }, [entityData, initializeSectionStore, profileSection]);
}

export default useInitializeProfileSectionStore;
