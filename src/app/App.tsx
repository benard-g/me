import React, { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import Header from '../components/Header/Header';
import styles from './App.module.scss';
import { initI18n } from './i18next';
import Router from './Router';

const AppReady: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <>
      <Helmet htmlAttributes={{ lang: i18n.language }} />
      <Header />
      <Router />
    </>
  );
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
