import {create} from "zustand";

export const useProfileSectionStore = create((set) => ({
    sectionStore: {},
    updateDeepestDatafield: (newDatafield) =>
        console.log('STATE UPDATE: We are updating the deepest datafield') ||
        set((state) => ({
            sectionStore: updateDeepestDatafield(state.sectionStore, newDatafield),
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
