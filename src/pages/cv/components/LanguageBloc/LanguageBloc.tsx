import React from 'react';

import styles from './LanguageBloc.module.scss';

interface Props {
  lang: string;
  level: string;
}

const LanguageBloc: React.FC<Props> = (props) => {
  const { lang, level } = props;

  return (
    <div className={styles.LanguageBloc}>
      <h3>{lang}</h3>
      <p>{level}</p>
    </div>
  );
};

export default LanguageBloc;
