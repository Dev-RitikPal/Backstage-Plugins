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
import Grid from '@material-ui/core/Grid';
import longLogoIcon from './images/cover.png';

export const Banner = () => {

  return (
    <Grid container spacing={1}>
      <Grid
        container
        style={{ margin: '15px 15px' }}
        justifyContent="center"
        xs={12}
      >
        <img
          src={longLogoIcon}
          style={{
            margin: '15px auto ',
            width: '30%',
          }}
          alt="Banner"
        />
      </Grid>
    </Grid>
  );
};
