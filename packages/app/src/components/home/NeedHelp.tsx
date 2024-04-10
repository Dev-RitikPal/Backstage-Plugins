/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button, Paper, Typography } from '@material-ui/core';
import { Link } from '@backstage/core-components';

import Chat from './images/contact_us.png';
import RoadMap from './images/roadmap.png';
// import Feature from './images/request_feature.png';
// import Calendly from './images/calendly.png';
// import Feedback from './images/feedback.png';
import Guide from './images/user-guide.png';
import FAQ from './images/faq.png'

const useStyles = makeStyles({
  root: {
    border: '1px solid #555',
    borderRadius: '6px',
  },
  flex: {
    margin: '10px 10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
  },
  icon: {
    margin: 'auto',
    height: '90px',
    width: 'auto',
    cursor: 'pointer',
  },
});

export const NeedHelp = () => {
  const classes = useStyles();
  // const featureRequest =
  //   'https://gitlab.com/williamhillplc/platform-engineering/portal/platform-engineering-portal/-/issues/new?issuable_template=feature_request';
  const roadMap =
    'https://statusneo.com/rearportal';
  const slack = 'https://slack.com/app_redirect?channel=#';
  // const calendly = 'https://calendly.com/nishkarshraj/engineering-portal-conversation';
  // const feedback = 'https://gitlab.com/williamhillplc/platform-engineering/portal/platform-engineering-portal/-/issues/new?issuable_template=feedback';
  const documentation = '/docs/default/component/engineering-portal/onboarding/welcome-to-backstage/';
  const faq = '/docs/default/component/engineering-portal/onboarding/FAQs/';

  return (
    <Grid
      container
      spacing={1}
      style={{
        display: 'flex',
        marginTop: '40px',
        bottom: '0',
        justifyContent:"center"
      }}
    >
      <Paper style={{ width: '100%', padding: '10px' }}>
        <Grid container justifyContent="center" xs={12}>
          <Typography variant="h5" style={{ margin: '15px' }}>
            Need Help with the Engineering Portal?
          </Typography>
        </Grid>
        <Grid
          container
          justifyContent="space-evenly"
          xs={12}
          alignContent="center"
        >

          <div className={classes.flex}>
            <img
              src={Guide}
              className={classes.icon}
              style={{
                color: '#01af8e',
              }}
            />
            <Link to={documentation}>
              <Button className={classes.root} variant="contained">
                User Guide
              </Button>
            </Link>
          </div>

          <div className={classes.flex}>
            <img
              src={FAQ}
              className={classes.icon}
              style={{
                color: '#01af8e',
              }}
            />

            <Link to={faq}>
              <Button className={classes.root} variant="contained">
                FAQs
              </Button>
            </Link>
          </div>

          <div className={classes.flex}>
            <img
              src={RoadMap}
              className={classes.icon}
              style={{
                color: '#01af8e',
              }}
            />

            <Link to={roadMap}>
              <Button className={classes.root} variant="contained">
                Roadmap
              </Button>
            </Link>
          </div>

          <div className={classes.flex}>
            <img
              src={Chat}
              className={classes.icon}
              style={{
                color: '#01af8e',
              }}
            />
            <Link to={slack}>
              <Button className={classes.root} variant="contained">
                Chat with us
              </Button>
            </Link>
          </div>

          {/* <div className={classes.flex}>
            <img
              src={Calendly}
              className={classes.icon}
              style={{
                color: '#01af8e',
              }}
            />
            <Link to={calendly}>
              <Button className={classes.root} variant="contained">
                Book a Session
              </Button>
            </Link>
          </div>

          <div className={classes.flex}>
            <img
              src={Feature}
              className={classes.icon}
              style={{
                color: '#01af8e',
              }}
            />
            <Link to={featureRequest}>
              <Button className={classes.root} variant="contained">
                Feature Request
              </Button>
            </Link>
          </div>

          <div className={classes.flex}>
            <img
              src={Feedback}
              className={classes.icon}
              style={{
                color: '#01af8e',
              }}
            />
            <Link to={feedback}>
              <Button className={classes.root} variant="contained">
                Provide Feedback
              </Button>
            </Link>
          </div> */}
        </Grid>
      </Paper>
    </Grid>
  );
};
