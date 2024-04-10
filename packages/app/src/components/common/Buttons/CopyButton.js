import * as React from 'react';
import { Button, Snackbar, IconButton } from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FileCopyOutlined, CloseOutlined } from '@material-ui/icons';

export default function YamlHelper(props) {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  };

  const handleClose = ({}, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <CopyToClipboard
        text={props.text}
        onCopy={() => handleClick()}
        {...props}
      >
        <Button startIcon={<FileCopyOutlined />} variant="contained" {...props}>
          Copy
        </Button>
      </CopyToClipboard>
      <Snackbar
        color="red"
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Copied to clipboard"
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      />
    </>
  );
}
