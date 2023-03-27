import React from 'react';
import { Button } from '@material-ui/core';
import { AddDialog } from './AddDialog';

type Props={
callBack: () => void;
setSearchText: (searchText: string) => void;
setCharacter: (character: string) => void;

}
export const AddButton = ({callBack,setSearchText,setCharacter}:Props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div style={{margin:"10px 0px"}}>
      <Button onClick={handleClickOpen} variant="contained" color="primary">
        Add New Term
      </Button>
      <AddDialog                 setCharacter={setCharacter}
                setSearchText={setSearchText}
 callBack={callBack} open={open} handleClose={handleClose} />
    </div>
  );
};
