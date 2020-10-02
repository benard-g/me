import React from 'react';

import styles from './PaperPage.module.scss';

const PaperPage: React.FC = (props) => {
  const { children } = props;

  return <div className={styles.PaperPage}>{children}</div>;
};

export default PaperPage;
