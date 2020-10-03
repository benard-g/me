import { TFunction } from 'i18next';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import imgCalendar from '../../../../assets/iconCalendar.png';
import imgLocation from '../../../../assets/iconLocation.png';
import { Experience } from '../../types/Experience';
import styles from './ExperienceBloc.module.scss';

function formatDate(locale: string, date: Date): string {
  const year = date.getFullYear();
  const month = date.toLocaleDateString(locale, { month: 'short' });

  return `${month} ${year}`;
}

function formatDuration(t: TFunction, start: Date, end: Date): string {
  const duration = end.valueOf() - start.valueOf();
  const rawNbYear = duration / (365.25 * 24 * 3600 * 1000);

  const nbYear = Math.floor(rawNbYear);
  const nbMonth = Math.ceil((rawNbYear - nbYear) * 12);

  const years = `${nbYear} ${t('cv.dates.year', { count: nbYear })} `;
  const months = `${nbMonth} ${t('cv.dates.month', { count: nbMonth })}`;

  return nbYear > 0 ? years + months : months;
}

interface Props {
  experience: Experience;
}

const ExperienceBloc: React.FC<Props> = (props) => {
  const { experience } = props;

  const { t, i18n } = useTranslation();

  const startDate = formatDate(i18n.language, experience.dates.start);
  const endDate = experience.dates.end
    ? formatDate(i18n.language, experience.dates.end)
    : t('cv.dates.now');

  const now = useMemo(() => new Date(), []);
  const duration = formatDuration(
    t,
    experience.dates.start,
    experience.dates.end || now,
  );

  let technologiesBloc: React.ReactNode | undefined = undefined;
  if (experience.technologies && experience.technologies.length > 0) {
    technologiesBloc = (
      <div className={styles.technologies}>
        <ul>
          {experience.technologies.map((technology, idx) => (
            <li key={idx}>{technology}</li>
          ))}
        </ul>
      </div>
    );
  }

  let listBloc: React.ReactNode | undefined = undefined;
  if (experience.list && experience.list.length > 0) {
    listBloc = (
      <div className={styles.realizations}>
        <ul>
          {experience.list.map((item, idx) => (
            <li key={idx}>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className={styles.ExperienceBloc}>
      <h3>
        {experience.title} • {experience.company} ({experience.contract})
      </h3>

      <div className={styles.dateLocationContainer}>
        <p className={styles.dates}>
          <img src={imgCalendar} alt={t('cv.dates.date')} />
          <span className={styles.capitalize}>{startDate}</span>
          <span>{' - '}</span>
          <span className={styles.capitalize}>{endDate}</span>
          <span>({duration})</span>
        </p>
        <p>
          <img src={imgLocation} alt={t('cv.location')} />
          {experience.location}
        </p>
      </div>

      {technologiesBloc}
      {listBloc}
    </div>
  );
};

export default ExperienceBloc;
