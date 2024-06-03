import { useEffect } from 'react';
import { create } from 'zustand';
import { useMediaQuery } from '@mui/material';

export const useStore = create((set) => ({
    isDesktop: false,
    setIsDesktop: (isDesktop) => set({ isDesktop }),
}));

const ViewportUpdater = () => {
    const matches = useMediaQuery((theme) => theme.breakpoints.up('md'));
    const setIsDesktop = useStore((state) => state.setIsDesktop);

    useEffect(() => {
        setIsDesktop(matches);
    }, [matches, setIsDesktop]);

    return null;
};

export default ViewportUpdater;
