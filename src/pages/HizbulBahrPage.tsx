import React from 'react';
import { useIndexPageLogic } from '@/hooks/useIndexPageLogic';
import { LoadingScreen } from '@/components/LoadingScreen';
import { ErrorScreen } from '@/components/ErrorScreen';
import { IndexPageLayout } from '@/components/IndexPageLayout';

const HizbulBahrPage = () => {
  const { appState, data, loading, error, handlers } = useIndexPageLogic();

  // Force Hizbul Bahr to be shown
  React.useEffect(() => {
    if (!appState.showHizbulBahr) {
      handlers.handleHizbulBahrToggle();
    }
  }, [appState.showHizbulBahr, handlers.handleHizbulBahrToggle]);

  if (loading) {
    return <LoadingScreen selectedDay={appState.selectedDay} />;
  }

  if (error) {
    return <ErrorScreen selectedDay={appState.selectedDay} error={error} />;
  }

  return (
    <IndexPageLayout
      appState={appState}
      data={data}
      handlers={handlers}
    />
  );
};

export default HizbulBahrPage;