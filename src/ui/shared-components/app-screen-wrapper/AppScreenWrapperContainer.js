import { useIsAppInitializing } from '@/AppInitialisationProvider';
import AppScreenWrapper from './AppScreenWrapper';

const AppScreenWrapperContainer = ({ children, isLoading=false, scrollKey, backTarget }) => {
  const initLoading = useIsAppInitializing();
  const appIsLoading = initLoading.loading || isLoading;

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
