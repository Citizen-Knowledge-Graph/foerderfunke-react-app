import { useProfileInputSectionStore } from '../../../storage/zustand';

const useInitializeProfileSections = () => {
    return (profileSections) => {
        if (!profileSections || profileSections.length === 0) return;

        profileSections.sections.forEach((currentItem, i) => {
            const newDictEntry = {
                id: currentItem.id,
                nextId: profileSections.sections[i + 1]?.id,
            };
            useProfileInputSectionStore
                .getState()
                .initialiseSection(newDictEntry.id, newDictEntry.nextId, i === 0);
        });
    };
};

export default useInitializeProfileSections;
