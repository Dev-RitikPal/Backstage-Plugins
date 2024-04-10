import React from 'react';
import { IconButton } from '@material-ui/core';
import { EditDialog } from './EditDialog';
import EditIcon from '@material-ui/icons/EditOutlined';
import { GlossaryItem } from '../../../types/GlossaryItem';
import removeQuery from '../../../util/removeQueryString';

type Props = {
  callBack: () => void;
  glossaryItem: GlossaryItem;
};
export const EditButton = ({ callBack, glossaryItem }: Props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    removeQuery()
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div style={{ margin: '10px 0px' }}>
      <IconButton
        color="primary"
        aria-label="Edit Term"
        component="span"
        onClick={handleClickOpen}
      >
        <EditIcon />
      </IconButton>
      <EditDialog
        glossaryItem={glossaryItem}
        callBack={callBack}
        open={open}
        handleClose={handleClose}
      />
    </div>
  );
};
