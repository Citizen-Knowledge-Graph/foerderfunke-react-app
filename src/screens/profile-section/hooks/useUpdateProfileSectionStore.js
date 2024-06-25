import {useProfileSectionStore} from "../../../storage/useProfileSectionStore";

const useUpdateProfileSectionStore = () => {
    const updateDeepestDatafield = useProfileSectionStore((state) => state.updateDeepestDatafield);
    const updateDeepestNestedSection = useProfileSectionStore((state) => state.updateDeepestNestedSection);

    return (item, currentField, currentEntityData) => {
        const newEntityData = {
            id: item.replace(" ", ""),
            type: currentField.objectClass,
            parentId: currentEntityData.id,
            parentType: currentEntityData.type,
            parentDatafield: currentField.datafield,
        };

        const newSectionStore = {
            profileSection: currentField.objectClass,
            entityData: newEntityData,
            nestedSection: null
        };

        updateDeepestDatafield(currentField.datafield);
        updateDeepestNestedSection(newSectionStore);
    };
};

export default useUpdateProfileSectionStore;
