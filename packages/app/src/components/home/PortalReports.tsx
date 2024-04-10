import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Content, Header, Page } from '@backstage/core-components';

const Reports = () => {
  const removeEmptyOrNull = (obj: any) => {
    Object.keys(obj).forEach(
      k =>
        (obj[k] && typeof obj[k] === 'object' && removeEmptyOrNull(obj[k])) ||
        (!obj[k] && obj[k] !== undefined && delete obj[k]),
    );
    return obj;
  };
  return (
    <Page themeId="home">
      <Header title="Portal Reports" />
      <Content>
        <Grid container>
          <Grid xs={12} md={12} item>
            <Typography variant="h4">User Time on site</Typography>
            <iframe
              width="800"
              height="400"
              src="https://chart-embed.service.newrelic.com/herald/49eb44af-255b-4ca0-ab75-6055fcb0d3bb?height=400px&timepicker=true"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </Grid>
          <Grid xs={12} md={12} item>
            <Typography variant="h4">Front-End vs Back-End</Typography>
            <iframe
              width="800"
              height="400"
              src="https://chart-embed.service.newrelic.com/herald/9f4c0faa-1bc1-4770-b8a5-383b515e415b?height=400px&timepicker=true"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </Grid>
          <Grid xs={12} md={12} item>
            <Typography variant="h4">
              Initial page load and route change
            </Typography>
            <iframe
              width="800"
              height="400"
              src="https://chart-embed.service.newrelic.com/herald/04da5d69-4a87-4e86-b2bc-4d425f2889f5?height=400px&timepicker=true"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </Grid>
        </Grid>
      </Content>
    </Page>
  );
};

export const PortalReports = Reports;
