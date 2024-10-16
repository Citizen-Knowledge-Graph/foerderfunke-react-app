import {useProfileSectionStore} from "../../../../core/storage/useProfileSectionStore";

const useUpdateProfileSectionStore = () => {
    const updateDeepestDataField = useProfileSectionStore((state) => state.updateDeepestDataField);
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

        updateDeepestDataField(currentField.datafield);
        updateDeepestNestedSection(newSectionStore);
    };
};

export default useUpdateProfileSectionStore;
