import React from 'react';
import { InfoCard } from '@backstage/core-components';
import { makeStyles } from '@material-ui/core/styles';
import NewsListComponent from './NewsListComponent';
import useGithubNews from './useGithubNews';

const useStyles = makeStyles({
  infoCard: {
    // minWidth: 500,
    height: '100%',
  },
});

const NewsSection = () => {
  const classes = useStyles();
  const newsMarkdown = useGithubNews();

  return (
    <InfoCard
      title="Latest Development in the Community"
      className={`${classes.infoCard}`}
      // subheader="Latest development in Engineering Portal Community"
    >
      <NewsListComponent newsMarkdown={newsMarkdown}/>
    </InfoCard>
  );
};

export default NewsSection;
