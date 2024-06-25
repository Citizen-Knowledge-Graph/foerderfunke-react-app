import { useProfileSectionStore} from "../../../storage/zustand";

const useUpdateProfileSection = (id, entityData, nested) => {
    const updateProfileSectionData = useProfileSectionStore((state) => state.updateProfileSectionData);

    if (nested) {
        return () => updateProfileSectionData(id, entityData);
    }

};

export default useUpdateProfileSection;
