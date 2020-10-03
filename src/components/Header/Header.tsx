import React from 'react';
import { useTranslation } from 'react-i18next';

import FlagButton from '../FlagButton/FlagButton';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const { i18n } = useTranslation();

  const updateLanguage = (language: string) => i18n.changeLanguage(language);

  return (
    <div className={styles.Header}>
      <div className={styles.flagsContainer}>
        <FlagButton type="FR" onClick={() => updateLanguage('fr')} />
        <FlagButton type="EN" onClick={() => updateLanguage('en')} />
      </div>
    </div>
  );
};

export default Header;
