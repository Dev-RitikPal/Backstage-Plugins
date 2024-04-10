import React from 'react';
import { Grid } from '@material-ui/core';
import { InfoCard, Page, Content, Header } from '@backstage/core-components';
import { Provider } from 'react-redux';
import { ToolkitList } from './ToolkitList/ToolkitList';
import Toolkit from './Toolkit/Toolkit';
import { store } from '../redux/store';

export const ToolkitDetails = () => (
  <Provider store={store}>
    <Page themeId="tool">
      <Header title="Welcome to toolkit!"/>
      <Content>
        <Grid container item xs={12}>
          <Grid item xs={12} md={7}>
            <InfoCard title="Your Toolkit's">
              <ToolkitList checkable={false} />
            </InfoCard>
          </Grid>
          <Grid item xs={12} md={5}>
            <Toolkit mode="write" />
          </Grid>
        </Grid>
      </Content>
    </Page>
  </Provider>
);
