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

import React, { useEffect } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core';
import { catalogApiRef } from '@backstage/plugin-catalog-react';
import { useApi } from '@backstage/core-plugin-api';
import { useAsync } from 'react-use';
import {
  getCompoundEntityRef,
  stringifyEntityRef,
} from '@backstage/catalog-model';
import { glossaryApiRef } from '../../../api';
import { GlossaryItemForm } from '../../../types/GlossaryItem';
import getUserDetails1 from '../../../../../../packages/app/src/hooks/getUserDetails';
// import { useEntity } from '@backstage/plugin-catalog-react';
import { Entity } from '@backstage/catalog-model';
type Props = {
  open: boolean;
  handleClose: () => void;
  callBack: () => void;
  setSearchText: (searchText: string) => void;
  setCharacter: (character: string) => void;
};

export const AddDialog = ({
  open,
  handleClose,
  callBack,
  setSearchText,
  setCharacter,
}: Props) => {
  //   const { entity } = useEntity();
  // const entityName = getEntityName(entity)
  const handleCloseDialog = () => {
    handleClose();
  };
  const [term, setTerm] = React.useState('');
  const [definition, setDefinition] = React.useState('');
  const [entityRef, setEntityRef] = React.useState('');
  const user = getUserDetails1();
  const handleChange = (event: any) => {
    setEntityRef(event.target.value);
  };
  const glossaryAPI = useApi(glossaryApiRef);

  const handleSave = (e: any) => {
    e.preventDefault();
    var glossaryItem: GlossaryItemForm = {
      id: 0,
      term: term,
      definition: definition,
      entityRef: entityRef,
      created_by: user.profile?.email || '1',
      isActive: '1',
      isApproved: '1',
    };

    glossaryAPI.addGlossaryItem(glossaryItem).then(() => {
      handleClose();
      setCharacter('');
      setSearchText(term);
      callBack();
    });
  };
  const catalogApi = useApi(catalogApiRef);

  const { value, loading } = useAsync(() =>
    catalogApi.getEntities({ filter: { kind: ['domain'] } }),
  );
  const r: Entity = {
    metadata: {
      namespace: 'default',
      name: 'William-Hill',
      description: 'William Hill Global Content',
      tags: ['Global Component'],
      uid: 'null',
      etag: 'null',
    },
    apiVersion: 'backstage.io/v1alpha1',
    kind: 'Domain',
    spec: {
      'business-unit': 'Portal',
      owner: 'Global',
    },
  };
  useEffect(() => {
    if (!loading) {
      value?.items.push(r);
    }
  }, [loading]);

  return (
    <div>
      <Dialog
        fullWidth
        maxWidth="xs"
        onClose={handleCloseDialog}
        aria-labelledby="dialog-title"
        open={open}
      >
        <DialogTitle id="dialog-title">Add to Glossary </DialogTitle>
        <DialogContent style={{ padding: '1rem', paddingTop: '0rem' }} dividers>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Owner Reference
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={entityRef}
                onChange={handleChange}
              >
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
            <TextField
              id="term"
              label="Term"
              name="term"
              onChange={e => setTerm(e.target.value)}
            ></TextField>
            <TextField
              id="definition"
              label="Definition"
              name="Definition"
              multiline
              onChange={e => setDefinition(e.target.value)}
            ></TextField>
          </div>
        </DialogContent>
        <DialogActions>
          <Button color="primary" type="submit" onClick={handleSave}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
