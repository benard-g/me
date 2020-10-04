import React from 'react';

import styles from './HobbyBloc.module.scss';

interface Props {
  name: string;
  list?: string[];
}

const HobbyBloc: React.FC<Props> = (props) => {
  const { name, list } = props;

  let listBloc: React.ReactNode | undefined;
  if (list && list.length > 0) {
    listBloc = (
      <ul className={styles.list}>
        {list.map((item, idx) => (
          <li key={idx}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className={styles.HobbyBloc}>
      <h3>{name}</h3>
      {listBloc}
    </div>
  );
};

export default HobbyBloc;
