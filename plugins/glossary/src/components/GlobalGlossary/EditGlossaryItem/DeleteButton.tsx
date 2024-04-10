import React from 'react';
import { IconButton } from '@material-ui/core';
import { DeleteSharp } from '@material-ui/icons';
import { GlossaryItem } from '../../../types/GlossaryItem';
import { DeleteDialog } from './DeleteDialog';
import removeQuery from '../../../util/removeQueryString';

type Props = {
  callBack: () => void;
  glossaryItem: GlossaryItem;
};
export const DeleteButton = ({ callBack, glossaryItem }: Props) => {
  const [openDelete, setOpenDelete] = React.useState(false);

  const handleDelete = () => {
    setOpenDelete(true);
    removeQuery()
  };
  return (
    <div style={{ margin: '10px 0px' }}>
      <IconButton
        color="primary"
        aria-label="Edit Term"
        component="span"
        onClick={handleDelete}
      >
        <DeleteSharp style={{ color: '#c70303' }} />
      </IconButton>
      <DeleteDialog
        glossaryItem={glossaryItem}
        callBack={callBack}
        open={openDelete}
        handleClose={() => setOpenDelete(false)}
      ></DeleteDialog>
    </div>
  );
};
