import React, { createContext, useContext } from 'react';
import { useInitialiseApplication } from '@/ui/shared-hooks/useInitialiseApplication';

const InitCtx = createContext(true);

export const AppInitialisationProvider = ({ children }) => {
  const isLoading = useInitialiseApplication();
  return <InitCtx.Provider value={isLoading}>{children}</InitCtx.Provider>;
};

export const useIsAppInitializing = () => {
  return useContext(InitCtx);
};