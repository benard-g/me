import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

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
        <Link to="/curriculum-vitae" className={styles.button}>
          Have a look at my resume
        </Link>
      </div>
    </>
  );
};

export default HomePage;
