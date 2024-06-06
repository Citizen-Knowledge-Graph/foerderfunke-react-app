import { useEffect } from 'react';
import { useProfileInputSectionStore } from '../../../storage/zustand';

const useInitializeProfileSections = (profileSections) => {
    useEffect(() => {
        if (!profileSections || profileSections.length === 0) return;

        profileSections.sections.forEach((currentItem, i) => {
            const newDictEntry = {
                id: currentItem.id,
                nextId: profileSections[i + 1]?.id,
            };
            useProfileInputSectionStore
                .getState()
                .initialiseSection(newDictEntry.id, newDictEntry.nextId, i === 0);
        });
    }, [profileSections]);
};

export default useInitializeProfileSections;
