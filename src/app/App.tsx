import React, { useEffect, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';

import styles from './App.module.scss';
import { initI18n } from './i18next';
import Router from './Router';

const AppReady: React.FC = () => {
  return <Router />;
};

const AppNotReady: React.FC = () => {
  return <p>Loading...</p>;
};

const App: React.FC = () => {
  const [i18nReady, setI18nReady] = useState(false);

  useEffect(() => {
    initI18n().then(() => {
      setI18nReady(true);
    });
  }, []);

  return (
    <HelmetProvider>
      <div className={styles.App}>
        {i18nReady ? <AppReady /> : <AppNotReady />}
      </div>
    </HelmetProvider>
  );
};

export default App;
