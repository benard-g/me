import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import imgAge from '../../assets/iconCake.png';
import imgEmail from '../../assets/iconEmail.png';
import imgGithub from '../../assets/iconGithub.png';
import imgLinkedin from '../../assets/iconLinkedin.png';
import imgLocation from '../../assets/iconLocation.png';
import imgPhone from '../../assets/iconPhone.png';
import PaperPageContainer from '../../components/PaperPage/PaperPageContainer';
import EducationBloc from './components/EducationBloc/EducationBloc';
import ExperienceBloc from './components/ExperienceBloc/ExperienceBloc';
import styles from './CvPage.module.scss';

function getAge(): number {
  const birthDate = new Date('1997-11-14');
  const age = Date.now() - birthDate.valueOf();

  return Math.floor(age / (365.25 * 24 * 3600 * 1000));
}

const Page1: React.FC = () => {
  const { t } = useTranslation();

  const age = useMemo(getAge, []);

  return (
    <div className={styles.page}>
      <div className={styles.leftColumn}>
        <div className={styles.title}>
          <h1>{t('cv.title.name')}</h1>
          <p>{t('cv.title.job')}</p>
        </div>

        <div className={styles.section}>
          <h2>{t('cv.introduction.title')}</h2>
          <p>{t('cv.introduction.text')}</p>
        </div>

        <div className={styles.section}>
          <h2>{t('cv.experience.title')}</h2>

          <ExperienceBloc
            experience={{
              company: 'Kapten',
              title: t('cv.experience.kapten.title'),
              contract: t('cv.experience.kapten.contract'),
              dates: {
                start: new Date('2020-03-16'),
              },
              location: 'Paris, France',
              list: t('cv.experience.kapten.list'),
              technologies: [
                'NodeJS',
                'Typescript',
                'Javascript',
                'ExpressJS',
                'MongoDB',
                'Python',
                'Flask',
                'React',
                'Angular',
              ],
            }}
          />

          <ExperienceBloc
            experience={{
              company: 'Polyconseil',
              title: t('cv.experience.polyconseil.title'),
              contract: t('cv.experience.polyconseil.contract'),
              dates: {
                start: new Date('2019-09-02'),
                end: new Date('2020-02-26'),
              },
              location: 'Paris, France',
              list: t('cv.experience.polyconseil.list'),
              technologies: [
                'React',
                'Typescript',
                'NodeJS',
                'Python',
                'Django',
                'ElasticSearch',
                'Postgres',
              ],
            }}
          />

          <ExperienceBloc
            experience={{
              company: '',
              title: t('cv.experience.freelance.title'),
              contract: t('cv.experience.freelance.contract'),
              dates: {
                start: new Date('2019-07-01'),
                end: new Date('2019-08-26'),
              },
              location: 'Paris, France',
              list: t('cv.experience.freelance.list'),
              technologies: ['Python', 'OpenCV', 'Flask', 'WebSocket'],
            }}
          />

          <ExperienceBloc
            experience={{
              company: 'Shift-Technology',
              title: t('cv.experience.shift.title'),
              contract: t('cv.experience.shift.contract'),
              dates: {
                start: new Date('2018-04-16'),
                end: new Date('2018-08-24'),
              },
              location: 'Paris, France',
              list: t('cv.experience.shift.list'),
              technologies: ['C#', 'LINQ', 'OrmLite'],
            }}
          />

          <ExperienceBloc
            experience={{
              company: 'Epitech',
              title: t('cv.experience.astek.title'),
              contract: t('cv.experience.astek.contract'),
              dates: {
                start: new Date('2017-02'),
                end: new Date('2018-03-31'),
              },
              location: 'Paris, France',
              list: t('cv.experience.astek.list'),
              technologies: ['C', 'C++', 'Unix'],
            }}
          />

          <ExperienceBloc
            experience={{
              company: 'AdVitam',
              title: t('cv.experience.advitam.title'),
              contract: t('cv.experience.advitam.contract'),
              dates: {
                start: new Date('2016-07-02'),
                end: new Date('2016-12-21'),
              },
              location: 'Paris, France',
              list: t('cv.experience.advitam.list'),
              technologies: [
                'HTML',
                'CSS',
                'Javascript',
                'Typescript',
                'Angular',
                'Elixir',
                'Phoenix',
                'MySQL',
                'Apache',
              ],
            }}
          />
        </div>
      </div>

      <div className={styles.rightColumn}>
        <div className={styles.details}>
          <h2>{t('cv.details.title')}</h2>
          <p>
            <img src={imgAge} alt={t('cv.details.age')} />
            <span>{t('cv.details.ageValue', { age })}</span>
          </p>
          <p>
            <img src={imgLocation} alt={t('cv.details.location')} />
            <span>Paris, France</span>
          </p>
          <p>
            <img src={imgEmail} alt={t('cv.details.email')} />
            <a href="mailto:guillaume@benard.io">guillaume@benard.io</a>
          </p>
          <p>
            <img src={imgPhone} alt={t('cv.details.phone')} />
            <a href="tel:+33616341079">+33 6 16 34 10 79</a>
          </p>
          <p>
            <img src={imgLinkedin} alt={t('cv.details.linkedin')} />
            <a href="https://www.linkedin.com/in/guillaume-benard/">
              guillaume-benard
            </a>
          </p>
          <p>
            <img src={imgGithub} alt={t('cv.details.github')} />
            <a href="https://github.com/benard-g">benard-g</a>
          </p>
        </div>

        <div className={styles.section}>
          <h2>{t('cv.education.title')}</h2>

          <EducationBloc
            school={{
              name: t('cv.education.epitech.name'),
              list: t('cv.education.epitech.list'),
              dates: {
                startYear: 2015,
                endYear: 2020,
              },
            }}
          />

          <EducationBloc
            school={{
              name: t('cv.education.laval.name'),
              list: t('cv.education.laval.list'),
              dates: {
                startYear: 2018,
                endYear: 2019,
              },
            }}
          />

          <EducationBloc
            school={{
              name: t('cv.education.highschool.name'),
              list: t('cv.education.highschool.list'),
              dates: {
                startYear: 2012,
                endYear: 2015,
              },
            }}
          />
        </div>

        <div className={styles.section}>
          <h2>{t('cv.languages.title')}</h2>
          <p>TODO</p>
        </div>

        <div className={styles.section}>
          <h2>{t('cv.hobbies.title')}</h2>
          <p>TODO</p>
        </div>
      </div>
    </div>
  );
};

const CvPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('cv.head.title')}</title>
        <meta name="description" content={t('cv.head.description')} />
      </Helmet>

      <PaperPageContainer>
        <Page1 />
      </PaperPageContainer>
    </>
  );
};

export default CvPage;
