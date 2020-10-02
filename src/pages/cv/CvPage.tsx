import React from 'react';
import { Helmet } from 'react-helmet';

import PaperPageContainer from '../../components/PaperPage/PaperPageContainer';

const Page1: React.FC = () => {
  return <p>Page 1</p>;
};

const Page2: React.FC = () => {
  return <p>Page 2</p>;
};

const CvPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>CV - Guillaume Benard</title>
        <meta name="description" content="Discover my online resume." />
      </Helmet>

      <PaperPageContainer>
        <Page1 />
        <Page2 />
      </PaperPageContainer>
    </>
  );
};

export default CvPage;
