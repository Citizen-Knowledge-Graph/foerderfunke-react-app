import { create } from 'zustand';

export const useUserStore = create((set) => ({
    userId: 'kinderzuschlag-user-profile',
    updateUserId: (newUserId) => {
        console.log('STATE UPDATE: We are switching user');
        set((state) => ({ userId: newUserId }));
    },
}));

export const useProfileInputSectionStore = create((set) => ({
    activeSection: 'about-you',
    sections: [],
    resetSectionStore: () => {
        console.log('STATE UPDATE: We are resetting the section store');
        set((state) => ({ activeSection: 'about-you', sections: [] }));
    },
    initialiseSection: (id, nextId) => {
        console.log(
            'STATE UPDATE: We are adding a new section to the sections store'
        );
        const newSection = { id: id, next: nextId, completed: false };
        set((state) => ({ sections: [...state.sections, newSection] }));
    },
    updateCompletedSections: (id) => {
        console.log('STATE UPDATE: We are updating the completed sections');
        let nextSection;
        set((state) => ({
            sections: state.sections.map((section) => {
                if (section.id === id) {
                    section.completed = true;
                    nextSection = section.next;
                }
                return section;
            }),
            activeSection: nextSection,
        }));
    },
}));
