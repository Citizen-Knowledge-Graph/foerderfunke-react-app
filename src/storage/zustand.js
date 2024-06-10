import { create } from 'zustand';

export const useUserStore = create((set) => ({
    activeUserId: 'kinderzuschlag-user-profile',
    updateUserId: (newUserId) => {
        console.log('STATE UPDATE: We are switching user');
        set((state) => ({ activeUserId: newUserId }));
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
        set((state) => {
            if (state.sections.some(section => section.id === id)) {
                console.log('Section already exists, not adding:', id);
                return state; // No state update if the section exist
            }
            const newSection = { id, next: nextId, completed: false };
            return { sections: [...state.sections, newSection] };
        });
    },
    updateCompletedSections: (id) => {
        console.log('STATE UPDATE: We are updating the completed sections: id', id);
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
