import React from 'react';
import { Button } from '@material-ui/core';
import { AddDialog } from './AddDialog';
export const AddButton = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button onClick={handleClickOpen} variant="contained" color="primary">
        Add New
      </Button>
      <AddDialog open={open} handleClose={handleClose} />
    </div>
  );
};
