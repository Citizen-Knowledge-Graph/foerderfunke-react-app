import {create} from "zustand";

export const useProfileSectionStore = create((set, get) => ({
    sectionStore: {},
    defaultSectionStore: {
        entityData: {
            id: "ff:quick-check-user",
            type: "ff:Citizen"
        },
        nestedSection: null,
    },
    initializeSectionStore(userId, userType) {
        console.log(`STATE UPDATE: We are initializing the section store`);
        set({sectionStore: 
            {
                entityData: {
                    id: userId,
                    type: userType
                },
                nestedSection: null,
            }
        });
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
    retrieveCurrentDataField() {
        const data = get().sectionStore;
        console.log(`STATE UPDATE: We are retrieving the current datafield`);
        return findDeepestDataField(data);
    },
    updateDeepestDataField: (newDataField) =>
        console.log('STATE UPDATE: We are updating the deepest datafield') ||
        set((state) => ({
            sectionStore: updateDeepestDataField(state.sectionStore, newDataField),
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

const updateDeepestDataField = (section, newDataField) => {
    if (!section.nestedSection) {
        return {
            ...section,
            dataField: newDataField,
        };
    }

    return {
        ...section,
        nestedSection: updateDeepestDataField(section.nestedSection, newDataField),
    };
};

const findDeepestEntityData = (section) => {
    if (!section.nestedSection) {
        return section.entityData;
    }
    return findDeepestEntityData(section.nestedSection);
};

const findDeepestDataField = (section) => {
    if (!section.nestedSection) {
        return section.dataField ? section.dataField : null;
    }
    return findDeepestDataField(section.nestedSection);
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
