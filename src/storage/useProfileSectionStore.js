import {create} from "zustand";

export const useProfileSectionStore = create((set, get) => ({
    sectionStore: {},
    initializeSectionStore(newSectionStore) {
        console.log(`STATE UPDATE: We are initializing the section store`);
        console.log(newSectionStore)
        set({sectionStore: newSectionStore});
    },
    retrieveCurrentEntityData() {
        const data = get().sectionStore;
        console.log(`STATE UPDATE: We are retrieving the current entity data`);
        return findDeepest(data);
    },
    updateDeepestDatafield: (newDatafield) =>
        console.log('STATE UPDATE: We are updating the deepest datafield') ||
        set((state) => ({
            sectionStore: updateDeepestDatafield(state.sectionStore, newDatafield),
        })),
    updateDeepestNestedSection: (newNestedSection) =>
        console.log('STATE UPDATE: We are updating the deepest nested section') ||
        set((state) => ({
            sectionStore: updateDeepestNestedSection(state.sectionStore, newNestedSection),
        })),
}));

const updateDeepestDatafield = (section, newDatafield) => {
    if (!section.nestedSection) {
        return {
            ...section,
            datafield: newDatafield,
        };
    }

    return {
        ...section,
        nestedSection: updateDeepestDatafield(section.nestedSection, newDatafield),
    };
};

const findDeepest = (section) => {
    if (!section.nestedSection) {
        return section.entityData;
    }
    return findDeepest(section.nestedSection);
};

const updateDeepestNestedSection = (section, newNestedSection) => {
    const findDeepestAndUpdate = (section) => {
        if (!section.nestedSection) {
            section.nestedSection = newNestedSection;
            return section;
        }
        return findDeepestAndUpdate(section.nestedSection);
    };

    return findDeepestAndUpdate(section);
};
