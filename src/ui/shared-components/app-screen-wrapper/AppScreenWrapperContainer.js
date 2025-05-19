import { useIsAppInitializing } from '@/AppInitialisationProvider';
import AppScreenWrapper from './AppScreenWrapper';

const AppScreenWrapperContainer = ({ children, isLoading, scrollKey, backTarget }) => {
  const initLoading = useIsAppInitializing();
  const appIsLoading = initLoading || isLoading;

  return (
    <AppScreenWrapper
      isLoading={appIsLoading}
      scrollKey={scrollKey}
      backTarget={backTarget}
    >
      {children}
    </AppScreenWrapper>
  );
};

export default AppScreenWrapperContainer;
