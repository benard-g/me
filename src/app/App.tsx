import React from 'react';

import styles from './App.module.scss';
import Router from './Router';

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <Router />
    </div>
  );
};

export default App;
