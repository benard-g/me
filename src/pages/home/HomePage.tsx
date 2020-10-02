import React from 'react';
import { Helmet } from 'react-helmet';

import styles from './HomePage.module.scss';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Guillaume Benard</title>
        <meta name="description" content="My personal website !" />
      </Helmet>

      <div className={styles.HomePage}>
        <p className={styles.presentationText}>
          This website is under construction, not much to see right now...
        </p>
        <a href="/curriculum-vitae" className={styles.button}>
          Have a look at my resume
        </a>
      </div>
    </>
  );
};

export default HomePage;
