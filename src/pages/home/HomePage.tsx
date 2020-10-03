import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import styles from './HomePage.module.scss';

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('home.head.title')}</title>
        <meta name="description" content={t('home.head.description')} />
      </Helmet>

      <div className={styles.HomePage}>
        <p className={styles.presentationText}>{t('home.content.text')}</p>
        <Link to="/curriculum-vitae" className={styles.button}>
          {t('home.content.button')}
        </Link>
      </div>
    </>
  );
};

export default HomePage;
