import React from 'react';

import imgEn from '../../assets/iconFlagEn.png';
import imgFr from '../../assets/iconFlagFr.png';
import styles from './FlagButton.module.scss';

const COUNTRIES = {
  EN: imgEn,
  FR: imgFr,
};

interface Props {
  type: keyof typeof COUNTRIES;
  onClick: () => void;
}

const FlagButton: React.FC<Props> = (props) => {
  const { type, onClick } = props;

  const imgUrl = COUNTRIES[type];

  return (
    <img
      className={styles.FlagButton}
      src={imgUrl}
      alt={type}
      onClick={onClick}
    />
  );
};

export default FlagButton;
