// import {
//   // HomePageRandomJoke,
//   // ComponentAccordion,
//   // ComponentTabs,
//   // ComponentTab,
//   WelcomeTitle,
//   HeaderWorldClock,
//   // ClockConfig,
//   // HomePageToolkit,
// } from '@backstage/plugin-home';
import { HomePageStarredEntities } from '@backstage/plugin-home';
import {
  Content,
  // Header,
  // InfoCard,
  // Link,
  Page,
} from '@backstage/core-components';
import { SearchContextProvider } from '@backstage/plugin-search-react';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import { HomePageSearchBar } from './SearchBar';
// import { useTheme } from '@material-ui/styles';
import { Banner } from './Banner';
import News from './News';
// import { MyTeamSpace } from './MyTeamSpace';
import VideoComponent from '../VideosComponent/VideoComponent';
import { NeedHelp } from './NeedHelp';
// import VideoComponent from '../VideosComponent/VideoComponent';
// import { AnnouncementsCard, NewAnnouncementBanner } from '@k-phoen/backstage-plugin-announcements';
import { NewAnnouncementBanner } from '@k-phoen/backstage-plugin-announcements';
import { Toolkit } from '@internal/plugin-toolkit';
import { MicrosoftCalendarCard } from "@backstage/plugin-microsoft-calendar";
import Onboarding from '@internal/plugin-onboarding/src/components/onboarding';
import { makeStyles } from '@material-ui/core';
import {
  GithubPullRequestsCard,
  GithubActionsCard,
} from '@statusneo/backstage-plugin-github';

const useStyles = makeStyles(() => ({
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export const HomePage = () => {
  const classes = useStyles();

  // const theme = JSON.parse(JSON.stringify(useTheme()));
  return (
    <Page themeId="home">
      {/* <Header title={<WelcomeTitle />} pageTitleOverride="Home">
        <HeaderWorldClock clockConfigs={clockConfigs} />
      </Header> */}

      {/* <Header title="AnnouncementsCard" /> */}

      {/* <Content>
        <Grid container>
          <Grid item md={6}>
            <AnnouncementsCard max={3} />
          </Grid>
        </Grid>
      </Content>
     */}

      <Content>
        <Grid container>
          <Grid item md={12}>
            <NewAnnouncementBanner />
          </Grid>
        </Grid>
      </Content>

      <Content>
        <Grid container spacing={3}>
          <Grid container justifyContent="center">
            <Banner />
            <SearchContextProvider>
              <HomePageSearchBar />
            </SearchContextProvider>
            {/* <MyTeamSpace /> */}

            <Grid
              container
              direction="row"
              alignItems="stretch"
              justifyContent="center"
              style={{
                padding: '16px 8px',
              }}
              wrap="wrap"
            >
              <Grid item xs={12} md={6}>
                <News />
              </Grid>
              <Grid item xs={12} md={6}>
                <Toolkit />
              </Grid>
              <Grid item xs={12} md={6}>
                <Onboarding />
              </Grid>
              <Grid item xs={12} md={6}>
                <HomePageStarredEntities />
              </Grid>
              <Grid item xs={12} md={6}>
                <GithubActionsCard />
              </Grid>
              <Grid item xs={12} md={6}>
                <GithubPullRequestsCard />
              </Grid>
              <Grid item xs={12} md={6}>
                <HomePageStarredEntities />
              </Grid>
              <Grid item xs={12} md={6}>
                <MicrosoftCalendarCard />
              </Grid>
              <Grid item xs={12} md={6} classes={{ root: classes.center }}>
                {/* <VideoComponent src="https://www.youtube.com/embed/85TQEpNCaU0" /> */}
                <VideoComponent src="https://www.youtube.com/embed/qZ1cuyLPRyk" />
              </Grid>
            </Grid>
          </Grid>
          <NeedHelp />
        </Grid>
      </Content>
    </Page>
  );
};
