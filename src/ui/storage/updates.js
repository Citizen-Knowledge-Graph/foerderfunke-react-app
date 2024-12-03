import {create} from 'zustand';

export const useValidationUpdate = create((set) => ({
    updateCounter: 0,
    triggerValidationUpdate: () => {
        console.log('STATE UPDATE: We are triggering a validation run');
        set((state) => ({updateCounter: state.updateCounter + 1}));
    },
}));

export const useQuestionsUpdate = create((set) => ({
    updateCounter: 0,
    triggerQuestionsUpdate: () => {
        console.log('STATE UPDATE: We are triggering a validation run');
        set((state) => ({updateCounter: state.updateCounter + 1}));
    },
}));
