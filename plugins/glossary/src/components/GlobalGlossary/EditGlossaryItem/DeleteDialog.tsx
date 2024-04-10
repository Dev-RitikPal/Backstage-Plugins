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
  Typography,
} from '@material-ui/core';
import { useApi } from '@backstage/core-plugin-api';
import { glossaryApiRef } from '../../../api';
import { GlossaryItem, GlossaryItemForm } from '../../../types/GlossaryItem';
// import { useEntity } from '@backstage/plugin-catalog-react';

type Props = {
  open: boolean;
  handleClose: () => void;
  callBack: () => void;
  glossaryItem?: GlossaryItem;
};

export const DeleteDialog = ({
  open,
  handleClose,
  callBack,
  glossaryItem,
}: Props) => {
  const handleCloseDialog = () => {
    handleClose();
  };
  const [id, setId] = React.useState(0);
  useEffect(() => {
    setId(glossaryItem?.id || 0);
  }, [glossaryItem]);

  const glossaryAPI = useApi(glossaryApiRef);

  const handleSave = (e: any) => {
    e.preventDefault();
    var glossaryItem: GlossaryItemForm = {
      id: id || 0,
      isActive: '0',
    };

    glossaryAPI.updateGlossaryItem(glossaryItem).then(() => {
      handleClose();
      callBack();
    });
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
        <DialogTitle id="dialog-title">{`Delete ${glossaryItem?.term} from Glossary  `}</DialogTitle>
        <DialogContent style={{ padding: '1rem', paddingTop: '0rem' }} dividers>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography>
              {`Are you sure , you want to delete the term - ${
                glossaryItem?.term || ''
              } ?`}
            </Typography>
          </div>
        </DialogContent>
        <DialogActions>
          <Button color="primary" type="submit" onClick={handleSave}>
            Yes
          </Button>
          <Button color="primary" type="submit" onClick={handleClose}>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
