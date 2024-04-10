import React, { createContext, useState } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
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

export const UserContext = createContext(null);

export const ExampleComponent = () => {

  const [value,setValue] = useState(0)

  return (
    <UserContext.Provider value={value}>
      <Page themeId="tool">
        <Header
          title="Welcome to context-api-poc!"
          subtitle="Optional subtitle"
        >
          <HeaderLabel label="Owner" value="Team X" />
          <HeaderLabel label="Lifecycle" value="Alpha" />
        </Header>
        <Content>
          <ContentHeader title="Plugin title">
            <SupportButton>
              A description of your plugin goes here.
            </SupportButton>
          </ContentHeader>
          <Grid container spacing={3} direction="column">
            <Grid item>
              <InfoCard title="Information card">
                <Typography variant="body1">
                  All content should be wrapped in a card like this.
                </Typography>
              </InfoCard>
            </Grid>
            <Grid item>
              <ExampleFetchComponent />
              <Button onClick={()=>setValue(value-1)} >Decrease</Button>
              <Button onClick={()=>setValue(value+1)}>Increase</Button>
            </Grid>
          </Grid>
        </Content>
      </Page>
    </UserContext.Provider>
  );
};
