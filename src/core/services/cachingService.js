import { create } from 'zustand';

export const useCachingService = create((set, get) => ({
  resources: {},
  setResource: (key, data) => set((state) => ({
    resources: { ...state.resources, [key]: data }
  })),
  getResource: (key) => get().resources[key],
}));