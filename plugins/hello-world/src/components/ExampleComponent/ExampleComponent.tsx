import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import {
  InfoCard,
  Header,
  Page,
  Content,
  ContentHeader,
  HeaderLabel,
  SupportButton,
} from '@backstage/core-components';
import { ExampleFetchComponent } from '../ExampleFetchComponent';

export const ExampleComponent = () => (
  <Page themeId="tool">
    <Header title="William Hill Engineering Portal" subtitle="Demo Plugin">
      <HeaderLabel label="Author" value="Nishkarsh Raj" />
      <HeaderLabel label="Owner" value="Portal" />
    </Header>
    <Content>
      <ContentHeader title="Hello, World! Plugin">
        <SupportButton>A description of your plugin goes here.</SupportButton>
      </ContentHeader>
      <Grid container spacing={3} direction="column">
        <Grid item>
          <InfoCard title="About William Hill">
            <Typography variant="body1">
              Click <a href="https://www.williamhillgroup.com/about-us/our-history/#:~:text=A%20proposed%20stock%20market%20float,based%20clients%20via%20the%20internet.">here</a> to read about the history of William Hill.
            </Typography>
          </InfoCard>
        </Grid>
        <Grid item>
          <ExampleFetchComponent />
        </Grid>
      </Grid>
    </Content>
  </Page>
);
