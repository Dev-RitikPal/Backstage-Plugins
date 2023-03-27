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

import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import { discoveryApiRef, useApi } from '@backstage/core-plugin-api';
import getUserDetails from '../../hooks/getUserDetails';
import { Link } from '@backstage/core-components';

const useStyles = makeStyles({
  root: {
    border: '1px solid #555',
    borderRadius: '6px',
    fontSize: '16px',
    padding: '4px 18px',
    marginTop: '12px',
  },
});

export const MyTeamSpace = () => {
  const classes = useStyles();
  const { profile } = getUserDetails();
  const [group, setGroup] = useState<any>({});
  const discoveryApi = useApi(discoveryApiRef);
  discoveryApi.getBaseUrl('catalog');
  useEffect(() => {
    discoveryApi.getBaseUrl('catalog').then(r1 => {
      fetch(
        `${r1}/entities/by-name/user/default/${profile?.email
          ?.split('@')[0]
          .toLowerCase()}`,
      )
        .then(r => r.json())
        .then(r => {
          const matchedUsers = r.relations?.find(
            (element: any) => element.type == 'memberOf',
          );
          setGroup(matchedUsers);
        });
    });
  }, [profile]);
  if (!group?.target?.namespace || group?.target?.name == 'undefined') {
    return <></>;
  }
  return (
    <Grid container spacing={1}>
      <Grid
        container
        style={{ margin: '18px 18px' }}
        justifyContent="center"
        xs={12}
      >
        <Link
          to={`/catalog/${group?.target?.namespace}/group/${group?.target?.name}`}
        >
          <Button className={classes.root} variant="contained">
            My Squad
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};
