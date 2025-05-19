import {create} from 'zustand';

export const useInitialisationState = create((set) => ({
    initialisationState: false,
    setInitialisationState: (state) => {
        set({initialisationState: state});
    }
}));

export const useValidationUpdate = create((set) => ({
    updateCounter: -1,
    triggerValidationUpdate: () => {
        console.log('STATE UPDATE: We are triggering a validation run');
        set((state) => ({updateCounter: (state.updateCounter + 1) % 1000}));
    },
    validationIsLoading: false,
    setValidationIsLoading: (isLoading) => {
        set({validationIsLoading: isLoading});
    }
}));

export const useQuestionsUpdate = create((set) => ({
    updateCounter: 0,
    triggerQuestionsUpdate: () => {
        set((state) => ({updateCounter: (state.updateCounter + 1) % 1000}));
    },
    questionsAreLoading: false,
    setQuestionsAreLoading: (isLoading) => {
        set({questionsAreLoading: isLoading});
    }
}));

