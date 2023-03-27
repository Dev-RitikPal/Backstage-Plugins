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
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { catalogApiRef } from '@backstage/plugin-catalog-react';
import { useApi } from '@backstage/core-plugin-api';
import { useAsync } from 'react-use';
import {
  getCompoundEntityRef,
  stringifyEntityRef,
} from '@backstage/catalog-model';

type Props = {
  callBack: () => void;
  setFilter: (searchText: string) => void;
  filter: string;
};

export const FilterGroups = ({ callBack, setFilter }: Props) => {
  const [entityRef, setEntityRef] = React.useState("All");
  const handleChange = (event: any) => {
    setEntityRef(event.target.value);
    if (event?.target.value === 'All') {
      setEntityRef('All');
      setFilter('');
    } else if (event?.target.value !== 'All') {
      setEntityRef(event.target.value);
      setFilter(event.target.value);
    }
    callBack();
  };
  const catalogApi = useApi(catalogApiRef);
  const {
    value,
    loading: {},
  } = useAsync(() => catalogApi.getEntities({ filter: { kind: ['domain'] } }));
  return (
    <div style={{ marginRight: '5px' }}>
      <InputLabel id="demo-simple-select-label">Filter Group</InputLabel>
      <FormControl style={{ width: '150px', height: '100%' }}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={entityRef}
          onChange={handleChange}
          variant="outlined"
          style={{ marginTop: '10px', padding: '2px' }}
        >
          <MenuItem key={12} value={`All`}>
            All
          </MenuItem>

          {value?.items.map((item, index) => (
            <MenuItem
              key={index}
              value={
                typeof value?.items[0] !== 'undefined'
                  ? stringifyEntityRef(item)
                  : ''
              }
            >
              {typeof value?.items[0] !== 'undefined' &&
                getCompoundEntityRef(item).name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
