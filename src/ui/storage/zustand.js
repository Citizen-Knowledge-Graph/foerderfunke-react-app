import {create} from 'zustand';

export const useUserStore = create((set) => ({
    activeUserId: null,
    updateUserId: (newUserId) => {
        console.log('STATE UPDATE: User id set to ' + newUserId);
        set((state) => ({activeUserId: newUserId}));
    },
}));

export const useMetadataStore = create((set) => ({
    metadata: {},
    updateMetadata: (newMetadata) => {
        console.log('STATE UPDATE: We are updating the metadata, new metadata: ' + newMetadata);
        set((_) => ({metadata: newMetadata}));
    }
}));

export const useValidationReportStore = create((set) => ({
    validationReport: {},
    updateValidationReport: (newValidationReport) => {
        console.log('STATE UPDATE: We are updating the validation report');
        set((_) => ({validationReport: newValidationReport}));
    },
    clear: () => {
        console.log('STATE UPDATE: We are clearing the validation report');
        set({validationReport: {}});
    }
}));

export const useSelectedTopicsStore = create((set) => ({
    selectedTopics: [],
    setSelectedTopics(newSelectedTopics) {
        console.log('STATE UPDATE: We are setting the selected topics: ' + newSelectedTopics);
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
    },
    clear: () => {
        console.log('STATE UPDATE: We are clearing the selected topics');
        set({selectedTopics: []});
    }
}));

export const useSelectedBenefitStore = create((set) => ({
    selectedBenefit: null,
    setSelectedBenefit(newSelectedBenefit) {
        console.log('STATE UPDATE: We are setting the selected benefit');
        set({selectedBenefit: newSelectedBenefit});
    },
    clear: () => {
        console.log('STATE UPDATE: We are clearing the selected benefit');
        set({selectedBenefit: null});
    }
}));

export const useQuestionsStore = create((set) => ({
    questionsReport: {},
    updateQuestions: (newQuestionsReport) => {
        set(() => ({questionsReport: newQuestionsReport}));
    }
}));

export const useQuizReportStore = create((set) => ({
    quizReport: {},
    updateQuizReport: (newQuizReport) => {
        set(() => ({quizReport: newQuizReport}));
    }
}));

export const questionsStackStore = create((set) => ({
    questionsStack: [],
    stackCounter: 0,
    addQuestionToStack: (newQuestion) => {
        set((state) => ({
            questionsStack: state.questionsStack.some(question => question?.datafield === newQuestion?.datafield)
                ? state.questionsStack
                : [...state.questionsStack, newQuestion]
        }));
    },
    resetQuestionsStack: () => {
        set({questionsStack: [], stackCounter: 0});
    },
    setStackCounter: (newCounter) => {
        set({stackCounter: newCounter});
    }
}));

