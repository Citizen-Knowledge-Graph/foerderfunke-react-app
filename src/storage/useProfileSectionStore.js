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
        return findDeepestEntityData(data);
    },
    retrieveCurrentProfileSection() {
        const data = get().sectionStore;
        console.log(`STATE UPDATE: We are retrieving the current profile section`);
        return findDeepestProfileSection(data);
    },
    retrieveCurrentDatafield() {
        const data = get().sectionStore;
        console.log(`STATE UPDATE: We are retrieving the current datafield`);
        return findDeepestDatafield(data);
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
    deleteLastNestedSection: () =>
        console.log('STATE UPDATE: We are deleting the last nested section') ||
        set((state) => ({
            sectionStore: findAndDeleteLastNestedSection(state.sectionStore),
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

const findDeepestEntityData = (section) => {
    if (!section.nestedSection) {
        return section.entityData;
    }
    return findDeepestEntityData(section.nestedSection);
};

const findDeepestDatafield = (section) => {
    if (!section.nestedSection) {
        return section.datafield ? section.datafield : null;
    }
    return findDeepestDatafield(section.nestedSection);
};

const findDeepestProfileSection = (section) => {
    if (!section.nestedSection) {
        return section.profileSection;
    }
    return findDeepestProfileSection(section.nestedSection);
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

const findAndDeleteLastNestedSection = (section) => {
    const findSecondToLast = (section) => {
        if (!section.nestedSection || !section.nestedSection.nestedSection) {
            return section;
        }
        return findSecondToLast(section.nestedSection);
    };

    const secondToLastSection = findSecondToLast(section);
    if (secondToLastSection && secondToLastSection.nestedSection) {
        secondToLastSection.nestedSection = null;
    }

    return section;
};
