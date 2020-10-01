import React from 'react';

import PaperPage from './PaperPage';
import styles from './PaperPageContainer.module.scss';

const PaperPageContainer: React.FC = (props) => {
  const { children } = props;

  const pages = React.Children.map(children, (child) => (
    <PaperPage>{child}</PaperPage>
  ));

  return <div className={styles.PaperPageContainer}>{pages}</div>;
};

export default PaperPageContainer;
