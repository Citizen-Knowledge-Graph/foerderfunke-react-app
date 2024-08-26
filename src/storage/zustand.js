import {create} from 'zustand';

export const useUserStore = create((set) => ({
    activeUserId: 'ff:kinderzuschlag-user-profile',
    updateUserId: (newUserId) => {
        console.log('STATE UPDATE: We are switching user');
        set((state) => ({activeUserId: newUserId}));
    },
}));

export const useMetadataStore = create((set) => ({
    metadata: {},
    updateMetadata: (newMetadata) => {
        console.log('STATE UPDATE: We are updating the metadata');
        set((state) => ({metadata: newMetadata}));
    },
}));

export const useValidationReportStore = create((set) => ({
    validationReport: {},
    updateValidationReport: (newValidationReport) => {
        console.log('STATE UPDATE: We are updating the validation report');
        set((state) => ({validationReport: newValidationReport}));
    },
}));

export const useSelectedTopicsStore = create((set) => ({
    selectedTopics: [],
    setSelectedTopics(newSelectedTopics) {
        console.log('STATE UPDATE: We are setting the selected topics');
        set({selectedTopics: newSelectedTopics});
    },
    addSelectedTopic: (newSelectedTopic) => {
        console.log('STATE UPDATE: We are updating the selected topics');
        set((state) => ({
            selectedTopics: state.selectedTopics.some(topic => topic.id === newSelectedTopic.id)
                ? state.selectedTopics
                : [...state.selectedTopics, newSelectedTopic]
        }));
    },
    removeSelectedTopic: (topicId) => {
        console.log('STATE UPDATE: We are removing a selected topic');
        set((state) => ({
            selectedTopics: state.selectedTopics.filter(topic => topic.id !== topicId)
        }));
    }
}));

export const useQuestionsStore = create((set) => ({
    questions: {},
    updateQuestions: (newQuestions) => {
        console.log('STATE UPDATE: We are updating the questions');
        set((state) => ({questions: newQuestions}));
    }
}));
