import React from 'react';
import { useTranslation } from 'react-i18next';

import imgCalendar from '../../../../assets/iconCalendar.png';
import { Education } from '../../types/Education';
import styles from './EducationBloc.module.scss';

interface Props {
  school: Education;
}

const EducationBloc: React.FC<Props> = (props) => {
  const { school } = props;

  const { t } = useTranslation();

  let listBloc: React.ReactNode | undefined;
  if (school.list && school.list.length > 0) {
    listBloc = (
      <div className={styles.list}>
        <ul>
          {school.list.map((item, idx) => (
            <li key={idx}>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className={styles.EducationBloc}>
      <h3>{school.name}</h3>

      <p className={styles.dates}>
        <img src={imgCalendar} alt={t('cv.dates.date')} />
        <span>{school.dates.startYear}</span>
        <span>-</span>
        <span>{school.dates.endYear}</span>
      </p>

      {listBloc}
    </div>
  );
};

export default EducationBloc;
