import React from 'react';
import { IconButton } from '@material-ui/core';
import { FileCopy } from '@material-ui/icons';
import { GlossaryItem } from './../../types/GlossaryItem';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
type Props = {
  glossaryItem: GlossaryItem;
};
export const CopyToClipboard = ({ glossaryItem }: Props) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = (
    _event: React.SyntheticEvent | React.MouseEvent,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div >
      <IconButton size='small'
        color="primary"
        aria-label="Edit Term"
        component="span"
        onClick={() => {
          var urlSplit = window?.location.href?.split('?');
          var stateObj = {
            Title: 'William Hill Global Glossary',
            Url: urlSplit[0] + '?search=' + encodeURI(glossaryItem.term),
          };
          // history?.pushState(stateObj, stateObj.Title, stateObj.Url);
          navigator.clipboard.writeText(stateObj.Url);
          setOpen(true);
        }}
      >
        <FileCopy style={{ height:"12px",width:"auto",color: 'gray' }} />
      </IconButton>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        message="Copied to Clipboard"
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
};
