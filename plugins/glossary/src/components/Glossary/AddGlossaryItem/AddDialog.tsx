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
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from '@material-ui/core';
import { getCompoundEntityRef } from '@backstage/catalog-model';
import { useEntity } from '@backstage/plugin-catalog-react';

type Props = {
  open: boolean;
  handleClose: () => void;
};

export const AddDialog = ({ open, handleClose }: Props) => {
  const { entity } = useEntity();
  const entityName = getCompoundEntityRef(entity);
  console.log(entity);
  const handleCloseDialog = () => {
    handleClose();
  };

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
            <Typography variant="subtitle1">
              {`Adding to - `}
              <code>{entityName.name} </code>
            </Typography>
            <TextField id="term" label="Term" name="term"></TextField>
            <TextField
              id="definition"
              label="Definition"
              name="Definition"
            ></TextField>
          </div>
        </DialogContent>
        <DialogActions>
          <Button color="primary" type="submit">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
