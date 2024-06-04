import { ProfileSectionsData } from './OnboardingSectionsModel';
import { useProfileInputSectionStore } from '../../storage/zustand';

// config
const profileSections = [
    {
        id: 'about-you',
        title: 'About you',
    },
    {
        id: 'job',
        title: 'Job',
    },
    {
        id: 'income',
        title: 'Income',
    },
    {
        id: 'education',
        title: 'Education',
    },
    {
        id: 'children',
        title: 'Children',
    },
];

export const fetchOnboardingSectionsData = async (userId) => {
    const newProfileSectionsData = new ProfileSectionsData(userId);
    useProfileInputSectionStore.getState().resetSectionStore();

    for (let i = 0; i < profileSections.length; i++) {
        const currentItem = profileSections[i];
        //
        // populate new content card
        const newProfileSectionStatus = {
            id: currentItem.id,
            title: currentItem.title,
        };
        newProfileSectionsData.addPersonalisedData(newProfileSectionStatus);
        //
        // populate state dictionary
        const newDictEntry = {
            id: currentItem.id,
            nextId: profileSections[i + 1]?.id,
        };
        useProfileInputSectionStore
            .getState()
            .initialiseSection(newDictEntry.id, newDictEntry.nextId, i === 0);
    }
    return newProfileSectionsData;
};
